import {
  Action
} from 'hotballoon'

export const APP_ACTIONS = 'APP_ACTIONS'
export const APP_ACTIONS_APP_INITIALIZED = 'APP_ACTIONS_APP_INITIALIZED'

export class AppActions extends Action {
  _registerActions() {
    this._registerAction(APP_ACTIONS_APP_INITIALIZED, (payload) => {
      return {
        message: payload.message
      }
    })
  }
}
