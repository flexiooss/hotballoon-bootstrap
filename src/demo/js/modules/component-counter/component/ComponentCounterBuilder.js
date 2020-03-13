import {TypeCheck} from '@flexio-oss/hotballoon'
import {isNode, assertType} from '@flexio-oss/assert'
import {ComponentCounter} from './ComponentCounter'
import {ComponentCounterPublic} from './ComponentCounterPublic'

export class ComponentCounterBuilder {
  /**
   *
   * @param {string} message
   * @param {HotBalloonApplication} APP
   * @param {ThemeStyle} themeStyle
   * @param {Element} parentNode
   * @return {ComponentCounterPublic}
   */
  static buildSimpleWithMessage(message, APP, themeStyle, parentNode) {
    assertType(TypeCheck.isHotballoonApplication(APP),
      'ComponentCounterBuilder:constructor: `APP` argument should be an instanceof HotballoonApplication, %s given',
      typeof APP)

    assertType(!!isNode(parentNode),
      'ComponentCounterBuilder:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    console.log(message)
    return new ComponentCounterPublic(
      new ComponentCounter(
        APP.addComponentContext(),
        themeStyle,
        parentNode
      )
        .setEventLoop()
    )
  }
}
