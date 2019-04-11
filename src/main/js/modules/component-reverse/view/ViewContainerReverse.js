import { EventListenerOrderedBuilder, ViewContainer, ViewContainerParameters } from 'hotballoon'
import { UPDATE_EVENT, ViewReverse } from './views/ViewReverse'
import { FLEXIO_IMPORT_OBJECT } from 'flexio-jshelpers'

const ActionUpdatePayloadBuilder = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_reverse.actions.ActionUpdatePayloadBuilder

export class ViewContainerReverse extends ViewContainer {
  constructor(componentContext, parentNode, storeReversePublic, action) {
    let id = componentContext.nextID()
    let config = new ViewContainerParameters(componentContext, id, parentNode)

    super(config)
    this.__storeReversePublic = storeReversePublic
    this.__action = action
    this.__createView()
    this.__handleEventFromView()
  }

  __createView() {
    this.view = this.addView(new ViewReverse(this, this.__storeReversePublic))
  }

  __handleEventFromView() {
    this.view._on(
      EventListenerOrderedBuilder
        .listen(UPDATE_EVENT)
        .callback((payload) => {
          let actionBuilder = new ActionUpdatePayloadBuilder()
          let action = actionBuilder.label(payload).build()
          this.__action.dispatch(action)
        })
        .build()
    )
  }
}
