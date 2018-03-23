import {
  Action
} from 'hotballoon'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_STEP = 'CHANGE_STEP'

export class DemoActions extends Action {
  newAction(type, payload) {
    switch (type) {
      case INCREMENT:
        this._dispatch(
          INCREMENT, {
            type: INCREMENT,
            payload: payload
          }
        )
        break

      case DECREMENT:
        this._dispatch(
          DECREMENT, {
            type: DECREMENT,
            payload: payload
          }
        )
        break

      case CHANGE_STEP:
        this._dispatch(
          CHANGE_STEP, {
            type: CHANGE_STEP,
            step: payload.step
          }
        )
        break
    }
  }
}
