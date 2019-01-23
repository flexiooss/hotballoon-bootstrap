'use strict'
import {ActionPayload, Component, ViewContainerParameters} from 'hotballoon'
import {COUNT_STORE} from '../stores/CounterStore'
import {initStores} from './initStores'
import {initActionsListeners} from './initActionsListeners'
import {isNode, assert} from 'flexio-jshelpers'

import {CounterIncrementAction} from '../actions/CounterIncrementAction'
import {CounterContainerStores, COUNTER_VIEWCONTAINER, CounterContainer} from '../views/Counter.container'

export class CounterComponent extends Component {
  constructor(hotBalloonApplication, parentNode) {
    super(hotBalloonApplication)

    initStores(this)
    initActionsListeners(this)

    this._setParentNode(parentNode)

    // this.dispatchAction(
    //   CounterIncrementAction.withPayload(new ActionPayload())
    // )
  }

  _setParentNode(parentNode) {
    assert(!!isNode(parentNode),
      'MainComponent:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    Object.defineProperties(this, {
      _parentNode: {
        enumerable: false,
        /**
         * @property {Node} _parentNode
         * @name CounterComponent#_parentNode
         */
        value: parentNode
      }
    })
  }

  /**
   *
   * @param {HotballoonApplication} hotballoonApplication
   * @param {Node} parentNode
   * @return {CounterComponent}
   * @constructor
   * @static
   */
  static create(hotballoonApplication, parentNode) {
    return new this(hotballoonApplication, parentNode)
  }

  createRenderMountView() {
    this._addCounterViewContainer().renderAndMount(this._parentNode)
  }

  _addCounterViewContainer() {
    const COUNTER_VIEWCONTAINER_ID = this.nextID()

    const COUNTER_VIEWCONTAINER_INST = this.addViewContainer(
      new CounterContainer(
        new ViewContainerParameters(
          this,
          COUNTER_VIEWCONTAINER_ID,
          this._parentNode
        ),
        new CounterContainerStores(
          this.StoreByRegister(COUNT_STORE)
        )
      )
    )

    this.debug.log('COUNTER_VIEWCONTAINER_INST')
    this.debug.object(COUNTER_VIEWCONTAINER_INST)
    this.debug.print()

    this.viewContainersKey.set(COUNTER_VIEWCONTAINER, COUNTER_VIEWCONTAINER_ID)
    return COUNTER_VIEWCONTAINER_INST
  }
}
