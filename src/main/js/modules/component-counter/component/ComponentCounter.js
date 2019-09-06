import {TypeCheck} from '@flexio-oss/hotballoon'
import {isNode, assertType} from '@flexio-oss/assert'
import {ActionIncrementCounterUtils} from '../actions/ActionIncrementCounterUtils/ActionIncrementCounterUtils'
import {StoreCounterUtils} from '../stores/storeCounterUtils/StoreCounterUtils'
import {ViewContainerCounterUtils} from '../views/counter/ViewContainerCounterUtils'

export class ComponentCounter {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {AppStylesConfig} appStylesConfig
   * @param {Node} parentNode
   */
  constructor(componentContext, appStylesConfig, parentNode) {
    assertType(
      TypeCheck.isComponentContext(componentContext),
      'ComponentBootstrap:constructor: `componentContext` argument should be an instanceof ComponentContext'
    )
    assertType(!!isNode(parentNode),
      'ComponentBootstrap:constructor: `parentNode` argument should be NodeType'
    )

    this.__componentContext = componentContext
    this.__appStylesConfig = appStylesConfig
    this.__parentNode = parentNode

    this.__storeCounter = null
    this.__actionIncrement = null
  }

  /**
   *
   * @return {ComponentCounter}
   */
  __initCounterStore() {
    this.__storeCounter = new StoreCounterUtils(
      this.__componentContext
    ).build()
    return this
  }

  /**
   *
   * @return {ComponentCounter}
   */
  __initActionIncrementCounter() {
    this.__actionIncrement = new ActionIncrementCounterUtils(
      this.__componentContext.dispatcher(),
      this.__storeCounter.store()
    ).init().listen()
    return this
  }

  /**
   *
   * @returns {ComponentCounter}
   */
  setEventLoop() {
    this.__initCounterStore()
    this.__initActionIncrementCounter()
    return this
  }

  mountView() {
    assertType(isNode(this.__parentNode),
      'ComponentCounter:mountView: `parentNode` should be a NodeType, %s given',
      typeof this.__parentNode
    )
    const viewContainer = new ViewContainerCounterUtils(
      this.__componentContext,
      this.__appStylesConfig,
      this.__parentNode,
      this.__actionIncrement.action(),
      this.__storeCounter.storePublic()
    )
      .init()
      .renderAndMount(this.__parentNode)
  }
}
