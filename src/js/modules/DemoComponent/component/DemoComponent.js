'use strict'
import {
  isNode,
  assert
} from 'flexio-jshelpers'

import {
  Component
} from 'hotballoon'

import {
  DemoStore
} from '../stores/DemoStore'

import {
  AppActions,
  APP_INITIALIZED as ACTION_APP_APP_INITIALIZED
} from '../actions/AppActions'
import {
  DemoActions,
  INCREMENT as ACTION_DEMO_INCREMENT,
  DECREMENT as ACTION_DEMO_DECREMENT,
  CHANGE_STEP as ACTION_DEMO_CHANGE_STEP
} from '../actions/DemoActions'

import {
  DemoContainer
} from '../views/DemoContainer'

import {
  DEMO_STORE,
  TOKEN_APP_INITIALISED,
  TOKEN_INCREMENT,
  TOKEN_DECREMENT,
  TOKEN_CHANGE_STEP,
  ACTION_APP,
  ACTION_DEMO,
  DEMO_VIEWCONTAINER
} from './_KEYS'

export class DemoComponent extends Component {
  constructor(hotBallonApplication, id, parentNode) {
    super(hotBallonApplication, id)

    assert(!!isNode(parentNode),
      'DemoComponent:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    Object.defineProperty(this, '_parentNode', {
      enumerable: false,
      value: parentNode
    })
  }
  /**
   *
   * --------------------------------------------------------------
   * Init
   * --------------------------------------------------------------
   */
  _initActions() {
    this.addAction(ACTION_APP, new AppActions(this.Dispatcher(), this._ID))
    this.addAction(ACTION_DEMO, new DemoActions(this.Dispatcher(), this._ID))
  }

  _initStores() {
    const tokenMydemoStore = this.nextID()
    const myDemoStore = new DemoStore(tokenMydemoStore)
    this.addStore(tokenMydemoStore, myDemoStore)

    /**
     * Keep the token for select the store
     */
    this.storesKey.set(DEMO_STORE, tokenMydemoStore)
  }

  _initDispatcherListeners() {
    /**
     *  register action APP_INITIALIZED
     */
    const myTokenAppInitialised = this.Dispatcher().addEventListener(
      ACTION_APP_APP_INITIALIZED,
      (payload) => {
        this._appInitialized(payload)
      })
    /**
     * Keep the token for retrive later
     */
    this.dispatcherListenerTokens.set(TOKEN_APP_INITIALISED, myTokenAppInitialised)

    /**
     * register action ACTION_DEMO
     * Keep the token for retrive later
     */
    this.dispatcherListenerTokens.set(
      TOKEN_INCREMENT,
      this.Dispatcher().addEventListener(ACTION_DEMO_INCREMENT,
        (payload) => {
          this._increment(payload)
        }))

    this.dispatcherListenerTokens.set(
      TOKEN_DECREMENT,
      this.Dispatcher().addEventListener(ACTION_DEMO_DECREMENT,
        (payload) => {
          this._decrement(payload)
        }))

    this.dispatcherListenerTokens.set(
      TOKEN_CHANGE_STEP,
      this.Dispatcher().addEventListener(ACTION_DEMO_CHANGE_STEP,
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
  _appInitialized(payload) {
    console.log(payload.message)

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
