import {
  View,
  e,
  ElementEventListenerConfigBuilder,
  ViewPublicEventHandler,
  OrderedEventListenerConfigBuilder,
  RECONCILIATION_RULES
} from '@flexio-oss/hotballoon'
import {assertType, isFunction} from '@flexio-oss/assert'

const INCREMENT_EVENT = 'INCREMENT_EVENT'

export class ViewCounter extends View {
  /**
   *
   * @param {ViewContainerBase} container
   * @param {AppStylesConfig} appStylesConfig
   * @param {ContainerStoreCounter} counterContainerStores
   */
  constructor(container, appStylesConfig, counterContainerStores) {
    super(container)
    this.__appStylesConfig = appStylesConfig
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
   * @return {ViewCounterEvent}
   */
  on() {
    return new ViewCounterEvent((a) => {
      return this._on(a)
    })
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
              e('span#Counter' + this.__appStylesConfig.color.colorInfo).text(this._addCounter())
            ),

            this.html(
              e('input#increment' + this.__appStylesConfig.border.borderLight)
                .attributes(
                  {value: 'Inc', type: 'button'}
                )
                .listenEvent(
                  ElementEventListenerConfigBuilder
                    .listen('click')
                    .callback((e) => {
                      this.dispatch(INCREMENT_EVENT, null)
                    })
                    .build()
                )
                .reconciliationRules(RECONCILIATION_RULES.BYPASS_LISTENERS)
            )
          )
        )
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

class ViewCounterEvent extends ViewPublicEventHandler {
  /**
   *
   * @param {ViewCounterEvent~incrementClb} clb
   * @return {String}
   */
  increment(clb) {
    return this._subscribeTo(INCREMENT_EVENT, clb)
  }

  /**
   * @callback ViewCounterEvent~incrementClb
   */
}
