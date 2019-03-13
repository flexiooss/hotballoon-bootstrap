import {CounterComponent} from '../../CounterComponent'

export class InitCounterComponent {
  /**
   *
   * @param {AppInitializedAction} payload
   * @param {HotBalloonApplication} APP
   * @param {Element} parentNode
   */
  constructor(payload, APP, parentNode) {
    console.log(payload.message())

    CounterComponent
      .create(
        APP.addComponentContext(),
        parentNode
      )
      .createRenderMountView()
  }

  /**
   *
   * @param {AppInitializedAction} payload
   * @param {HotBalloonApplication} APP
   * @param {Element} parentNode
   * @return {InitCounterComponent}
   * @constructor
   * @static
   */
  static create(payload, APP, parentNode) {
    return new this(payload, APP, parentNode)
  }
}
