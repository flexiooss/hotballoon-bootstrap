import {
  Action
} from 'hotballoon'

const TYPES = {
  INCREMENT: 'INCREMENT'
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
    }
  }
}
