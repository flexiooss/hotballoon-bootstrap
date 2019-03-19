import {ActionBuilder, ActionParams} from 'hotballoon'
import {FLEXIO_IMPORT_OBJECT, assert} from 'flexio-jshelpers'
import '../../generated/io/package'

/**
 *
 * @type {ActionInitialize}
 */
const ActionInitialize = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_bootsrap.action.ActionInitialize

/**
 *
 * @param {Dispatcher} dispatcher
 * @returns {!Action<ActionInitialize>}
 */
export const initActionInitialize = (dispatcher) => {
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
      dispatcher
    )
  )
}
