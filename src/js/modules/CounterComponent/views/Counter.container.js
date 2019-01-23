'use strict'
import {ViewStoresParameters, ViewContainer, ViewParameters, ViewEventListenerFactory, ActionPayload} from 'hotballoon'
import { CounterIncrementAction } from '../actions/CounterIncrementAction'
import { default as Main, MainStores, INCREMENT_EVENT } from './Main.view'

import '../assets/css/style.css'

const COUNT_STORE = 'COUNT_STORE'
export const COUNTER_VIEWCONTAINER = 'COUNTER_VIEWCONTAINER'

const MAIN_VIEW = Symbol('MAIN_VIEW')

export class CounterContainer extends ViewContainer {
  /**
   * @override
   */
  registerViews() {
    // this.dispatchAction(
    //   CounterIncrementAction.withPayload(
    //     new ActionPayload()
    //   )
    // )

    this.addView(
      Main.create(
        new ViewParameters(MAIN_VIEW, this),
        new MainStores(
          this.Store(COUNT_STORE)
        )
      )
    )

    this._handleEvents()
  }

  _handleEvents() {
    this.View(MAIN_VIEW).on(
      ViewEventListenerFactory
        .listen(INCREMENT_EVENT)
        .callback((payload) => {
          this.dispatchAction(
            CounterIncrementAction.withPayload(
              new ActionPayload()
            )
          )
        }).build(this)
    )
  }
}

/**
 * @extends ViewStoresParameters
 */
export class CounterContainerStores extends ViewStoresParameters {
  /**
   *
   * @param {CounterStore} counterStore
   */
  constructor(counterStore) {
    super()
    this.setStore(COUNT_STORE, counterStore)
  }
}
