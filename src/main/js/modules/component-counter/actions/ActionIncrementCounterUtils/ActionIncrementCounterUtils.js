import { assertType, isNull } from '@flexio-oss/assert'
import { globalFlexioImport } from '@flexio-oss/global-import-registry'

import { ActionBuilder, ActionParams, ActionTypeParam, TypeCheck } from '@flexio-oss/hotballoon'
import { StoreCounterHandler } from '../../stores/storeCounterUtils/StoreCounterHandler'

export class ActionIncrementCounterUtils {
  /**
   *
   * @param {Dispatcher} dispatcher
   * @param {Store<StoreCounter>} store
   */
  constructor(dispatcher, store) {
    assertType(TypeCheck.isDispatcher(dispatcher),
      'ComponentCounter:constructor: `dispatcher` argument should be a Dispatcher'
    )
    assertType(TypeCheck.isStoreBase(store),
      'ComponentCounter:constructor: `store` should be a StoreInterface'
    )

    this.__dispatcher = dispatcher
    this.__store = store
    this.__action = null
  }

  init() {
    this.__action = ActionBuilder.build(
      new ActionParams(
        new ActionTypeParam(
          globalFlexioImport.io.flexio.component_counter.actions.ActionIncrementCounter
        ),
        this.__dispatcher
      )
    )
    return this
  }

  listen() {
    assertType(!isNull(this.__action),
      'ActionIncrementCounterUtils:listen: action should be initialize before using it'
    )
    const storeHandler = new StoreCounterHandler(this.__store)

    this.__action.listenWithCallback(
      /**
       *
       * @param {ActionIncrementCounter} payload
       */
      (payload) => {
        storeHandler.increment()
      }
    )
    return this
  }

  action() {
    return this.__action
  }
}
