import {TypeCheck} from 'hotballoon'
import {assert} from 'flexio-jshelpers'
import {CounterStore} from '../stores/CounterStore'

/**
 */
export class CounterContainerStoresParams {
  /**
   *
   * @param {CounterStorePublicHandler} counterStore
   */
  constructor(counterStore) {
    assert(
      counterStore.isTypeOf(CounterStore),
      'CounterContainerStoresParams: `counterStore ` should be a Store of CounterStore')

    this.__counterStore = TypeCheck.assertStoreBase(counterStore)
  }

  /**
   *
   * @return {CounterStorePublicHandler}
   */
  get counterStore() {
    return this.__counterStore
  }
}
