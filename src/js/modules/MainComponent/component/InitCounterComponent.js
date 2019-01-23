import {CounterComponent} from '../../CounterComponent'

export class InitCounterComponent {
  constructor(payload, APP, parentNode) {
    console.log(payload.message)
    const COUNTER_COMPONENT_ID = APP.addComponent(
      CounterComponent.create(
        APP, parentNode)
    )

    APP.Component(COUNTER_COMPONENT_ID).createRenderMountView()
  }

  /**
   *
   * @param {Object} payload
   * @param {HotballoonApplication} APP
   * @param {Node} parentNode
   * @return {InitCIPipelineComponent}
   * @constructor
   * @static
   */
  static create(payload, APP, parentNode) {
    return new this(payload, APP, parentNode)
  }
}
