import {ComponentBootstrap} from './ComponentBootstrap'
import {ComponentBootstrapPublic} from './ComponentBootstrapPublic'
import {TypeCheck} from '@flexio-oss/hotballoon'
import {isNode, assertType} from '@flexio-oss/assert'
import {AppStylesConfig} from '../AppStylesConfig'

export class ComponentBootstrapBuilder {
  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {ThemeStyle} themeStyle
   * @param {Element} parentNode
   * @return {ComponentBootstrapPublic}
   */
  static build(APP, themeStyle, parentNode) {
    assertType(TypeCheck.isHotballoonApplication(APP),
      'ComponentBootstrapBuilder:constructor: `APP` argument should be an instanceof HotballoonApplication, %s given',
      typeof APP)



    assertType(!!isNode(parentNode),
      'ComponentBootstrapBuilder:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    return new ComponentBootstrapPublic(
      new ComponentBootstrap(
        APP.addComponentContext(),
        themeStyle,
        parentNode
      ).setEventLoop()
    )
  }
}
