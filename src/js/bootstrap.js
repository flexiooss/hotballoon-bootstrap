import {App} from './app/App'
import {AppDispatcher} from './app/AppDispatcher'

import './modules/component-bootstrap/generated/io/package'
import {ComponentBootstrapBuilder} from './modules/component-bootstrap/component/ComponentBootstrapBuilder'

export const APP = new App('CounterApplication', new AppDispatcher())
const HTML_NODE = document.body

;(function(app) {
  (ComponentBootstrapBuilder
    .create(
      app,
      HTML_NODE
    ))
    .dispatchActionInitialize('Rutabaga !!!')
})(APP)
