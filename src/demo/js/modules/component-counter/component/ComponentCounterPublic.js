import {assertType} from '@flexio-oss/assert'
import {ComponentCounter} from './ComponentCounter'

const __component = Symbol('__componentCounter')

/**
 * @implements {Component}
 */
export class ComponentCounterPublic {
  /**
   *
   * @param {ComponentCounter} component
   */
  constructor(component) {
    assertType(component instanceof ComponentCounter, 'ComponentCounterPublic:constructor: `component` should be a ComponentCounter')
    /**
     * @private
     * @property {ComponentCounter} ComponentCounterPublic.__component
     */
    this[__component] = component
  }

  /**
   *
   * @return {ComponentCounterPublic}
   */
  mountView() {
    this[__component]
      .mountView()
    return this
  }
}
