import {
  MaSuperApp
} from './app/MaSuperApp'
import {
  AppDispatcher
} from './app/AppDispatcher'

import {
  DemoComponent,
  ACTION_APP
} from './modules/DemoComponent'

const APP = new MaSuperApp();
(function(app) {
  app.setDispatcher(new AppDispatcher())
  const applicationComponent = app.addComponent(DemoComponent, document.body)
  let action = applicationComponent.Action(ACTION_APP)
  app.createAction(action, action.type('APP_INITIALIZED'), {
    message: 'HEY YOUR APPLICATION IS READY, ENJOY !!'
  })
})(APP)

export {
  APP
}
