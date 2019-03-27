import {ActionBuilder, ActionParams, ActionTypeParam} from 'hotballoon'
import {FLEXIO_IMPORT_OBJECT} from 'flexio-jshelpers'
import '../../generated/io/package'

/**
 *
 * @params {ActionIncrementCounter}
 */
const ActionIncrementCounter = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_counter.actions.ActionIncrementCounter

/**
 *
 * @param {Dispatcher} dispatcher
 * @returns {!Action<ActionIncrementCounter>}
 */
export const initActionIncrementCounter = (dispatcher) => {
  return ActionBuilder.build(
    new ActionParams(
      new ActionTypeParam(
        ActionIncrementCounter
      ),
      dispatcher
    )
  )
}
