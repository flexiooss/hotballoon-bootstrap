'use strict'
import {PublicStoreHandler, TypeCheck, ViewContainerParameters} from 'hotballoon'
import {initStores} from './initStores'
import {initActionsListener} from './initActionsListener'
import {isNode, assert} from 'flexio-jshelpers'
import {CounterContainer} from '../views/Counter.container'
import {CounterContainerStoresParams} from '../views/CounterContainerStoresParams'
import {CounterContainerActionsParams} from '../views/CounterContainerActionsParams'

export class CounterComponent {
  /**
   *
   * @param {ComponentContext} componentContext
   */
  constructor(componentContext) {
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

    initActionsListener(
      this._componentContext,
      this.__counterStore
    )
  }

  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Element} parentNode
   * @return {CounterComponent}
   */
  static create(componentContext, parentNode) {
    return new CounterComponent(componentContext)
      .setParentDOMElement(parentNode)
      .initCounterStore()
      .initActionsListener()
  }

  /**
   *
   * @return {CounterComponent}
   */
  initCounterStore() {
    /**
     *
     * @type {CounterStore}
     * @private
     */
    this.__counterStore = initStores(this._componentContext)
    /**
     *
     * @type {PublicStoreHandler}
     * @private
     */
    this.__counterStorePublicHandler = new PublicStoreHandler(this.__counterStore)
    return this
  }

  /**
   *
   * @param {Element} parentNode
   * @return {CounterComponent}
   */
  setParentDOMElement(parentNode) {
    assert(!!isNode(parentNode),
      'BootstrapComponent:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    Object.defineProperties(this, {
      _parentNode: {
        enumerable: false,
        /**
         * @property {Element} _parentNode
         * @name CounterComponent#_parentNode
         */
        value: parentNode
      }
    })
    return this
  }

  /**
   *
   * @return {CounterComponent}
   */
  initActionsListener() {
    this.__counterIncrementAction = initActionsListener(
      this._componentContext,
      this.__counterStore
    )
    return this
  }

  createRenderMountView() {
    assert(
      isNode(this._parentNode),
      'CounterComponent:createRenderMountView: `_parentNode` property should be a ElementDescription')

    this._addCounterViewContainer().renderAndMount(this._parentNode)
  }

  /**
   *
   * @return {ViewContainer}
   * @private
   */
  _addCounterViewContainer() {
    const COUNTER_VIEWCONTAINER_ID = this._componentContext.nextID()

    const COUNTER_VIEWCONTAINER_INST = this._componentContext
      .addViewContainer(
        new CounterContainer(
          new ViewContainerParameters(
            this._componentContext,
            COUNTER_VIEWCONTAINER_ID,
            this._parentNode
          ),
          new CounterContainerStoresParams(
            this.__counterStorePublicHandler
          ),
          new CounterContainerActionsParams(this.__counterIncrementAction)
        )
      )

    this._componentContext.debug.log('COUNTER_VIEWCONTAINER_INST')
    this._componentContext.debug.object(COUNTER_VIEWCONTAINER_INST)
    this._componentContext.debug.print()

    return COUNTER_VIEWCONTAINER_INST
  }
}
