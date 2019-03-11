'use strict'
import {isNode, assert} from 'flexio-jshelpers'
import {ActionBuilder, ActionParams, TypeCheck} from 'hotballoon'
import {AppInitializedAction} from '../actions/AppInitializedAction'
import {InitCounterComponent} from './InitCounterComponent'

export class BootstrapComponent {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   */
  constructor(componentContext, parentNode) {
    assert(
      TypeCheck.isComponentContext(componentContext),
      'BootstrapComponent:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    /**
     * @name BootstrapComponent#_componentContext
     * @type {ComponentContext}
     */
    Object.defineProperty(this, '_componentContext', {
      value: componentContext,
      enumerable: false,
      configurable: false
    })

    this._setParentNode(parentNode)
  }

  /**
   *
   * @return {BootstrapComponent}
   */
  initAppInitializedAction() {
    /**
     *
     * @type {!Action<AppInitializedAction>}
     * @private
     */
    this._appInitializedAction = ActionBuilder.build(
      new ActionParams(
        AppInitializedAction,
        (payload) => {
          console.log(payload)
          assert(payload instanceof AppInitializedAction,
            'BootstrapComponent:AppInitializedAction:validate `payload` should be an instance of AppInitializedAction'
          )
          return true
        },
        this.componentContext.dispatcher()
      )
    )
    return this
  }

  /**
   *
   * @return {!Action<AppInitializedAction>}
   */
  get appInitializedAction() {
    return this._appInitializedAction
  }

  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   * @return {BootstrapComponent}
   * @static
   */
  static create(componentContext, parentNode) {
    return new this(componentContext, parentNode)
  }

  /**
   *
   * @return {ComponentContext}
   */
  get componentContext() {
    return this._componentContext
  }

  /**
   *
   * @param {Node} parentNode
   * @private
   */
  _setParentNode(parentNode) {
    assert(!!isNode(parentNode),
      'BootstrapComponent:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    Object.defineProperty(this, '_parentNode', {
      enumerable: false,
      value: parentNode
    })
  }

  /**
   *
   * @return {Action.<AppInitializedAction>}
   */
  initActionListener() {
    this._appInitializedAction = ActionBuilder.build(
      new ActionParams(
        AppInitializedAction,
        (payload) => {
          assert(payload instanceof AppInitializedAction,
            'BootstrapComponent:AppInitializedAction:validate `payload` should be an instance of AppInitializedAction'
          )
          return true
        },
        this.componentContext.dispatcher()
      )
    )

    this
      .appInitializedAction
      .listenWithCallback(
        /**
         * @param {AppInitializedAction} payload
         */
        (payload) => {
          InitCounterComponent.create(payload, this.componentContext.APP(), this._parentNode)
        })

    return this._appInitializedAction
  }
}