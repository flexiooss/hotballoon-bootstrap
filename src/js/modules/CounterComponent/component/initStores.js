import {StoreBuilder, InMemoryStoreParams} from 'hotballoon'
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
      CounterStore,
      (data) => {
        return data instanceof CounterStore
      },
      new CounterStore(10))
  ))
}
