import {ComponentCounter} from './ComponentCounter'
import {ComponentCounterPublic} from './ComponentCounterPublic'
import {assertType, isNode} from 'flexio-jshelpers'
import {TypeCheck} from 'hotballoon'

export class ComponentCounterBuilder {
  /**
   *
   * @param {string} message
   * @param {HotBalloonApplication} APP
   * @param {Element} parentNode
   * @return {ComponentCounterPublic}
   */
  static buildSimpleWithMessage(message, APP, parentNode) {
    assertType(TypeCheck.isHotballoonApplication(APP),
      'ComponentCounterBuilder:constructor: `APP` argument should be an instanceof HotballoonApplication, %s given',
      typeof APP)

    assertType(!!isNode(parentNode),
      'ComponentCounterBuilder:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    console.log(message)
    return new ComponentCounterPublic(
      new ComponentCounter(APP.addComponentContext(), parentNode).setEventLoop()
    )
  }
}
