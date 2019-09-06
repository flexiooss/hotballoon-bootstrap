import {isNode, assertType, isNull} from '@flexio-oss/assert'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {ComponentCounterBuilder} from '../../../component-counter'
import {ActionDispatcherBuilder, ActionDispatcherConfig, ActionTypeConfig, TypeCheck} from '@flexio-oss/hotballoon'

export class ActionInitializeUtils {
  /**
   *
   * @param {Dispatcher} dispatcher
   * @param {HotBalloonApplication} application
   * @param {AppStylesConfig} appStylesConfig
   * @param {Element} parentElement
   */
  constructor(dispatcher, application, appStylesConfig,parentElement) {
    assertType(TypeCheck.isDispatcher(dispatcher),
      'ActionInitializeUtils:constructor: `dispatcher` should be a Dispatcher'
    )
    assertType(TypeCheck.isHotballoonApplication(application),
      'ActionInitializeUtils:constructor: `application` should be a HotBalloonApplication'
    )
    assertType(isNode(parentElement),
      'ActionInitializeUtils:constructor: `parentElement` should be an Element'
    )
    this.__dispatcher = dispatcher
    this.__action = null
    this.__appStylesConfig = appStylesConfig
    this.__application = application
    this.__parentElement = parentElement
  }

  init() {
    this.__action = ActionDispatcherBuilder.build(
      new ActionDispatcherConfig(
        new ActionTypeConfig(
          globalFlexioImport.io.flexio.component_bootstrap.actions.ActionInitialize,
          /**
           *
           * @param {ActionInitialize} data
           * @return {ActionInitialize}
           */
          (data) => {
            if (isNull(data.message())) {
              return data.withMessage('Default message')
            }
            return data
          },
          /**
           *
           * @param {ActionInitialize} payload
           * @return {boolean}
           */
          (payload) => {
            return !isNull(payload.message())
          }
        ),
        this.__dispatcher
      )
    )
    console.log(this.__action)
    return this
  }

  listen() {
    assertType(!isNull(this.__action),
      'ActionInitializeUtils:listen: action should be initialize before using it'
    )
    this.__action.listenWithCallback(
      /**
       *
       * @param {ActionInitialize} payload
       */
      (payload) => {
        ComponentCounterBuilder
          .buildSimpleWithMessage(
            payload.message(),
            this.__application,
            this.__appStylesConfig,
            this.__parentElement)
          .mountView()
      }
    )
    return this
  }

  action() {
    return this.__action
  }
}
