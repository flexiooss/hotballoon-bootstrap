import { assertType, isNode } from 'flexio-jshelpers'
import { TypeCheck } from 'hotballoon'
import '../generated/io/package'

export class ComponentReverse {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   */
  constructor(componentContext, parentNode) {
    assertType(
      TypeCheck.isComponentContext(componentContext),
      'ComponentBootstrap:constructor: `componentContext` argument should be an instanceof ComponentContext'
    )
    assertType(!!isNode(parentNode),
      'ComponentBootstrap:constructor: `parentNode` argument should be NodeType'
    )

    this.__componentContext = componentContext
    this.__parentNode = parentNode
  }
}
