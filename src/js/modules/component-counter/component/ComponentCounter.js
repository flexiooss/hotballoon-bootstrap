'use strict'
import {PublicStoreHandler, TypeCheck} from 'hotballoon'
import {initStoreCounter} from '../stores/storeCounterUtils/initStoreCounter'
import {isNode, assert,assertType} from 'flexio-jshelpers'
import {addCounterViewContainer} from '../views/counter/InitViewContainerCounter'
import {
  listenActionIncrementCounter,
  ListenActionIncrementCounterParam
} from '../actions/ActionIncrementCounterUtils/ListenActionIncrementCounter'
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

    assertType(!!isNode(parentNode),
      'ComponentBootstrap:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    this.__componentContext = componentContext
    this.__parentNode = parentNode
  }

  /**
   *
   * @return {ComponentCounter}
   */
  initCounterStore() {
    this.__storeCounter = initStoreCounter(this.__componentContext)
    this.__counterStorePublicHandler = new PublicStoreHandler(this.__storeCounter)
    return this
  }

  /**
   *
   * @return {ComponentCounter}
   */
  initActionIncrementCounter() {
    this.__actionIncrementCounter = initActionIncrementCounter(this.__componentContext.dispatcher())
    listenActionIncrementCounter(new ListenActionIncrementCounterParam(this.__actionIncrementCounter, this.__storeCounter))
    return this
  }

  setEventLoop() {
    this.initCounterStore()
    this.initActionIncrementCounter()
    return this
  }

  mountView() {
    assertType(isNode(this.__parentNode),
      'ComponentCounter:mountView: `parentNode` should be a NodeType, %s given',
      typeof this.__parentNode
    )
    addCounterViewContainer(this).renderAndMount(this.__parentNode)
  }
}
