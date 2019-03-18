import {assert} from 'flexio-jshelpers'
import {TypeCheck} from 'hotballoon'

/**
 *
 * @param {ComponentCounter} component
 */
export const listenActionIncrementCounter = (component) => {
  assert(TypeCheck.isAction(component.__actionIncrementCounter),
    'ComponentCounter:listenActionIncrementCounter: ActionIncrementCounter should be initialized before using it'
  )

  assert(TypeCheck.isStore(component.__counterStore),
    'ComponentCounter:listenActionIncrementCounter: StoreCounter should be initialized before using it'
  )

  component.__actionIncrementCounter
    .listenWithCallback((payload) => {
      component.__counterStore.set(
        component.__counterStore.state().data.withCount(component.__counterStore.state().data.count() + 1)
      )
    })
}
