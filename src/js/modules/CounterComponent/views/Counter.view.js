import {
  View,
  HtmlParams,
  NodeEventListenerFactory
} from 'hotballoon'

export const INCREMENT_EVENT = 'INCREMENT_EVENT'

export default class Counter extends View {
  /**
   *
   * @param {ViewParameters} viewParameters
   * @param {CounterContainerStoresParams} counterContainerStores
   */
  constructor(viewParameters, counterContainerStores) {
    super(viewParameters)
    this.__stores = counterContainerStores
    this.subscribeToStore(this.__stores.counterStore)
  }

  /**
   *
   * @return {Element}
   */
  template() {
    return this.html(
      'div#count2.toto', HtmlParams.withChildNodes(
        [
          this.html(
            'div',
            HtmlParams.withChildNodes([
              this.html('span#Counter2.counter',
                HtmlParams.withText(this._addCounter())
              )

            ])
          )
        ]
      )
    )
  }

  /**
   *
   * @private
   */
  _addCounter() {
    console.log(this.__stores.counterStore)

    if (this.__stores.counterStore.count) {
      return this.__stores.counterStore.count
    } else {
      return 'counter not found'
    }
  }
}
