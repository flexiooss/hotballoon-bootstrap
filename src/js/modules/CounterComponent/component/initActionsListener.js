import {DispatcherEventListenerFactory} from 'hotballoon'
import {CounterIncrementAction} from '../actions/CounterIncrementAction'
import {CounterState} from '../stores/CounterState'

/**
 *
 * @param {ComponentContext} componentContext
 * @param {Store} counterStore
 * @return {string}
 */
export const initActionsListener = (componentContext, counterStore) => {
  return componentContext.listenAction(
    DispatcherEventListenerFactory.listen(
      new CounterIncrementAction())
      .callback((payload) => {
        counterStore.set(new CounterState(counterStore.data().count + 1))
      })
      .build()
  )
}
