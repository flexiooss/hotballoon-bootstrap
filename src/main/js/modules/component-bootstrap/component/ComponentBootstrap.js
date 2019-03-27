'use strict'
import {TypeCheck} from 'hotballoon'

import {isNode, assert, FLEXIO_IMPORT_OBJECT, assertType} from 'flexio-jshelpers'
import '../generated/io/package'
import {initActionInitialize} from '../actions/ActionInitializeUtils/InitActionInitialize'
import {
  listenActionInitialize,
  ListenActionInitializeParam
} from '../actions/ActionInitializeUtils/ListenActionInitialize'

const ActionInitializeBuilder = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_bootstrap.actions.ActionInitializeBuilder

export class ComponentBootstrap {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Element} parentNode
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
   * @return {ComponentBootstrap}
   */
  initActionInitialize() {
    this.__actionInitialize = initActionInitialize(this.__componentContext.dispatcher())
    listenActionInitialize(new ListenActionInitializeParam(
      this.__actionInitialize,
      this.__componentContext.APP(),
      this.__parentNode
    ))
    return this
  }

  setEventLoop() {
    this.initActionInitialize()
    return this
  }

  dispatchActionInitialize(message) {
    assertType(TypeCheck.isAction(this.__actionInitialize),
      'ComponentBootstrap:dispatchActionInitialize: ActionInitialize should be initialized before using it'
    )
    this.__actionInitialize.dispatch(new ActionInitializeBuilder().message(message).build())
  }

  /**
   *
   * @return {ComponentContext}
   */
  get componentContext() {
    return this.__componentContext
  }
}
