import {TypeCheck} from '@flexio-oss/hotballoon'
import {isNode, assertType} from '@flexio-oss/assert'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {ActionInitializeUtils} from '../actions/ActionInitializeUtils/ActionInitializeUtils'


export class ComponentBootstrap {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {ThemeStyle} themeStyle
   * @param {Element} parentNode
   */
  constructor(componentContext, themeStyle, parentNode) {
    assertType(TypeCheck.isComponentContext(componentContext),
      'ComponentBootstrap:constructor: `componentContext` argument should be a ComponentContext, %s given',
      typeof componentContext
    )

    assertType(!!isNode(parentNode),
      'ComponentBootstrap:constructor: `parentNode` argument should be a NodeType, %s given',
      typeof parentNode
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
  }

  /**
   *
   * @return {ComponentBootstrap}
   */
  __initActionInitialize() {
    this.__actionInitialize = new ActionInitializeUtils(
      this.__componentContext.dispatcher(),
      this.__componentContext.APP(),
      this.__themeStyle,
      this.__parentNode
    )
      .init()
      .listen(this.__componentContext)
    return this
  }

  setEventLoop() {
    this.__initActionInitialize()
    return this
  }

  dispatchActionInitialize(message) {
    assertType(TypeCheck.isActionDispatcher(this.__actionInitialize.action()),
      'ComponentBootstrap:dispatchActionInitialize: ActionInitialize should be initialized before using it'
    )
    this.__actionInitialize.action().dispatch(
      new globalFlexioImport.io.flexio.component_bootstrap.actions.ActionInitializeBuilder().message(message).build()
    )
  }

  /**
   *
   * @return {ComponentContext}
   */
  get componentContext() {
    return this.__componentContext
  }
}
