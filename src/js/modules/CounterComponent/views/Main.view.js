import {
  View,
  ElementEventListenerBuilder,
  e,
  RECONCILIATION_RULES
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
    /**
     *
     * @type {CounterContainerStoresParams}
     * @private
     */
    this.__stores = counterContainerStores
    this.subscribeToStore(this.__stores.counterStore)
  }

  /**
   *
   * @return {Element}
   */
  template() {
    return this.html(
      e('main#main.toto').childNodes(
        this.html(
          e('div').childNodes(
            this.__e_CounterText(),
            this.__e_button()
          ))
      )
    )
  }

  /**
   *
   * @return {Element}
   */
  __e_CounterText() {
    return this.html(
      e('span#Counter.counter').text(this._addCounter())
    )
  }

  /**
   *
   * @return {(number|string)}
   * @private
   */
  _addCounter() {
    if (this.__stores.counterStore.data().count()) {
      return this.__stores.counterStore.data().count()
    } else {
      return 'counter not found'
    }
  }

  /**
   *
   * @return {Element}
   */
  __e_button() {
    return this.html(
      e('input#increment.increment')
        .attributes(
          {value: 'Inc', type: 'button'}
        )
        .listenEvent(
          ElementEventListenerBuilder.listen('mouseup')
            .callback((e) => {
              this.dispatch(INCREMENT_EVENT, null)
            })
            .build()
        ).reconciliationRules(RECONCILIATION_RULES.BYPATH)
    )
  }
}
