import {
  Action
} from 'hotballoon'

const TYPES = {
  APP_INITIALIZED: 'APP_INITIALIZED'
}

export class AppActions extends Action {
  constructor(dispatcher, componentId) {
    super(dispatcher, componentId)
    this._types = TYPES
  }

  newAction(type, payload) {
    switch (type) {
      case this.type('APP_INITIALIZED'):

        this.dispatch(
          this.type('APP_INITIALIZED'), {
            type: this.type('APP_INITIALIZED'),
            message: payload.message
          }
        )
        break
    }
  }
}