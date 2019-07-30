import {
  View,
  e,
  ElementEventListenerBuilder,
  ViewPublicEventHandler,
  EventListenerOrderedBuilder,
  RECONCILIATION_RULES
} from '@flexio-oss/hotballoon'
import style from '../../../assets/css/style.css'
import { assertType, isFunction } from '@flexio-oss/assert'

const INCREMENT_EVENT = 'INCREMENT_EVENT'

export class ViewCounter extends View {
  /**
   *
   * @param {ViewContainerBase} container
   * @param {ContainerStoreCounter} counterContainerStores
   */
  constructor(container, counterContainerStores) {
    super(container)
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
              e('span#Counter.' + style.counter).text(this._addCounter())
            ),

            this.html(
              e('input#increment.' + style.increment)
                .attributes(
                  { value: 'Inc', type: 'button' }
                )
                .listenEvent(
                  ElementEventListenerBuilder
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
    assertType(
      isFunction(clb),
      'ViewContainerPublicEventHandler:beforeRemove: `clb` should be a function'
    )
    return this._subscriber(
      EventListenerOrderedBuilder
        .listen(INCREMENT_EVENT)
        .callback(() => {
          clb()
        })
        .build()
    )
  }

  /**
   * @callback ViewCounterEvent~incrementClb
   */
}
