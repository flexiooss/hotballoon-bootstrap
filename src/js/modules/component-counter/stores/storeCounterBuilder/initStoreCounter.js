import {StoreBuilder, InMemoryStoreParams} from 'hotballoon'
import '../../generated/io/package'
import {FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'

/**
 *
 * @type {StoreCounter}
 */
const StoreCounter = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_counter.StoreCounter
/**
 *
 * @param {ComponentCounter} component
 * @return {Store<StoreCounter>}
 */
export const initStoreCounter = (component) => {
  return component.__componentContext.addStore(StoreBuilder.InMemory(
    new InMemoryStoreParams(
      StoreCounter,
      (data) => {
        return data instanceof StoreCounter
      },
      new StoreCounter(0))
  ))
}
