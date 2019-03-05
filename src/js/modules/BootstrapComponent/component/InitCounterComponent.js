import {CounterComponent} from '../../CounterComponent'
import {ComponentContext} from 'hotballoon'

export class InitCounterComponent {
  constructor(payload, APP, parentNode) {
    console.log(payload.message)

    CounterComponent
      .create(
        APP.addComponentContext(new ComponentContext(APP)),
        parentNode
      )
      .createRenderMountView()
  }

  /**
   *
   * @param {Object} payload
   * @param {HotBalloonApplication} APP
   * @param {Node} parentNode
   * @return {InitCounterComponent}
   * @constructor
   * @static
   */
  static create(payload, APP, parentNode) {
    return new this(payload, APP, parentNode)
  }
}
