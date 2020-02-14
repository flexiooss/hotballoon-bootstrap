import {ViewContainer} from '@flexio-oss/hotballoon'
import {ViewCounter} from './views/ViewCounter'

import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {ContainerStoreCounter} from '../ContainerStoreCounter'

export class ContainerCounter extends ViewContainer {
  /**
   *
   * @param {ViewContainerParameters} viewContainerParameters
   * @param {ThemeStyle} themeStyle
   * @param {ContainerStoreCounter} counterContainerStores
   * @param {ContainerActionCounter} counterContainerActions
   */
  constructor(viewContainerParameters, themeStyle, counterContainerStores, counterContainerActions) {
    super(viewContainerParameters)
    this.__themeStyle = themeStyle
    this.__stores = counterContainerStores
    this.__actions = counterContainerActions
    /**
     *
     * @type {?ViewCounter}
     * @private
     */
    this.__viewCounter = null

    this.__registerViews()
  }

  __registerViews() {
    this.__viewCounter = this.addView(
      new ViewCounter(
        this,
        this.__themeStyle,
        new ContainerStoreCounter(
          this.__stores.counterStore
        )
      )
    )

    this.__handleEvents()
  }

  __handleEvents() {
    this.__viewCounter
      .on()
      .increment((payload) => {
        this.__actions
          .counterIncrementAction.dispatch(new globalFlexioImport.io.flexio.component_counter.actions.ActionIncrementCounterBuilder().build())
      })
  }
}
