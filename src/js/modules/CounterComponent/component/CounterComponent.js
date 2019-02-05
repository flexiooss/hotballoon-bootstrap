'use strict'
import {TypeCheck, ViewContainerParameters} from 'hotballoon'
import {initStores} from './initStores'
import {initActionsListener} from './initActionsListener'
import {isNode, assert} from 'flexio-jshelpers'
import {CounterContainerStores, CounterContainer} from '../views/Counter.container'

export class CounterComponent {
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
     * @name CounterComponent#_componentContext
     * @type {ComponentContext}
     */
    Object.defineProperty(this, '_componentContext', {
      value: componentContext,
      enumerable: false,
      configurable: false
    })
    /**
     *
     * @type {Store}
     * @private
     */
    this.__counterStore = initStores(this._componentContext)
    initActionsListener(
      this._componentContext,
      this.__counterStore
    )

    this._setParentNode(parentNode)
  }

  _setParentNode(parentNode) {
    assert(!!isNode(parentNode),
      'BootstrapComponent:constructor: `parentNode` argument should be NodeType, %s given',
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
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   * @return {CounterComponent}
   * @constructor
   * @static
   */
  static create(componentContext, parentNode) {
    return new this(componentContext, parentNode)
  }

  createRenderMountView() {
    this._addCounterViewContainer().renderAndMount(this._parentNode)
  }

  /**
   *
   * @return {ViewContainer}
   * @private
   */
  _addCounterViewContainer() {
    const COUNTER_VIEWCONTAINER_ID = this._componentContext.nextID()

    const COUNTER_VIEWCONTAINER_INST = this._componentContext.addViewContainer(
      new CounterContainer(
        new ViewContainerParameters(
          this._componentContext,
          COUNTER_VIEWCONTAINER_ID,
          this._parentNode
        ),
        new CounterContainerStores(
          this.__counterStore
        )
      )
    )

    this._componentContext.debug.log('COUNTER_VIEWCONTAINER_INST')
    this._componentContext.debug.object(COUNTER_VIEWCONTAINER_INST)
    this._componentContext.debug.print()

    return COUNTER_VIEWCONTAINER_INST
  }
}
