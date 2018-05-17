'use strict'
import {
  isNode,
  assert
} from 'flexio-jshelpers'

import {
  Component
} from 'hotballoon'

import {
  DemoStore,
  DEMO_STORE
} from '../stores/DemoStore'

import {
  DemoActions,
  DEMO_ACTIONS,
  DEMO_ACTIONS_INCREMENT,
  DEMO_ACTIONS_DECREMENT,
  DEMO_ACTIONS_CHANGE_STEP
} from '../actions/DemoActions'

import {
  DemoContainer,
  DEMO_VIEWCONTAINER
} from '../views/DemoContainer'

export class DemoComponent extends Component {
  constructor(hotBallonApplication, parentNode) {
    super(hotBallonApplication)

    assert(!!isNode(parentNode),
      'DemoComponent:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    Object.defineProperty(this, '_parentNode', {
      enumerable: false,
      value: parentNode
    })
  }

  _initActions() {
    this.addAction(
      DEMO_ACTIONS,
      new DemoActions(this.Dispatcher(), this._ID)
    )
  }

  _initStores() {
    const tokenMydemoStore = this.nextID()
    this.addStore(
      tokenMydemoStore,
      new DemoStore(tokenMydemoStore)
    )

    /**
     * Keep the token for select the store
     */
    this.storesKey.set(DEMO_STORE, tokenMydemoStore)
  }

  _initDispatcherListeners() {
    /**
     * register action ACTION_DEMO
     * Keep the token for retrive later
     */
    this.dispatcherListenerTokens.set(
      DEMO_ACTIONS_INCREMENT,
      this.addActionListener(DEMO_ACTIONS_INCREMENT,
        (payload) => {
          this._increment(payload)
        }))

    this.dispatcherListenerTokens.set(
      DEMO_ACTIONS_DECREMENT,
      this.addActionListener(DEMO_ACTIONS_DECREMENT,
        (payload) => {
          this._decrement(payload)
        }))

    this.dispatcherListenerTokens.set(
      DEMO_ACTIONS_CHANGE_STEP,
      this.addActionListener(DEMO_ACTIONS_CHANGE_STEP,
        (payload) => {
          this._changeStep(payload)
        }))
  }

  /**
   *
   * --------------------------------------------------------------
   * Listeners
   * --------------------------------------------------------------
   */
  _createRenderMountView() {
    /**
     * Add ViewContainer:DemoContainer into the component
     */
    const tokenDemoContainer = this.nextID()
    const demoContainer = new DemoContainer(this, tokenDemoContainer, new Map([
      [DEMO_STORE, this.storesKey.get(DEMO_STORE)]
    ]))

    this.addViewContainer(tokenDemoContainer, demoContainer)

    /**
     * Keep the token for retrive later
     */
    this.viewContainersKey.set(DEMO_VIEWCONTAINER, tokenDemoContainer)
    /**
     * Mount DemoContainer into the parentNode
     */
    demoContainer.renderAndMount(this._parentNode)
  }

  _increment(payload) {
    this.Store(this.storesKey.get(DEMO_STORE)).increment()
  }

  _decrement(payload) {
    this.Store(this.storesKey.get(DEMO_STORE)).decrement()
  }

  _changeStep(payload) {
    this.Store(this.storesKey.get(DEMO_STORE)).changeStep(payload.step)
  }
}
