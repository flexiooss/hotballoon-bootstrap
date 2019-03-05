import {Action, ActionParams} from 'hotballoon'
import {CounterIncrementAction} from '../actions/CounterIncrementAction'
import {CounterState} from '../stores/CounterState'
import {assert} from 'flexio-jshelpers'

/**
 *
 * @param {ComponentContext} componentContext
 * @param {Store} counterStore
 * @return {Action.<CounterIncrementAction>}
 */
export const initActionsListener = (componentContext, counterStore) => {
  const counterIncrementAction = new Action(
    new ActionParams(
      'CounterIncrementAction',
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
        new CounterState(counterStore.data().count + 1)
      )
    })

  return counterIncrementAction
}
