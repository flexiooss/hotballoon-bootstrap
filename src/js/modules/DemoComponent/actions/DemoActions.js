import {
  Action
} from 'hotballoon'

export const DEMO_ACTIONS = 'DEMO_ACTIONS'
export const DEMO_ACTIONS_INCREMENT = 'DEMO_ACTIONS_INCREMENT'
export const DEMO_ACTIONS_DECREMENT = 'DEMO_ACTIONS_DECREMENT'
export const DEMO_ACTIONS_CHANGE_STEP = 'DEMO_ACTIONS_CHANGE_STEP'

export class DemoActions extends Action {
  _registerActions() {
    this._registerAction(DEMO_ACTIONS_INCREMENT)
    this._registerAction(DEMO_ACTIONS_DECREMENT)
    this._registerAction(DEMO_ACTIONS_CHANGE_STEP, (payload) => {
      return {
        step: payload.step
      }
    })
  }
}
