import {
  Store,
  storeBases
} from 'hotballoon'

export const DEMO_STORE = 'DEMO_STORE'

const STORE = storeBases.Storage.create({
  demoNumber: 0,
  step: 1
})

export class DemoStore extends Store {
  constructor(id) {
    super(id, STORE)
  }

  increment() {
    let state = this._get()
    state.demoNumber = state.demoNumber + state.step
    this.set(state)
  }

  decrement() {
    let state = this._get()
    state.demoNumber = state.demoNumber - state.step
    this.set(state)
  }

  changeStep(step) {
    let state = this._get()
    state.step = parseInt(step)
    this.set(state)
  }
}
