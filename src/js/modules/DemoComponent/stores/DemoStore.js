import {
  Store,
  storeBases
} from 'hotballoon'

const STORE = storeBases.Storage.create({
  demoNumber: 0
})

export class DemoStore extends Store {
  constructor(id) {
    super(id, STORE)
  }

  increment() {
    let number = this._get()
    number.demoNumber++
    this.set(number)
  }

  decrement() {
    let number = this._get()
    number.demoNumber--
    this.set(number)
  }
}
