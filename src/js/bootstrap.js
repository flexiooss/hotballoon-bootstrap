import {App} from './app/App'
import {AppDispatcher} from './app/AppDispatcher'
import {BootstrapComponent} from './modules/BootstrapComponent'

import './modules/BootstrapComponent/generated/io/package'
import {FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'

/**
 *
 * @type {AppInitializedAction}
 */
const AppInitializedAction = window[FLEXIO_IMPORT_OBJECT].io.flexio.BootstrapComponent.AppInitializedAction


export const APP = new App('CounterApplication', new AppDispatcher())
const HTML_NODE = document.body

;(function (app) {
  (BootstrapComponent
    .create(
      app.addComponentContext(),
      HTML_NODE
    ))
    .initAppInitializedAction()
    .initActionListener()
    .dispatch(new AppInitializedAction('Rutabaga !!!'))
})(APP)
