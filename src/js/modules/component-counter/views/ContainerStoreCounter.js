import {TypeCheck} from 'hotballoon'
import {assertType, FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'
import '../generated/io/package'

const StoreCounter = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_counter.stores.StoreCounter

/**
 */
export class ContainerStoreCounter {
  /**
   *
   * @param {PublicStoreHandler<StoreCounter>} storeCounter
   */
  constructor(storeCounter) {
    assertType(
      storeCounter.isTypeOf(StoreCounter),
      'ContainerStoreCounter:constructor: `counterStore` should be a Store of CounterStore, %s given',
      typeof storeCounter
    )

    this.__counterStore = TypeCheck.assertStoreBase(storeCounter)
  }

  /**
   *
   * @return {PublicStoreHandler<StoreCounter>}
   */
  get counterStore() {
    return this.__counterStore
  }
}
