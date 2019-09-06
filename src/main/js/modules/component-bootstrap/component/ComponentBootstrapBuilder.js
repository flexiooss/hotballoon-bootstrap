import {ComponentBootstrap} from './ComponentBootstrap'
import {ComponentBootstrapPublic} from './ComponentBootstrapPublic'
import {TypeCheck} from '@flexio-oss/hotballoon'
import {isNode, assertType} from '@flexio-oss/assert'
import {AppStylesConfig} from '../AppStylesConfig'

export class ComponentBootstrapBuilder {
  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {AppStylesConfig} appStylesConfig
   * @param {Element} parentNode
   * @return {ComponentBootstrapPublic}
   */
  static build(APP, appStylesConfig, parentNode) {
    assertType(TypeCheck.isHotballoonApplication(APP),
      'ComponentBootstrapBuilder:constructor: `APP` argument should be an instanceof HotballoonApplication, %s given',
      typeof APP)

    assertType(
      appStylesConfig instanceof AppStylesConfig,
      'ComponentBootstrapBuilder:constructor: `appStylesConfig` argument should be an instanceof AppStylesConfig'
    )

    assertType(!!isNode(parentNode),
      'ComponentBootstrapBuilder:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    return new ComponentBootstrapPublic(
      new ComponentBootstrap(
        APP.addComponentContext(),
        appStylesConfig,
        parentNode
      ).setEventLoop()
    )
  }
}
