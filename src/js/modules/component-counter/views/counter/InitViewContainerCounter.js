import {ContainerCounter} from './ContainerCounter'
import {ViewContainerParameters} from 'hotballoon'
import {ContainerStoreCounter} from '../ContainerStoreCounter'
import {ContainerActionCounter} from '../ContainerActionCounter'
import {assertType} from 'flexio-jshelpers'

export class InitViewContainerCounterParams {
  constructor(actionIncrementCounter, counterStorePublicHandler) {
    this.actionIncrementCounter = actionIncrementCounter
    this.counterStorePublicHandler = counterStorePublicHandler
  }
}

/**
 *
 * @param {ComponentContext} componentContext
 * @param {Node} parentNode
 * @param {InitViewContainerCounterParams} params
 * @returns {ViewContainer|*}
 */
export const initViewContainerCounter = (componentContext, parentNode, params) => {
  assertType(params instanceof InitViewContainerCounterParams,
    'ComponentCounter:initViewContainerCounter: `params` should be InitViewContainerCounterParams'
  )
  const COUNTER_VIEWCONTAINER_ID = componentContext.nextID()

  const COUNTER_VIEWCONTAINER_INST = componentContext
    .addViewContainer(
      new ContainerCounter(
        new ViewContainerParameters(
          componentContext,
          COUNTER_VIEWCONTAINER_ID,
          parentNode
        ),
        new ContainerStoreCounter(params.counterStorePublicHandler),
        new ContainerActionCounter(params.actionIncrementCounter)
      )
    )

  componentContext.debug.log('COUNTER_VIEWCONTAINER_INST')
  componentContext.debug.object(COUNTER_VIEWCONTAINER_INST)
  componentContext.debug.print()

  return COUNTER_VIEWCONTAINER_INST
}
