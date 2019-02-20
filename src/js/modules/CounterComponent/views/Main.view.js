import {
  View,
  HtmlParams,
  NodeEventListenerFactory
} from 'hotballoon'

export const INCREMENT_EVENT = 'INCREMENT_EVENT'

export default class Main extends View {
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
      'main#main.toto', HtmlParams.withChildNodes(
        [this.html(
          'div', HtmlParams.withChildNodes([
            this.html('span#Counter.counter', HtmlParams.withText(this._addCounter())),
            this.html(
              'input#increment.increment',
              HtmlParams
                .withAttributes(
                  {value: 'Inc', type: 'button'}
                )
                .addEventListener(
                  NodeEventListenerFactory.listen('click')
                    .callback((e) => {
                      this.dispatch(INCREMENT_EVENT, null)
                    })
                    .build()
                )
            )
          ])
        )]
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
