import {ComponentBootstrap} from '..'
import {TypeCheck} from 'hotballoon'
import {assert, isNode} from 'flexio-jshelpers'

export class ComponentBootstrapBuilder {
  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {Element} parentNode
   */
  constructor(APP, parentNode) {
    assert(TypeCheck.isHotballoonApplication(APP),
      'ComponentBootstrapBuilder:constructor: `APP` argument should be an instanceof HotballoonApplication, %s given',
      typeof APP)

    assert(!!isNode(parentNode),
      'ComponentBootstrapBuilder:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    this.__componentBootstrap = ComponentBootstrap.create(
      APP.addComponentContext(),
      parentNode
    ).setEventLoop()
  }

  dispatchActionInitialize(message) {
    this.__componentBootstrap.dispatchActionInitialize(message)
  }

  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {Element} parentNode
   * @return {ComponentBootstrapBuilder}
   * @constructor
   * @static
   */
  static create(APP, parentNode) {
    return new this(APP, parentNode)
  }
}
