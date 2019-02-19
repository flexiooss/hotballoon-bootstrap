import {ViewStoresParameters} from 'hotballoon'

/**
 * @extends ViewStoresParameters
 */
export class CounterContainerStores extends ViewStoresParameters {
  /**
   *
   * @param {CounterStore} counterStore
   */
  constructor(counterStore) {
    super()
    this.__counterStore = this.validate(counterStore)
  }

  /**
   *
   * @return {CounterStore}
   */
  get counterStore() {
    return this.__counterStore
  }
}
