import {TypeCheck} from 'hotballoon'

/**
 */
export class ContainerActionCounter {
  /**
   *
   * @param {Action.<ActionIncrementCounter>} counterIncrementAction
   */
  constructor(counterIncrementAction) {
    this.__counterIncrementAction = TypeCheck.assertIsAction(counterIncrementAction)
  }

  /**
   *
   * @return {Action.<ActionIncrementCounter>}
   */
  get counterIncrementAction() {
    return this.__counterIncrementAction
  }
}
