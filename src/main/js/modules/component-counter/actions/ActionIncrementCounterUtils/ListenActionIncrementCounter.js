import {assertType} from 'flexio-jshelpers'
import {TypeCheck} from 'hotballoon'
import {StoreCounterHandler} from '../../stores/storeCounterUtils/StoreCounterHandler'

export class ListenActionIncrementCounterParam {
  /**
   *
   * @param {Action<ActionInitialize>} action
   * @param {Store<StoreCounter>} store
   */
  constructor(action, store) {
    assertType(TypeCheck.isAction(action),
      'ComponentBootstrap:ListenActionInitializeParam: `action` argument should be an Action'
    )
    assertType(TypeCheck.isStoreBase(store),
      'ComponentBootstrap:ListenActionInitializeParam: `store` should be a StoreInterface'
    )

    this._action = action
    this._store = store
  }

  /**
   *
   * @return {Action<ActionInitialize>}
   */
  get action() {
    return this._action
  }

  /**
   *
   * @return {Store<StoreCounter>}
   */
  get store() {
    return this._store
  }
}

/**
 *
 * @param {ListenActionIncrementCounterParam} param
 */
export const listenActionIncrementCounter = (param) => {
  assertType(param instanceof ListenActionIncrementCounterParam,
    'ComponentCounter:listenActionIncrementCounter: `param` should be ListenActionIncrementCounterParam'
  )
  const store = new StoreCounterHandler(param.store)

  param.action
    .listenWithCallback(
      /**
       *
       * @param {ActionIncrementCounter} payload
       */
      (payload) => {
        store.increment()
      })
}
