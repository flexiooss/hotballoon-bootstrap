'use strict'
import {ActionPayload, ViewContainer, ViewEventListenerFactory, ViewParameters} from 'hotballoon'
import {CounterIncrementAction} from '../actions/CounterIncrementAction'
import {default as Main, INCREMENT_EVENT} from './Main.view'

import '../assets/css/style.css'
import {CounterContainerStores} from './CounterContainerStores'

const MAIN_VIEW = Symbol('MAIN_VIEW')

export class CounterContainer extends ViewContainer {
  /**
   *
   * @param {ViewContainerParameters} viewContainerParameters
   * @param {CounterContainerStores} counterContainerStores
   */
  constructor(viewContainerParameters, counterContainerStores) {
    super(viewContainerParameters)
    this.counterStore = counterContainerStores.counterStore

    this.__registerViews()
  }

  __registerViews() {
    this.addView(
      Main.create(
        new ViewParameters(MAIN_VIEW, this),
        new CounterContainerStores(
          this.counterStore
        )
      )
    )

    this.__handleEvents()
  }

  __handleEvents() {
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
