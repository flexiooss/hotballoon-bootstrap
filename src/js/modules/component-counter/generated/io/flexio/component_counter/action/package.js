import{ FLEXIO_IMPORT_OBJECT, deepKeyAssigner } from 'flexio-jshelpers'
import {ActionIncrementCounter, ActionIncrementCounterBuilder} from "./ActionIncrementCounter";

/**
* @property {ActionIncrementCounter} window.FLEXIO_IMPORT_OBJECT.io.flexio.component_counter.action.ActionIncrementCounter
*/
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.component_counter.action.ActionIncrementCounter' ,ActionIncrementCounter );
/**
* @property {ActionIncrementCounterBuilder} window.FLEXIO_IMPORT_OBJECT.io.flexio.component_counter.action.ActionIncrementCounterBuilder
*/
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.component_counter.action.ActionIncrementCounterBuilder' ,ActionIncrementCounterBuilder );

