import {StoreBuilder, InMemoryStoreParams,TypeParameter} from 'hotballoon'
import '../generated/io/package'
import {FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'

const CounterStore = window[FLEXIO_IMPORT_OBJECT].io.flexio.CounterComponent.CounterStore
/**
 *
 * @param {ComponentContext} componentContext
 * @return {Store<CounterStore>}
 */
export const initStores = (componentContext) => {
  return componentContext.addStore(StoreBuilder.InMemory(

    new InMemoryStoreParams(
      new TypeParameter(
        CounterStore,
        (data) => {
          return data
        },
        (data) => {
          return true
        },
        (data) => {
          return data
        }
      ),
      new CounterStore(10))
  ))
}
