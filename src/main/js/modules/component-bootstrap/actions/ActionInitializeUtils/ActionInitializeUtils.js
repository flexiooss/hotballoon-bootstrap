import {isNode, assertType, isNull} from '@flexio-oss/assert'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {ComponentCounterBuilder} from '../../../component-counter'
import {ActionDispatcherBuilder, TypeCheck} from '@flexio-oss/hotballoon'

export class ActionInitializeUtils {
  /**
   *
   * @param {Dispatcher} dispatcher
   * @param {HotBalloonApplication} application
   * @param {AppStylesConfig} appStylesConfig
   * @param {Element} parentElement
   */
  constructor(dispatcher, application, appStylesConfig, parentElement) {
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
    this.__action = new ActionDispatcherBuilder()
      .type(globalFlexioImport.io.flexio.component_bootstrap.actions.ActionInitialize)
      .dispatcher(this.__dispatcher)
      .build()

    console.log(this.__action)
    return this
  }

  action() {
    return this.__action
  }

  /**
   *
   * @param {ComponentContext} componentContext
   * @return {ActionInitializeUtils}
   */
  listen(componentContext) {
    assertType(!isNull(this.__action),
      'ActionInitializeUtils:listen: action should be initialize before using it'
    )
    
    console.log(componentContext)
    
    
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
      },
      componentContext
    )
    return this
  }
}
