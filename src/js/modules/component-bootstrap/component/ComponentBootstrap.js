'use strict'
import {TypeCheck} from 'hotballoon'

import {isNode, assert, FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'
import '../generated/io/package'
import {initActionInitialize} from '../actions/ActionInitializeUtils/InitActionInitialize'
import {listenActionInitialize} from '../actions/ActionInitializeUtils/ListenActionInitialize'

/**
 *
 * @type {ActionInitialize}
 */
const ActionInitialize = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_bootstrap.ActionInitialize

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
    this.__actionInitialize = initActionInitialize(this)
    listenActionInitialize(this)
    return this
  }

  setEventLoop() {
    this.initActionInitialize()
    return this
  }

  dispatchActionInitialize(message) {
    assert(TypeCheck.isAction(this.__actionInitialize),
      'ComponentBootstrap:dispatchActionInitialize: ActionInitialize should be initialized before using it'
    )
    this.__actionInitialize.dispatch(new ActionInitialize(message))
  }

  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Element} parentNode
   * @return {ComponentBootstrap}
   * @static
   */
  static create(componentContext, parentNode) {
    return new this(componentContext, parentNode)
  }

  /**
   *
   * @return {ComponentContext}
   */
  get componentContext() {
    return this.__componentContext
  }
}
