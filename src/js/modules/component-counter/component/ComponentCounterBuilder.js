import {ComponentCounter} from '..'
import {assert, isNode} from 'flexio-jshelpers'
import {TypeCheck} from 'hotballoon'

export class ComponentCounterBuilder {
  /**
   *
   * @param {ActionInitialize} payload
   * @param {HotBalloonApplication} APP
   * @param {Element} parentNode
   */
  constructor(payload, APP, parentNode) {
    assert(TypeCheck.isHotballoonApplication(APP),
      'ComponentCounterBuilder:constructor: `APP` argument should be an instanceof HotballoonApplication, %s given',
      typeof APP)

    assert(!!isNode(parentNode),
      'ComponentCounterBuilder:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    console.log(payload.message())

    ComponentCounter.create(APP.addComponentContext(), parentNode)
      .setEventLoop()
      .mountView()
  }

  /**
   *
   * @param {ActionInitialize} payload
   * @param {HotBalloonApplication} APP
   * @param {Element} parentNode
   * @return {ComponentCounterBuilder}
   * @constructor
   * @static
   */
  static create(payload, APP, parentNode) {
    return new this(payload, APP, parentNode)
  }
}
