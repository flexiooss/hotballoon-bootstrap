import { TypeCheck } from '@flexio-oss/hotballoon'
import { assertType } from '@flexio-oss/assert'
import { globalFlexioImport } from '@flexio-oss/global-import-registry'

/**
 */
export class ContainerStoreCounter {
  /**
   *
   * @param {PublicStoreHandler<StoreCounter>} storeCounter
   */
  constructor(storeCounter) {
    assertType(
      storeCounter.isTypeOf(globalFlexioImport.io.flexio.component_counter.stores.StoreCounter),
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
