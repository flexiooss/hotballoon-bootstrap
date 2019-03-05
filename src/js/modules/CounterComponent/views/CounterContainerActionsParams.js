import {TypeCheck} from 'hotballoon'

/**
 */
export class CounterContainerActionsParams   {
  /**
   *
   * @param {Action.<CounterIncrementAction>} counterIncrementAction
   */
  constructor(counterIncrementAction) {
    this.__counterIncrementAction = TypeCheck.assertIsAction(counterIncrementAction)
  }

  /**
   *
   * @return {Action.<CounterIncrementAction>}
   */
  get counterIncrementAction() {
    return this.__counterIncrementAction
  }
}
