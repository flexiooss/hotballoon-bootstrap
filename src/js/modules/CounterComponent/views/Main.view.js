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
   * @param {CounterContainerStores} counterContainerStores
   */
  constructor(viewParameters, counterContainerStores) {
    super(viewParameters)
    this.counterStore = counterContainerStores.counterStore
    this.subscribeToStore(this.counterStore)
  }

  /**
   *
   * @return {Node}
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
    const data = this.counterStore.data()
    console.log(this)
    console.log(data)

    if (data.count) {
      return data.count
    } else {
      return 'counter not found'
    }
  }
}
