import {ContainerCounter} from './ContainerCounter'
import {ViewContainerParameters} from 'hotballoon'
import {ContainerStoreCounter} from '../ContainerStoreCounter'
import {ContainerActionCounter} from '../ContainerActionCounter'

export const addCounterViewContainer = (component) => {
  const COUNTER_VIEWCONTAINER_ID = component.__componentContext.nextID()

  const COUNTER_VIEWCONTAINER_INST = component.__componentContext
    .addViewContainer(
      new ContainerCounter(
        new ViewContainerParameters(
          component.__componentContext,
          COUNTER_VIEWCONTAINER_ID,
          component.__parentNode
        ),
        new ContainerStoreCounter(component.__counterStorePublicHandler),
        new ContainerActionCounter(component.__actionIncrementCounter)
      )
    )

  component.__componentContext.debug.log('COUNTER_VIEWCONTAINER_INST')
  component.__componentContext.debug.object(COUNTER_VIEWCONTAINER_INST)
  component.__componentContext.debug.print()

  return COUNTER_VIEWCONTAINER_INST
}
