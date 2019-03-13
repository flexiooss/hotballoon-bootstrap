'use strict'
import {isNode, assert} from 'flexio-jshelpers'
import {ActionBuilder, ActionParams, TypeCheck} from 'hotballoon'
import {InitCounterComponent} from './InitCounterComponent'

import '../generated/io/package'
import {FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'

/**
 *
 * @type {AppInitializedAction}
 */
const AppInitializedAction = window[FLEXIO_IMPORT_OBJECT].io.flexio.BootstrapComponent.AppInitializedAction


export class BootstrapComponent {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Element} parentNode
   */
  constructor(componentContext, parentNode) {
    assert(
      TypeCheck.isComponentContext(componentContext),
      'BootstrapComponent:constructor: `componentContext` argument should be an instanceof ComponentContext, %s given',
      typeof componentContext)

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
     * @type {Action<AppInitializedAction>}
     * @private
     */
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
    return this
  }

  /**
   *
   * @return {Action<AppInitializedAction>}
   */
  get appInitializedAction() {
    return this._appInitializedAction
  }

  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Element} parentNode
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
   * @param {Element} parentNode
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
   * @return {Action<AppInitializedAction>}
   */
  initActionListener() {
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
