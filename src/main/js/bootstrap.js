import {ApplicationBuilder, Dispatcher} from '@flexio-oss/hotballoon'
import {ConsoleLogger, FakeLogger} from '@flexio-oss/js-logger'

import {ComponentBootstrapBuilder} from './modules/component-bootstrap'
import {AppStyles} from './modules/component-bootstrap/AppStyles'

const logger = new ConsoleLogger().debug()

const themeStyle = AppStyles.build(logger)

export const APP = new ApplicationBuilder()
  .id('CounterApplication')
  .logger(logger)
  .dispatcher(new Dispatcher(logger))
  .document(document)
  .build()

const HTML_NODE = document.body

;(function(app) {
  ComponentBootstrapBuilder
    .build(
      app,
      themeStyle,
      HTML_NODE
    )
    .dispatchActionInitialize('Rutabaga !!!')
})(APP)
