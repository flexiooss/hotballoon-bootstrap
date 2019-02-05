import {COUNT_STORE, CounterState} from '../stores/CounterState'
import {Store, State, InMemoryStorage} from 'hotballoon'

/**
 *
 * @param componentContext
 * @return {Store}
 */
export const initStores = (componentContext) => {
  return componentContext.addStore(
    new Store(COUNT_STORE, new InMemoryStorage(
      new State(COUNT_STORE, new CounterState(10)),
      new CounterState())
    )
  )
}
