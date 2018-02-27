import {
  MaSuperApp
} from './app/MaSuperApp'
import {
  AppDispatcher
} from './app/AppDispatcher'

import {
  ApplicationComponent
} from './modules/application'

const APP = new MaSuperApp();
(function(app) {
  app.setDispatcher(new AppDispatcher())
  const applicationComponent = app.addComponent(ApplicationComponent)
  let action = applicationComponent.Action('AppActions')
  app.createAction(action, action.type('APP_INITIALIZED'), {
    message: 'HEY YOUR APPLICATION IS READY, ENJOY !!'
  })
})(APP)

export {
  APP
}
