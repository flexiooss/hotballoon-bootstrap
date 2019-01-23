import {Action, ActionParams, ActionPayload} from 'hotballoon'

const ACTIONS_COUNTER = Symbol('ACTIONS_COUNTER')

/**
 * @extends Action
 */
export class CounterIncrementAction extends Action {
  constructor() {
    super(new ActionParams(ACTIONS_COUNTER, ActionPayload))
  }
}