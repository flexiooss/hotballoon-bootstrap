'use strict'
import {isNode, assert} from 'flexio-jshelpers'
import {DispatcherEventListenerFactory, TypeCheck} from 'hotballoon'
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
    this.initBootstrap()
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
   * @return {BootstrapComponent}
   */
  initBootstrap() {
    this.componentContext.listenAction(
      /**
       * @param {AppActionPayload} payload
       */
      DispatcherEventListenerFactory.listen(new AppInitializedAction())
        .callback(
          /**
           * @param {AppActionPayload} payload
           */
          (payload) => {
            console.log('ici')
            InitCounterComponent.create(payload, this.componentContext.APP(), this._parentNode)
          })
        .build()
    )
    return this
  }
}
