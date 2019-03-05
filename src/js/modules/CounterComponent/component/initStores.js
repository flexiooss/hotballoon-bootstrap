import {CounterStore} from '../stores/CounterStore'
import {State, Store, InMemoryStorage, StoreParams} from 'hotballoon'

/**
 *
 * @param {ComponentContext} componentContext
 * @return {CounterStore}
 */
export const initStores = (componentContext) => {
  const ID = componentContext.nextID()
  /**
   *
   * @type {Store<CounterStore>}
   */
  const counterStore = new Store(
    new StoreParams(
      ID,
      CounterStore,
      (data) => {
        return data instanceof CounterStore
      },
      /**
       * @type {InMemoryStorage<CounterStore>}
       */
      new InMemoryStorage(
        CounterStore,
        /**
         * @type {State<CounterStore>}
         */
        new State(ID, CounterStore, new CounterStore(10))
      )
    )
  )

  componentContext.addStore(counterStore)
  return counterStore
}
