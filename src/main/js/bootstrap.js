import {App} from './app/App'
import {AppDispatcher} from './app/AppDispatcher'
import {ConsoleLogger, FakeLogger} from '@flexio-oss/js-logger'

import {ComponentBootstrapBuilder} from './modules/component-bootstrap'

export const APPAPP = 'APPAPP'
export const APP = new App(
  'CounterApplication',
  new AppDispatcher(),
  new ConsoleLogger().debug()
)
const HTML_NODE = document.body
if (typeof window['__HB_APP_CONF__'] !== 'undefined') {
  console.log(window['__HB_APP_CONF__'])
}
;(function(app) {
  ComponentBootstrapBuilder
    .build(app, HTML_NODE)
    .dispatchActionInitialize('Rutabaga !!!')
})(APP)
