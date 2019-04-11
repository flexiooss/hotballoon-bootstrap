import { assertType, isNode } from 'flexio-jshelpers'
import { TypeCheck } from 'hotballoon'
import { ActionUpdateLabelBuilder } from '../actions/ActionUpdateLabelBuilder'
import '../generated/io/package'
import { StoreReverse } from '../stores/StoreReverse'

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
    let storeReverse = new StoreReverse(this.__componentContext)
    this.__store = storeReverse.getStore()
    this.__action = new ActionUpdateLabelBuilder(componentContext.dispatcher()).init()

    this.__listenAction()
  }

  __listenAction() {
    this.__action.listenWithCallback(
      (payload) => {
        let label = payload.label().split('').reverse().join('')

        this.__store.set(
          this.__store.state().data.withLabel(label)
        )
      }
    )
  }
}
