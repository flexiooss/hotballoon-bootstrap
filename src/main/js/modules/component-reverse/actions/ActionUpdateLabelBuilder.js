import { assertType, FLEXIO_IMPORT_OBJECT, isNull } from 'flexio-jshelpers'
import { ActionBuilder, ActionParams, ActionTypeParam, TypeCheck } from 'hotballoon'
import '../generated/io/package'

const ActionUpdatePayload = window[FLEXIO_IMPORT_OBJECT].io.flexio.component_reverse.actions.ActionUpdatePayload

export class ActionUpdateLabelBuilder {
  /**
   *
   * @param {Dispatcher} dispatcher
   */
  constructor(dispatcher) {
    assertType(TypeCheck.isDispatcher(dispatcher),
      'ActionUpdateLabelBuilder:constructor: `dispatcher` should be a Dispatcher'
    )

    this.__dispatcher = dispatcher
  }

  /**
   *
   * @returns {Action<ActionUpdatePayload>}
   */
  init() {
    return ActionBuilder.build(
      new ActionParams(
        new ActionTypeParam(
          ActionUpdatePayload,
          (data) => {
            if (isNull(data.label())) {
              return data.withLabel('')
            }
            return data
          },
          (data) => {
            return true
          }
        ), this.__dispatcher
      )
    )
  }
}
