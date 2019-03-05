import {App} from './app/App'
import {AppDispatcher} from './app/AppDispatcher'
import {ComponentContext} from 'hotballoon'
import {BootstrapComponent} from './modules/BootstrapComponent'
import {AppInitializedAction} from './modules/BootstrapComponent/actions/AppInitializedAction'

export const APP = new App('CounterApplication', new AppDispatcher())
const HTML_NODE = document.body

;(function (app) {
  (BootstrapComponent
    .create(
      app.addComponentContext(new ComponentContext(app)),
      HTML_NODE
    ))
    .initActionListener()
    .dispatch(new AppInitializedAction('Rutabaga !!!'))
})(APP)
