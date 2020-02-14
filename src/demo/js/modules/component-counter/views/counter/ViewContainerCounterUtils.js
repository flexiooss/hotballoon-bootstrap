import {ContainerCounter} from './ContainerCounter'
import {TypeCheck, ViewContainerParameters} from '@flexio-oss/hotballoon'
import {ContainerStoreCounter} from '../ContainerStoreCounter'
import {ContainerActionCounter} from '../ContainerActionCounter'
import {assertType, isNode} from '@flexio-oss/assert'

export class ViewContainerCounterUtils {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {ThemeStyle} themeStyle
   * @param {Element} parentNode
   * @param {ActionDispatcher<ActionIncrementCounter>} action
   * @param {PublicStoreHandler<StoreCounter>} store
   */
  constructor(componentContext, themeStyle, parentNode, action, store) {
    assertType(TypeCheck.isComponentContext(componentContext),
      'ViewContainerCounterUtils:constructor: `componentContext` should be a ComponentContext'
    )
    assertType(isNode(parentNode),
      'ViewContainerCounterUtils:constructor: `parentNode` should be a Node'
    )
    assertType(TypeCheck.isActionDispatcher(action),
      'ViewContainerCounterUtils:constructor: `action` should be a Action'
    )
    assertType(TypeCheck.isPublicStoreHandler(store),
      'ViewContainerCounterUtils:constructor: `store` should be a Store'
    )
    this.__componentContext = componentContext
    this.__themeStyle = themeStyle
    this.__parentNode = parentNode
    this.__action = action
    this.__store = store
  }

  /**
   *
   * @returns {ViewContainer}
   */
  init() {
    const VIEWCONTAINER_ID = this.__componentContext.nextID()

    const VIEWCONTAINER_INST = this.__componentContext.addViewContainer(
      new ContainerCounter(
        new ViewContainerParameters(
          this.__componentContext,
          VIEWCONTAINER_ID,
          this.__parentNode
        ),
        this.__themeStyle,
        new ContainerStoreCounter(this.__store),
        new ContainerActionCounter(this.__action)
      )
    )

    this.__componentContext.logger().log(
      this.__componentContext.logger()
        .builder()
        .debug()
        .pushLog('VIEWCONTAINER_INST')
        .pushLog(VIEWCONTAINER_INST)
    )

    return VIEWCONTAINER_INST
  }
}
