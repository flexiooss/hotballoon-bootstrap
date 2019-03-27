'use strict'
import {ViewContainer, ViewParameters, ViewEventListenerBuilder} from 'hotballoon'
import {default as Main, INCREMENT_EVENT} from './views/ViewCounter'

import '../../generated/io/package'
import {FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'
import {ContainerStoreCounter} from '../ContainerStoreCounter'

const ActionIncrementCounterBuilder = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_counter.actions.ActionIncrementCounterBuilder

const MAIN_VIEW = Symbol('MAIN_VIEW')

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

    this.__registerViews()
  }

  __registerViews() {
    this.addView(
      new Main(
        new ViewParameters(MAIN_VIEW, this),
        new ContainerStoreCounter(
          this.__stores.counterStore
        )
      )
    )

    this.__handleEvents()
  }

  __handleEvents() {
    this.view(MAIN_VIEW)
      .on(
        ViewEventListenerBuilder
          .listen(INCREMENT_EVENT)
          .callback((payload) => {
            this.__actions
              .counterIncrementAction.dispatch(new ActionIncrementCounterBuilder().build())
          }).build()
      )
  }
}
