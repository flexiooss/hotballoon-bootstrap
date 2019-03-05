'use strict'
import {ViewContainer, ViewEventListenerFactory, ViewParameters} from 'hotballoon'
import {CounterIncrementAction} from '../actions/CounterIncrementAction'
import {default as Main, INCREMENT_EVENT} from './Main.view'

import '../assets/css/style.css'
import {CounterContainerStoresParams} from './CounterContainerStoresParams'

const MAIN_VIEW = Symbol('MAIN_VIEW')

export class CounterContainer extends ViewContainer {
  /**
   *
   * @param {ViewContainerParameters} viewContainerParameters
   * @param {CounterContainerStoresParams} counterContainerStores
   * @param {CounterContainerActionsParams} counterContainerActions
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
        new CounterContainerStoresParams(
          this.__stores.counterStore
        )
      )
    )

    this.__handleEvents()
  }

  __handleEvents() {
    this.view(MAIN_VIEW)
      .on(
        ViewEventListenerFactory
          .listen(INCREMENT_EVENT)
          .callback((payload) => {
            this.__actions
              .counterIncrementAction
              .dispatch(new CounterIncrementAction())
          }).build()
      )
  }
}
