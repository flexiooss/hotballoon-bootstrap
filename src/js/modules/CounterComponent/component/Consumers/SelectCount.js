import {CounterIncrementAction} from '../../actions/CounterIncrementAction'
import {CounterStore} from '../../stores/CounterStore'

export class SelectCount {
  constructor(payload, store, dispatcher) {
    store.set(new CounterStore(payload.counter))
    new CounterIncrementAction()
      .dispatchWith(dispatcher)
  }
}
