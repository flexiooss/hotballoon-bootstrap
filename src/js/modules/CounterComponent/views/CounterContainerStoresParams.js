import {ViewStoresParameters} from 'hotballoon'

/**
 * @extends ViewStoresParameters
 */
export class CounterContainerStoresParams extends ViewStoresParameters {
  /**
   *
   * @param {CounterStorePublicHandler} counterStore
   */
  constructor(counterStore) {
    super()
    this.__counterStore = this.validate(counterStore)
  }

  /**
   *
   * @return {CounterStorePublicHandler}
   */
  get counterStore() {
    return this.__counterStore
  }
}
