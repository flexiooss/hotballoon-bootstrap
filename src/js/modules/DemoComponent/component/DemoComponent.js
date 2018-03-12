import {
  Component
} from 'hotballoon'
import {
  isNode,
  assert
} from 'flexio-jshelpers'
import {
  DemoStore
} from '../stores/DemoStore'
import {
  AppActions
} from '../actions/AppActions'
import {
  DemoActions
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
    const myDemoStore = this.addStore(DemoStore)

    /**
     * Keep the token for select the store
     */
    this.storesKey.set(DEMO_STORE, myDemoStore._ID)
  }

  _initDispatcherListeners() {
    /**
     *  register action APP_INITIALIZED
     */
    const myTokenAppInitialised = this.Dispatcher().addEventListener(
      this.Action(ACTION_APP).type('APP_INITIALIZED'),
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
      this.Dispatcher().addEventListener(this.Action(ACTION_DEMO).type('INCREMENT'),
        (payload) => {
          this._increment(payload)
        }))

    this.dispatcherListenerTokens.set(
      TOKEN_DECREMENT,
      this.Dispatcher().addEventListener(this.Action(ACTION_DEMO).type('DECREMENT'),
        (payload) => {
          this._decrement(payload)
        }))

    this.dispatcherListenerTokens.set(
      TOKEN_CHANGE_STEP,
      this.Dispatcher().addEventListener(this.Action(ACTION_DEMO).type('CHANGE_STEP'),
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
    const demoContainer = this.addViewContainer(
      DemoContainer,
      new Map([
        [DEMO_STORE, this.storesKey.get(DEMO_STORE)]
      ]))

    /**
     * Keep the token for retrive later
     */
    this.viewContainersKey.set(DEMO_VIEWCONTAINER, demoContainer._ID)
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
