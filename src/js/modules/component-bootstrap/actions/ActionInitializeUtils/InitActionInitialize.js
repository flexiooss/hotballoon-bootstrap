import {ActionBuilder, ActionParams} from 'hotballoon'
import {FLEXIO_IMPORT_OBJECT, assert} from 'flexio-jshelpers'
import '../../generated/io/package'

/**
 *
 * @type {ActionInitialize}
 */
const ActionInitialize = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_bootstrap.ActionInitialize

/**
 *
 * @param component
 * @returns {!Action<ActionInitialize>}
 */
export const initActionInitialize = (component) => {
  return ActionBuilder.build(
    new ActionParams(
      ActionInitialize,
      (payload) => {
        assert(
          payload instanceof ActionInitialize,
          'ComponentBootstrap:initActionInitialize: `payload` argument should be an instance of ActionInitialize, %s given',
          typeof payload
        )
        return true
      },
      component.__componentContext.dispatcher()
    )
  )
}
