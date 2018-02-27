import {
  Store,
  storeBases
} from 'hotballoon'

const STORE = storeBases.Storage.create()

export class DemoStore extends Store {
  constructor(id) {
    super(id, STORE)
  }
}
