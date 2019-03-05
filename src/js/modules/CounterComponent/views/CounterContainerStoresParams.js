import {TypeCheck} from 'hotballoon'

/**
 */
export class CounterContainerStoresParams {
  /**
   *
   * @param {CounterStorePublicHandler} counterStore
   */
  constructor(counterStore) {
    this.__counterStore = TypeCheck.assertStoreBase(counterStore)
  }

  /**
   *
   * @return {CounterStorePublicHandler}
   */
  get counterStore() {
    return this.__counterStore
  }
}
