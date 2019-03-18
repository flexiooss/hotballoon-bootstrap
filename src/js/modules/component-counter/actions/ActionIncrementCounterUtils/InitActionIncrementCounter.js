import {ActionBuilder, ActionParams} from 'hotballoon'
import {FLEXIO_IMPORT_OBJECT, assert} from 'flexio-jshelpers'
import '../../generated/io/package'

/**
 *
 * @type {ActionIncrementCounter}
 */
const ActionIncrementCounter = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_counter.ActionIncrementCounter

/**
 *
 * @param component
 * @returns {!Action<ActionIncrementCounter>}
 */
export const initActionIncrementCounter = (component) => {
  return ActionBuilder.build(
    new ActionParams(
      ActionIncrementCounter,
      (payload) => {
        assert(
          payload instanceof ActionIncrementCounter,
          'ComponentCounter:initActionIncrementCounter: `payload` argument should be an instance of ActionIncrementCounter, %s given',
          typeof payload
        )
        return true
      },
      component.__componentContext.dispatcher()
    )
  )
}
