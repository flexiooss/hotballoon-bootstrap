import {TypeCheck} from '@flexio-oss/hotballoon'
import {isNode, assertType} from '@flexio-oss/assert'
import {ActionIncrementCounterUtils} from '../actions/ActionIncrementCounterUtils/ActionIncrementCounterUtils'
import {StoreCounterUtils} from '../stores/storeCounterUtils/StoreCounterUtils'
import {ViewContainerCounterUtils} from '../views/counter/ViewContainerCounterUtils'


export class ComponentCounter {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {ThemeStyle} themeStyle
   * @param {Element} parentNode
   */
  constructor(componentContext, themeStyle, parentNode) {
    assertType(
      TypeCheck.isComponentContext(componentContext),
      'ComponentBootstrap:constructor: `componentContext` argument should be an instanceof ComponentContext'
    )
    assertType(!!isNode(parentNode),
      'ComponentBootstrap:constructor: `parentNode` argument should be NodeType'
    )

    /**
     *
     * @type {ComponentContext}
     * @private
     */
    this.__componentContext = componentContext
    /**
     *
     * @type {ThemeStyle}
     * @private
     */
    this.__themeStyle = themeStyle
    /**
     *
     * @type {Element}
     * @private
     */
    this.__parentNode = parentNode

    /**
     *
     * @type {?StoreCounterUtils}
     * @private
     */
    this.__storeCounter = null
    /**
     *
     * @type {?ActionIncrementCounterUtils}
     * @private
     */
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
    )
      .init()
      .listen(this.__componentContext)

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
      this.__themeStyle,
      this.__parentNode,
      this.__actionIncrement.action(),
      this.__storeCounter.storePublic()
    )
      .init()
      .renderAndMount()
  }
}
