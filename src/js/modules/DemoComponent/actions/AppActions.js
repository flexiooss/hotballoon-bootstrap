import {
  Action
} from 'hotballoon'

export const APP_INITIALIZED = 'APP_INITIALIZED'

export class AppActions extends Action {
  newAction(type, payload) {
    switch (type) {
      case APP_INITIALIZED:

        this._dispatch(
          APP_INITIALIZED, {
            type: APP_INITIALIZED,
            message: payload.message
          }
        )
        break
    }
  }
}
