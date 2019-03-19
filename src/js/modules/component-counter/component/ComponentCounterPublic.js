import {assertType} from 'flexio-jshelpers'
import {ComponentCounter} from './ComponentCounter'

const __componentCounter = Symbol('__componentCounter')

export class ComponentCounterPublic {
  /**
   *
   * @param {ComponentCounter} componentCounter
   */
  constructor(componentCounter) {
    assertType(componentCounter instanceof ComponentCounter, 'ComponentCounterPublic:constructor: `componentCounter` should be a ComponentCounter')
    /**
     * @private
     * @property {ComponentCounter} ComponentCounterPublic.__componentCounter
     * @type {ComponentCounter}
     */
    this[__componentCounter] = componentCounter
  }

  /**
   *
   * @return {ComponentCounterPublic}
   */
  initAndMount() {
    this[__componentCounter]
      .setEventLoop()
      .mountView()
    return this
  }
}
