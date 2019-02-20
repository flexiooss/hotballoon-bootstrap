import {PublicStoreHandler} from 'hotballoon'

/**
 * @implements {StoreInterface}
 */
export class CounterStorePublicHandler extends PublicStoreHandler {
  get count() {
    return this.data().count
  }
}
