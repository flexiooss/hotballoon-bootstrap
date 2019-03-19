import {ActionBuilder, ActionParams} from 'hotballoon'
import {FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'
import '../../generated/io/package'

/**
 *
 * @type {ActionIncrementCounter}
 */
const ActionIncrementCounter = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_counter.action.ActionIncrementCounter

/**
 *
 * @param {Dispatcher} dispatcher
 * @returns {!Action<ActionIncrementCounter>}
 */
export const initActionIncrementCounter = (dispatcher) => {
  return ActionBuilder.build(
    new ActionParams(
      ActionIncrementCounter,
      /**
       *
       * @param {ActionIncrementCounter} payload
       * @return {boolean}
       */
      (payload) => {
        return true
      },
      dispatcher
    )
  )
}
