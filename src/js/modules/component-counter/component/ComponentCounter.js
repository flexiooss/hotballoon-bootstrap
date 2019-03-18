'use strict'
import {PublicStoreHandler, TypeCheck} from 'hotballoon'
import {initStoreCounter} from '../stores/storeCounterBuilder/initStoreCounter'
import {isNode, assert} from 'flexio-jshelpers'
import {addCounterViewContainer} from '../views/counter/InitViewContainerCounter'
import {listenActionIncrementCounter} from '../actions/ActionIncrementCounterUtils/ListenActionIncrementCounter'
import {initActionIncrementCounter} from '../actions/ActionIncrementCounterUtils/InitActionIncrementCounter'

export class ComponentCounter {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   */
  constructor(componentContext, parentNode) {
    assert(
      TypeCheck.isComponentContext(componentContext),
      'ComponentBootstrap:constructor: `componentContext` argument should be an instanceof ComponentContext, %s given',
      typeof componentContext)

    assert(!!isNode(parentNode),
      'ComponentBootstrap:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    this.__componentContext = componentContext
    this.__parentNode = parentNode
  }

  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Element} parentNode
   * @return {ComponentCounter}
   */
  static create(componentContext, parentNode) {
    return new ComponentCounter(componentContext, parentNode)
  }

  /**
   *
   * @return {ComponentCounter}
   */
  initCounterStore() {
    this.__counterStore = initStoreCounter(this)
    this.__counterStorePublicHandler = new PublicStoreHandler(this.__counterStore)
    return this
  }

  /**
   *
   * @return {ComponentCounter}
   */
  initActionIncrementCounter() {
    this.__actionIncrementCounter = initActionIncrementCounter(this)
    listenActionIncrementCounter(this)
    return this
  }

  setEventLoop() {
    this.initCounterStore()
    this.initActionIncrementCounter()
    return this
  }

  mountView() {
    assert(isNode(this.__parentNode),
      'ComponentCounter:mountView: `parentNode` should be a NodeType, %s given',
      typeof this.__parentNode
    )
    addCounterViewContainer(this).renderAndMount(this.__parentNode)
  }
}
