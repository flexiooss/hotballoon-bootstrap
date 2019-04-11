import { ViewContainer, ViewContainerParameters } from 'hotballoon'
import { ViewReverse } from './views/ViewReverse'
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
  }

  __createView() {
    this.view = this.addView(new ViewReverse(this, this.__storeReversePublic))
  }
}
