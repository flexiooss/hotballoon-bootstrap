import {
  Component
} from 'hotballoon'
import {
  AppActions
} from '../actions/AppActions'
import {
  DemoActions
} from '../actions/DemoActions'
import {
  DemoStore
} from '../stores/DemoStore'

import {
  DEMO_STORE,
  TOKEN_APP_INITIALISED,
  TOKEN_INCREMENT,
  ACTION_APP,
  ACTION_DEMO
} from './_KEYS'

export class DemoComponent extends Component {
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
    const myTokenAppInitialised = this.Dispatcher()
      .addEventListener(
        this.Action(ACTION_APP)
          .type('APP_INITIALIZED'),
        (payload) => {
          this._appInitialized(payload)
        })
    /**
     * Keep the token for remove the listener later, if needed
     */
    this.dispatcherListenerTokens.set(TOKEN_APP_INITIALISED, myTokenAppInitialised)

    /**
     *  register action ACTION_DEMO
     */
    const myTokenDemoIncrement = this.Dispatcher()
      .addEventListener(this.Action(ACTION_DEMO)
        .type('INCREMENT'), (payload) => {
        this._increment(payload)
      })

    /**
     * Keep the token for remove the listener later, if needed
     */
    this.dispatcherListenerTokens.set(TOKEN_INCREMENT, myTokenDemoIncrement)
  }

  /**
   *
   * --------------------------------------------------------------
   * Listeners
   * --------------------------------------------------------------
   */
  _appInitialized(payload) {
    console.log(payload.message)
  }
  _increment(payload) {
    console.log(payload)
  }
}
