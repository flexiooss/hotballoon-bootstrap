import {
  Action
} from 'hotballoon'

const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  CHANGE_STEP: 'CHANGE_STEP'
}

export class DemoActions extends Action {
  constructor(dispatcher, componentId) {
    super(dispatcher, componentId)
    this._types = TYPES
  }

  newAction(type, payload) {
    switch (type) {
      case this.type('INCREMENT'):
        this.dispatch(
          this.type('INCREMENT'), {
            type: this.type('INCREMENT'),
            payload: payload
          }
        )
        break

      case this.type('DECREMENT'):
        this.dispatch(
          this.type('DECREMENT'), {
            type: this.type('DECREMENT'),
            payload: payload
          }
        )
        break

      case this.type('CHANGE_STEP'):
        this.dispatch(
          this.type('CHANGE_STEP'), {
            type: this.type('CHANGE_STEP'),
            step: payload.step
          }
        )
        break
    }
  }
}
