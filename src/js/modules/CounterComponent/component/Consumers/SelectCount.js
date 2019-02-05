import {CounterIncrementAction} from '../../actions/CounterIncrementAction'
import {CounterState} from '../../stores/CounterState'

export class SelectCount {
  constructor(payload, store, dispatcher) {
    store.set(new CounterState(payload.counter))
    new CounterIncrementAction()
      .dispatchWith(dispatcher)
  }
}
