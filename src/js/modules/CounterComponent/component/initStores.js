import {CounterState} from '../stores/CounterState'
import {CounterStore} from '../stores/CounterStore'
import {State, InMemoryStorage} from 'hotballoon'

/**
 *
 * @param {ComponentContext} componentContext
 * @return {CounterStore}
 */
export const initStores = (componentContext) => {
  const ID = componentContext.nextID()

  const counterStore = new CounterStore(
    ID,
    new InMemoryStorage(
      new State(ID, new CounterState(10)),
      new CounterState())
  )

  componentContext.addStore(counterStore)
  return counterStore
}
