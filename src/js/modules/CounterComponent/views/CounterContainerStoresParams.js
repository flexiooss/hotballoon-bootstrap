import {TypeCheck} from 'hotballoon'
import {assert} from 'flexio-jshelpers'
import '../generated/io/package'
import {FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'

/**
 *
 * @type {CounterStore}
 */
const CounterStore = window[FLEXIO_IMPORT_OBJECT].io.flexio.CounterComponent.CounterStore

/**
 */
export class CounterContainerStoresParams {
  /**
   *
   * @param {PublicStoreHandler<CounterStore>} counterStore
   */
  constructor(counterStore) {
    assert(
      counterStore.isTypeOf(CounterStore),
      'CounterContainerStoresParams: `counterStore ` should be a Store of CounterStore')

    this.__counterStore = TypeCheck.assertStoreBase(counterStore)
  }

  /**
   *
   * @return {PublicStoreHandler<CounterStore>}
   */
  get counterStore() {
    return this.__counterStore
  }
}
