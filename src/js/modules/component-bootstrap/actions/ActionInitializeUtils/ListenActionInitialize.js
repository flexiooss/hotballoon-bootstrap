import {assert} from 'flexio-jshelpers'
import {ComponentCounterBuilder} from '../../../component-counter/component/ComponentCounterBuilder'
import {TypeCheck} from 'hotballoon'

/**
 *
 * @param {ComponentBootstrap} component
 */
export const listenActionInitialize = (component) => {
  assert(TypeCheck.isAction(component.__actionInitialize),
    'ComponentBootstrap:listenActionInitialize: ActionInitialize should be initialized before using it'
  )

  component.__actionInitialize.listenWithCallback(
    (payload) => {
      ComponentCounterBuilder.create(payload, component.__componentContext.APP(), component.__parentNode)
    }
  )
}
