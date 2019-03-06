import {CounterStore} from '../stores/CounterStore'
import {StoreBuilder, InMemoryStoreParams} from 'hotballoon'

/**
 *
 * @param {ComponentContext} componentContext
 * @return {CounterStore}
 */
export const initStores = (componentContext) => {
  /**
   *
   * @type {Store<CounterStore>}
   */
  const counterStore = StoreBuilder.InMemory(
    new InMemoryStoreParams(
      CounterStore,
      (data) => {
        return data instanceof CounterStore
      },
      new CounterStore(10))
  )

  componentContext.addStore(counterStore)
  return counterStore
}
