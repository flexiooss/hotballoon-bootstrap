export class StoreCounterHandler {
  /**
   *
   * @param {StoreInterface<StoreCounter>} store
   */
  constructor(store) {
    /**
     *
     * @type {StoreInterface<StoreCounter>}
     * @private
     */
    this.__store = store
  }

  increment() {
    this.__store.set(
      this.__store.state().data()
        .withCount(this.__store.state().data().count() + 1))
  }
}
