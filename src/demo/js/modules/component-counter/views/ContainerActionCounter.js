import { TypeCheck } from '@flexio-oss/hotballoon'

/**
 */
export class ContainerActionCounter {
  /**
   *
   * @param {Action.<ActionIncrementCounter>} counterIncrementAction
   */
  constructor(counterIncrementAction) {
    this.__counterIncrementAction = TypeCheck.assertIsActionDispatcher(counterIncrementAction)
  }

  /**
   *
   * @return {Action.<ActionIncrementCounter>}
   */
  get counterIncrementAction() {
    return this.__counterIncrementAction
  }
}
