import {View, e, ElementEventListenerBuilder} from 'hotballoon'
import {RECONCILIATION_RULES} from 'flexio-nodes-reconciliation'
import style from '../../../assets/css/style.css'

export const INCREMENT_EVENT = 'INCREMENT_EVENT'
export default class Main extends View {
  /**
   *
   * @param {ViewParameters} viewParameters
   * @param {ContainerStoreCounter} counterContainerStores
   */
  constructor(viewParameters, counterContainerStores) {
    super(viewParameters)
    /**
     *
     * @params {ContainerStoreCounter}
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
      e('main#main').childNodes(
        this.html(
          e('div').childNodes(
            this.html(
              e('span#Counter.' + style.counter).text(this._addCounter())
            ),

            this.html(
              e('input#increment.' + style.increment)
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
          ))
      )
    )
  }

  /**
   *
   * @return {(number|string)}
   * @private
   */
  _addCounter() {
    if (this.__stores.counterStore.data().count() !== undefined) {
      return this.__stores.counterStore.data().count()
    } else {
      return 'counter not found'
    }
  }
}
