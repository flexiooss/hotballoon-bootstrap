'use strict'
import {
  isNode,
  assert
} from 'flexio-jshelpers'

import {
  Component
} from 'hotballoon'

import {
  AppActions,
  APP_ACTIONS,
  APP_ACTIONS_APP_INITIALIZED
} from '../actions/AppActions'

import {
  DemoComponent
} from '../../DemoComponent'

export class MainComponent extends Component {
  constructor(hotBallonApplication, parentNode) {
    super(hotBallonApplication)

    assert(!!isNode(parentNode),
      'MainComponent:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    Object.defineProperty(this, '_parentNode', {
      enumerable: false,
      value: parentNode
    })
  }

  _initActions() {
    this.addAction(
      APP_ACTIONS,
      new AppActions(this.Dispatcher(), this._ID)
    )
  }

  _initDispatcherListeners() {
    const myTokenAppInitialised = this.addActionListener(
      APP_ACTIONS_APP_INITIALIZED,
      (payload) => {
        this._appInitialized(payload)
      })

    this.dispatcherListenerTokens.set(APP_ACTIONS_APP_INITIALIZED, myTokenAppInitialised)
  }

  _appInitialized(payload) {
    console.log(payload.message)
    const _demoComponentID = this.APP().addComponent(new DemoComponent(this.APP(), this._parentNode))

    this.APP().Component(_demoComponentID)._createRenderMountView()
  }
}
