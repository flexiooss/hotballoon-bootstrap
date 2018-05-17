import {
  MaSuperApp
} from './app/MaSuperApp'
import {
  AppDispatcher
} from './app/AppDispatcher'

import {
  MainComponent,
  APP_ACTIONS,
  APP_ACTIONS_APP_INITIALIZED
} from './modules/MainComponent'

const APP = new MaSuperApp('MaSuperApp', new AppDispatcher());

(function(app) {
  const MAIN_COMPONENT_ID = app.addComponent(new MainComponent(app, document.body))

  app
    .Component(MAIN_COMPONENT_ID)
    .Action(APP_ACTIONS)
    .trigger(
      APP_ACTIONS_APP_INITIALIZED, {
        message: 'HEY YOUR APPLICATION IS READY, ENJOY !!'
      }
    )
})(APP)

export {
  APP
}
