'use strict'
import {ViewStoresParameters, ViewContainer, ViewParameters, ViewEventListenerFactory, ActionPayload} from 'hotballoon'
import {CounterIncrementAction} from '../actions/CounterIncrementAction'
import {default as Main, MainStores, INCREMENT_EVENT} from './Main.view'

import '../assets/css/style.css'

const COUNT_STORE = 'COUNT_STORE'
const MAIN_VIEW = Symbol('MAIN_VIEW')

export class CounterContainer extends ViewContainer {
  /**
   * @override
   */
  registerViews() {
    this.addView(
      Main.create(
        new ViewParameters(MAIN_VIEW, this),
        new MainStores(
          this.store(COUNT_STORE)
        )
      )
    )

    this._handleEvents()
  }

  _handleEvents() {
    this.view(MAIN_VIEW).on(
      ViewEventListenerFactory
        .listen(INCREMENT_EVENT)
        .callback((payload) => {
          this.dispatchAction(
            CounterIncrementAction.withPayload(
              new ActionPayload()
            )
          )
        }).build()
    )
  }
}

/**
 * @extends ViewStoresParameters
 */
export class CounterContainerStores extends ViewStoresParameters {
  /**
   *
   * @param {Store} counterStore
   */
  constructor(counterStore) {
    super()
    this.setStore(COUNT_STORE, counterStore)
  }
}
