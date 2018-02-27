import {
  HotBalloonApplication
} from 'hotballoon'

class MaSuperApp extends HotBalloonApplication {
  createAction(action, type, payload) {
    action.newAction(type, payload)
  }
}

export {
  MaSuperApp
}
