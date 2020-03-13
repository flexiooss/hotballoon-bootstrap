import {
  View,
  e,
  ElementEventListenerConfigBuilder,
  ViewPublicEventHandler,
  OrderedEventListenerConfigBuilder,
  RECONCILIATION_RULES
} from '@flexio-oss/hotballoon'
import {assertType, isFunction} from '@flexio-oss/assert'
import {FlexioIconsTheme} from '../../../../../../../../../../../__iconist/flexio-icons-theme'


const INCREMENT_EVENT = 'INCREMENT_EVENT'


export class ViewCounter extends View {
  /**
   *
   * @param {ViewContainerBase} container
   * @param {ThemeStyle} themeStyle
   * @param {ContainerStoreCounter} counterContainerStores
   */
  constructor(container, themeStyle, counterContainerStores) {
    super(container)
    this.__themeStyle = themeStyle
    /**
     *
     * @params {ContainerStoreCounter}
     * @private
     */
    this.__stores = counterContainerStores
    this.subscribeToStore(this.__stores.counterStore)

    this.__icons = new FlexioIconsTheme(this.__themeStyle.color())
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

    const iconContainer = this.html(e('span#myCross')
      .reconciliationRules(RECONCILIATION_RULES.BYPASS_CHILDREN))

    return this.html(
      e('main#main').childNodes(
        ((this.__stores.counterStore.data().count() % 2 === 0)
          ? this.__icons.applyTo(iconContainer, 'close').cross().big().dark()
          : this.__icons.applyTo(iconContainer, 'close').cross().small().danger()),
        this.html(
          e('div').childNodes(
            this.html(
              e('span#Counter.' + this.__themeStyle.color().focus()).text(this._addCounter())
            ),

            this.html(
              e('input#increment.' + this.__themeStyle.button().button())
                .attributes(
                  {value: 'Inc', type: 'button'}
                )
                .className(this.__themeStyle.button().white())
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
