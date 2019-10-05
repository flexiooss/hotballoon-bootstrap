import {InMemoryStoreBuilder, TypeCheck, PublicStoreHandler} from '@flexio-oss/hotballoon'
import {assertType, isNull} from '@flexio-oss/assert'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

export class StoreCounterUtils {
  constructor(componentContext) {
    assertType(TypeCheck.isComponentContext(componentContext),
      'StoreCounterUtils:constructor: `componentContext` should be a ComponentContext'
    )
    this.__componentContext = componentContext
    this.__store = null
    this.__storePublic = null
  }

  build() {
    this.__store = this.__componentContext.addStore(
      new InMemoryStoreBuilder()
        .type(globalFlexioImport.io.flexio.component_counter.stores.StoreCounter)
        .initialData(
          new globalFlexioImport.io.flexio.component_counter.stores
            .StoreCounterBuilder()
            .count(0)
            .build()
        )
        .build()
    )

    this.__storePublic = new PublicStoreHandler(this.__store)
    return this
  }

  store() {
    return this.__store
  }

  storePublic() {
    return this.__storePublic
  }
}
