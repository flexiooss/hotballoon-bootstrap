import {
  MaSuperApp
} from './app/MaSuperApp'
import {
  AppDispatcher
} from './app/AppDispatcher'

import {
  DemoComponent,
  ACTION_APP as ACTION_APP_KEY,
  APP_INITIALIZED as ACTION_APP_APP_INITIALIZED
} from './modules/DemoComponent'

const APP = new MaSuperApp(new AppDispatcher());

(function(app) {
  const applicationComponentToken = app.addComponent(DemoComponent, document.body)

  const ACTION_APP = app.Component(applicationComponentToken).Action(ACTION_APP_KEY)

  ACTION_APP.newAction(
    ACTION_APP_APP_INITIALIZED, {
      message: 'HEY YOUR APPLICATION IS READY, ENJOY !!'
    }
  )
})(APP)

export {
  APP
}
