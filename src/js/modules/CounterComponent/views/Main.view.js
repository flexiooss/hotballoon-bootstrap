import {
  View,
  HtmlParams,
  NodeEventListenerFactory, ViewParameters
} from 'hotballoon'
import {default as Counter} from './Counter.view'
import {RECONCILIATION_RULES} from 'flexio-nodes-reconciliation'

export const INCREMENT_EVENT = 'INCREMENT_EVENT'
const COUNTER = 'COUNTER'
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
    this.addView(
      new Counter(
        new ViewParameters(COUNTER, this),
        this.__stores)
    )
  }

  /**
   *
   * @return {Element}
   */
  template() {
    return this.html(
      'main#main.toto', HtmlParams.withChildNodes(
        [
          this.html(
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
          ),
          this.html('section#test',
            HtmlParams.withViews([this.view(COUNTER)])
              // .addReconciliationRules([RECONCILIATION_RULES.BYPATH_CHILDREN])
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
