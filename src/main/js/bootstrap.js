import {App} from './app/App'
import {AppDispatcher} from './app/AppDispatcher'

import {ComponentBootstrapBuilder} from './modules/component-bootstrap'

export const APP = new App('CounterApplication', new AppDispatcher())
const HTML_NODE = document.body

;(function(app) {
  ComponentBootstrapBuilder
    .build(app, HTML_NODE)
    .dispatchActionInitialize('Rutabaga !!!')
})(APP)
