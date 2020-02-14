import * as Keycloak from 'keycloak-js'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {styleSheetMediaAll} from '@flexio-oss/js-style-theme-interface'
import {themeAppFlexio} from '@flexio-corp/theme-app-flexio'
import {SimpleNotifierBuilder} from '@flexio-oss/simple-dom-notifier'
import {KeycloakExecutor, XmlHttpRequester} from '@flexio-oss/js-keycloack-http-requester'
import {EnvironmentService} from '@flexio-corp/hbservice-environment'
import {ApplicationBuilder, Dispatcher} from '@flexio-oss/hotballoon'
import {assertType, isNull, TypeCheck} from '@flexio-oss/assert'
import {ConsoleLogger, FakeLogger} from '@flexio-oss/js-logger'
import {Stylist} from '@flexio-oss/stylist'


export class KeyCloakApplicationBuilder {
  /**
   *
   * @param {AppEnvironment} env
   */
  constructor(env) {
    /**
     *
     * @type {AppEnvironment}
     * @private
     */
    this.__env = env
    /**
     *
     * @type {?string}
     * @private
     */
    this.__name = null

    /**
     *
     * @type {Keycloak}
     * @private
     */
    this.__keycloak = Keycloak(
        this.__env.config().keycloak().toObject()
    )

    /**
     *
     * @type {?HotBalloonApplication}
     */
    this.__hotballoonApplication = null

    /**
     *
     * @type {?LoggerInterface}
     * @private
     */
    this.__logger = null
    /**
     * @type {?function():XmlHttpRequester}
     * @private
     */
    this.__requester = null
    /**
     *
     * @type {{color: string}}
     * @private
     */
    this.__logConf = {color: '#000'}
    /**
     *
     * @type {?Stylist}
     * @private
     */
    this.__stylist = null
    /**
     *
     * @type {?ThemeStyle}
     */
    this.__themeStyle = null

    /**
     *
     * @type {?SimpleNotifierPublic}
     */
    this.__loadingNotifierService = null
    /**
     *
     * @type {?EnvironmentService}
     * @private
     */
    this.__environmentService = null
  }

  /**
   *
   * @param {string} name
   * @return {KeyCloakApplicationBuilder}
   */
  name(name) {
    this.__name = name
    return this
  }

  withConsoleLogger() {
    this.__logger = new ConsoleLogger()
    return this
  }

  withLoggerLevelDebug() {
    this.__logger = this.__logger.debug()
    return this
  }

  withStylist() {
    this.__stylist = new Stylist(
      this.__logger,
      new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaArrayBuilder()
        .pushValue(styleSheetMediaAll)
        .build(),
      this.__env.config().obfuscateCSS()
    )
    return this

  }

  /**
   *
   * @return {KeyCloakApplicationBuilder}
   */
  withFlexioThemeStyle() {

    /**
     *
     * @type {ThemeStyle}
     */
    this.__themeStyle = themeAppFlexio.register(this.__stylist)
    return this
  }

  /**
   *
   * @return {KeyCloakApplicationBuilder}
   */
  withLoadingNotifierService() {
    /**
     *
     * @type {SimpleNotifierPublic}
     */
    this.__loadingNotifierService = new SimpleNotifierBuilder()
      .message('chargement...')
      .styles(this.__themeStyle)
      .build()

    /**
     *
     * @type {Notifying}
     */
    const startLoading = this.__loadingNotifierService.open()
    return this
  }

  /**
   *
   * @return {KeyCloakApplicationBuilder}
   */
  withXhtmlRequester() {
    this.__requester = () => {
      const executor = new KeycloakExecutor(
        this.__keycloak,
        (e) => {
          this.__logger.log(
            this.__logger.builder().error().pushLog('Can not access !'),
            this.__logConf
          )
        })
      return new XmlHttpRequester(executor)
        .XAccount(this.__env.config().account())
    }
    return this
  }

  /**
   *
   * @return {KeyCloakApplicationBuilder}
   */
  withEnvService() {

    this.__environmentService = new EnvironmentService(
      new globalFlexioImport.io.flexio.hbservice_environment.type.EnvironmentBuilder()
        .locale('fr-FR')
        .build()
    )

    return this

  }

  /**
   * @return {KeyCloakApplication}
   */
  build() {

    this.__hotballoonApplication = new ApplicationBuilder()
      .id(this.__name)
      .logger(this.__logger)
      .dispatcher(new Dispatcher(this.__logger))
      .document(document)
      .build()

    if (!isNull(this.__environmentService)) {
      this.__hotballoonApplication.addService(this.__environmentService)
    }

    if (!isNull(this.__loadingNotifierService)) {
      this.__hotballoonApplication.addService(this.__loadingNotifierService)
    }

    return new KeyCloakApplication(
      new KeyCloakApplicationConfig(
        this.__env,
        this.__name,
        this.__keycloak,
        this.__requester,
        this.__stylist,
        this.__logger,
        this.__logConf,
        this.__hotballoonApplication,
        this.__themeStyle
      )
    )
  }
}


class KeyCloakApplicationConfig {
  /**
   *
   * @return {AppEnvironment}
   */
  env() {
    return this.__env
  }

  /**
   *
   * @return {string}
   */
  name() {
    return this.__name
  }

  /**
   *
   * @return {Keycloak}
   */
  keycloack() {
    return this.__keycloack
  }

  /**
   *
   * @return {?(function(): XmlHttpRequester)}
   */
  requester() {
    return this.__requester
  }

  /**
   *
   * @return {?Stylist}
   */
  stylist() {
    return this.__stylist
  }

  /**
   *
   * @return {LoggerInterface}
   */
  logger() {
    return this.__logger
  }

  /**
   *
   * @return {Object}
   */
  logConf() {
    return this.__logConf
  }

  /**
   *
   * @return {HotBalloonApplication}
   */
  hotballoonApplication() {
    return this.__hotballoonApplication
  }

  /**
   *
   * @return {?ThemeStyle}
   */
  themeStyle() {
    return this.__themeStyle
  }

  /**
   *
   * @param {AppEnvironment} env
   * @param {string} name
   * @param {Keycloak} keycloack
   * @param {?function():XmlHttpRequester} requester
   * @param {?Stylist} stylist
   * @param {LoggerInterface} logger
   * @param {Object} logConf
   * @param {HotBalloonApplication} hotballoonApplication
   * @param {?ThemeStyle} themeStyle
   */
  constructor(env, name, keycloack, requester, stylist, logger, logConf, hotballoonApplication, themeStyle) {
    TypeCheck.assertIsString(name)

    /**
     *
     * @type {AppEnvironment}
     * @private
     */
    this.__env = env
    /**
     *
     * @type {string}
     * @private
     */
    this.__name = name
    /**
     *
     * @type {Keycloak}
     * @private
     */
    this.__keycloack = keycloack
    /**
     *
     * @type {?(function(): XmlHttpRequester)}
     * @private
     */
    this.__requester = requester
    /**
     *
     * @type {?Stylist}
     * @private
     */
    this.__stylist = stylist
    /**
     *
     * @type {LoggerInterface}
     * @private
     */
    this.__logger = logger
    /**
     *
     * @type {Object}
     * @private
     */
    this.__logConf = logConf
    /**
     *
     * @type {HotBalloonApplication}
     * @private
     */
    this.__hotballoonApplication = hotballoonApplication
    /**
     *
     * @type {?ThemeStyle}
     * @private
     */
    this.__themeStyle = themeStyle
  }
}


class KeyCloakApplication {
  /**
   *
   * @param {KeyCloakApplicationConfig} config

   */
  constructor(config) {
    /**
     *
     * @type {KeyCloakApplicationConfig}
     * @private
     */
    this.__config = config
  }

  /**
   *
   * @return {AppEnvironment}
   */
  env() {
    return this.__config.env()
  }

  /**
   *
   * @return {string}
   */
  name() {
    return this.__config.name()
  }

  /**
   *
   * @return {Keycloak}
   */
  keycloack() {
    return this.__config.keycloack()
  }

  /**
   *
   * @return {?(function(): XmlHttpRequester)}
   */
  requester() {
    return this.__config.requester()
  }

  /**
   *
   * @return {?Stylist}
   */
  stylist() {
    return this.__config.stylist()
  }

  /**
   *
   * @return {LoggerInterface}
   */
  logger() {
    return this.__config.logger()
  }

  /**
   *
   * @return {Object}
   */
  logConf() {
    return this.__config.logConf()
  }

  /**
   *
   * @return {HotBalloonApplication}
   */
  hotballoonApplication() {
    return this.__config.hotballoonApplication()
  }

  /**
   *
   * @return {?ThemeStyle}
   */
  themeStyle() {
    return this.__config.themeStyle()
  }

  /**
   *
   * @param {function()} callback
   */
  boot(callback) {
    TypeCheck.assertIsFunction(callback)

    this.__info(this.__config.name() + ':INIT')

    this.__config.keycloack()
      .init( Object.assign(
        {promiseType: 'native'},
        this.__config.env().config().keycloak().toObject()
      ))
      .then((authenticated) => {

        if (!authenticated) {
          this.__error('Access denied : BAD_AUTHENTIFICATION')
          throw new Error('Access denied')
        }

        const canAccessApp = this.__config.keycloack().hasResourceRole(
          this.__config.env().config().keycloak().accessRole(),
          this.__config.env().config().keycloak().clientId()
        )

        if (!canAccessApp) {
          this.__error('Access denied : BAD_ACCESS_ROLE')
          throw new Error('Access denied')
        }

        this.__info('Authenticated and can access !')
        this.__debug(this.hotballoonApplication())

        /**
         * #####################
         * BOOT MAIN COMPONENT
         * #####################
         */
        callback.call()
        /**
         * #####################
         */
      })
      .catch((a) => {
        console.error(a)
      })
  }

  /**
   *
   * @param {string|Object} log
   * @private
   */
  __debug(log) {
    this.__config.logger().log(
      this.__config.logger().builder().debug().pushLog(log),
      this.__config.logConf()
    )
  }

  /**
   *
   * @param {string|Object} log
   * @private
   */
  __info(log) {
    this.__config.logger().log(
      this.__config.logger().builder().info().pushLog(log),
      this.__config.logConf()
    )
  }

  /**
   *
   * @param {string|Object} log
   * @private
   */
  __error(log) {
    this.__config.logger().log(
      this.__config.logger().builder().error().pushLog(log),
      this.__config.logConf()
    )
  }
}
