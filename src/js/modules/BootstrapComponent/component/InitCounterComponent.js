import {CounterComponent} from '../../CounterComponent'

export class InitCounterComponent {
  constructor(payload, APP, parentNode) {
    console.log(payload.message)

    CounterComponent
      .create(
        APP.addComponentContext(),
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
