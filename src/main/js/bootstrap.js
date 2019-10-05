import {App} from './app/App'
import {AppDispatcher} from './app/AppDispatcher'
import {ConsoleLogger, FakeLogger} from '@flexio-oss/js-logger'

import {ComponentBootstrapBuilder} from './modules/component-bootstrap'
import {AppStyles} from './modules/component-bootstrap/AppStyles'

const logger = new ConsoleLogger().debug()

const appStylesConfig = AppStyles.build(logger)

export const APP = new App(
  'CounterApplication',
  new AppDispatcher(logger),
  logger
)
const HTML_NODE = document.body

;(function(app) {
  ComponentBootstrapBuilder
    .build(
      app,
      appStylesConfig,
      HTML_NODE
    )
    .dispatchActionInitialize('Rutabaga !!!')
})(APP)
