import {isNode, assertType} from 'flexio-jshelpers'
import {ComponentCounterBuilder} from '../../../component-counter'
import {TypeCheck} from 'hotballoon'

export class ListenActionInitializeParam {
  /**
   *
   * @param {Action<ActionInitialize>} action
   * @param {HotBalloonApplication} application
   * @param {Element} parentElement
   */
  constructor(action, application, parentElement) {
    assertType(TypeCheck.isAction(action),
      'ComponentBootstrap:ListenActionInitializeParam: `action` argument should be an Action'
    )
    assertType(TypeCheck.isHotballoonApplication(application),
      'ComponentBootstrap:ListenActionInitializeParam: `application` should be a HotBalloonApplication'
    )
    assertType(isNode(parentElement),
      'ComponentBootstrap:ListenActionInitializeParam: `parentElement` should be an Element'
    )
    this._action = action
    this._application = application
    this._parentElement = parentElement
  }

  /**
   *
   * @return {Action<ActionInitialize>}
   */
  get action() {
    return this._action
  }

  /**
   *
   * @return {HotBalloonApplication}
   */
  get application() {
    return this._application
  }

  /**
   *
   * @return {Element}
   */
  get parentElement() {
    return this._parentElement
  }
}

/**
 *
 * @param {ListenActionInitializeParam} param
 */
export const listenActionInitialize = (param) => {
  assertType(param instanceof ListenActionInitializeParam,
    'ComponentBootstrap:listenActionInitialize: `listenActionInitializeParam` should be a ListenActionInitializeParam'
  )

  param.action.listenWithCallback(
    /**
     *
     * @param {ActionInitialize} payload
     */
    (payload) => {
      ComponentCounterBuilder
        .buildSimpleWithMessage(payload.message(), param.application, param.parentElement)
        .initAndMount()
    }
  )
}
