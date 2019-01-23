import {DispatcherEventListenerFactory} from 'hotballoon'
import {CounterIncrementAction} from '../actions/CounterIncrementAction'
import {COUNT_STORE, CounterStore} from '../stores/CounterStore'

export const initActionsListeners = (component) => {
  component.listenAction(
    DispatcherEventListenerFactory.listen(
      new CounterIncrementAction())
      .callback((payload) => {
        const store = component.StoreByRegister(COUNT_STORE)
        store.set(new CounterStore(store.data().count + 1))
      })
      .build()
  )
}
