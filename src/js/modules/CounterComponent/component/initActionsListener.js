import {ActionBuilder, ActionParams} from 'hotballoon'
import {FLEXIO_IMPORT_OBJECT, assert} from 'flexio-jshelpers'
import '../generated/io/package'

/**
 *
 * @type {CounterIncrementAction}
 */
const CounterIncrementAction = window[FLEXIO_IMPORT_OBJECT].io.flexio.CounterComponent.CounterIncrementAction

/**
 *
 * @param {ComponentContext} componentContext
 * @param {Store<CounterStore>} counterStore
 * @return {Action<CounterIncrementAction>}
 */
export const initActionsListener = (componentContext, counterStore) => {
  /**
   *
   * @type {Action<CounterIncrementAction>}
   */
  const counterIncrementAction = ActionBuilder.build(
    new ActionParams(
      CounterIncrementAction,
      (payload) => {
        assert(
          payload instanceof CounterIncrementAction,
          'CounterIncrementAction:validate: `payload` argument should be an instance of CounterIncrementAction'
        )
        return true
      },
      componentContext.dispatcher()
    )
  )

  counterIncrementAction
    .listenWithCallback((payload) => {
      counterStore.set(
        counterStore.state().data.withCount(counterStore.state().data.count() + 1)
      )
    })

  return counterIncrementAction
}
