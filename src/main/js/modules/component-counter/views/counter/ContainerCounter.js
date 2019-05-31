'use strict'
import {ViewContainer, ViewParameters, ViewEventListenerBuilder} from 'hotballoon'
import {ViewCounter} from './views/ViewCounter'

import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {ContainerStoreCounter} from '../ContainerStoreCounter'

export class ContainerCounter extends ViewContainer {
  /**
   *
   * @param {ViewContainerParameters} viewContainerParameters
   * @param {ContainerStoreCounter} counterContainerStores
   * @param {ContainerActionCounter} counterContainerActions
   */
  constructor(viewContainerParameters, counterContainerStores, counterContainerActions) {
    super(viewContainerParameters)
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
