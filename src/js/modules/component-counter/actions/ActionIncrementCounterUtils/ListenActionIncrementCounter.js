import {assert, assertType, isNode} from 'flexio-jshelpers'
import {TypeCheck} from 'hotballoon'

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
  assert(TypeCheck.isAction(param.action),
    'ComponentCounter:listenActionIncrementCounter: ActionIncrementCounter should be initialized before using it'
  )

  assert(TypeCheck.isStore(param.store),
    'ComponentCounter:listenActionIncrementCounter: StoreCounter should be initialized before using it'
  )

  param.action
    .listenWithCallback((payload) => {
      param.store.set(
        param.store.state().data.withCount(param.store.state().data.count() + 1)
      )
    })
}
