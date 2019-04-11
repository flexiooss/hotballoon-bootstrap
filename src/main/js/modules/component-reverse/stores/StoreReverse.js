import { assertType, FLEXIO_IMPORT_OBJECT, isNull } from 'flexio-jshelpers'
import { InMemoryStoreParams, PublicStoreHandler, StoreBuilder, StoreTypeParam, TypeCheck } from 'hotballoon'
import '../generated/io/package'

const StoreReverseItem = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_reverse.stores.StoreReverseItem
const StoreReverseItemBuilder = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_reverse.stores.StoreReverseItemBuilder

export class StoreReverse {
  constructor(componentContext) {
    assertType(TypeCheck.isComponentContext(componentContext),
      'StoreReverse:constructor: `componentContext` should be a ComponentContext'
    )
    this.__componentContext = componentContext

    this.__store = this.__componentContext.addStore(StoreBuilder.InMemory(
      new InMemoryStoreParams(
        new StoreTypeParam(
          StoreReverseItem,
          /**
           *
           * @param {StoreReverseItem} data
           * @return {StoreReverseItem}
           */
          (data) => {
            return data
          },
          /**
           *
           * @param {StoreReverseItem} data
           * @return {boolean}
           */
          (data) => {
            return !isNull(data.label())
          },
          /**
           *
           * @param {Object} obj
           * @return {StoreReverseItem}
           */
          (obj) => StoreReverseItemBuilder.fromObject(obj).build()
        ),
        new StoreReverseItemBuilder().label('').build()
      ))
    )

    this.__storePublic = new PublicStoreHandler(this.__store)
  }

  getStorePublic() {
    return this.__storePublic
  }

  getStore() {
    return this.__store
  }
}
