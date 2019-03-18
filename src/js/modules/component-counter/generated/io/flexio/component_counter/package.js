import{ FLEXIO_IMPORT_OBJECT, deepKeyAssigner } from 'flexio-jshelpers'
import {StoreCounter, StoreCounterBuilder} from "./StoreCounter";
import {ActionIncrementCounter, ActionIncrementCounterBuilder} from "./ActionIncrementCounter";

/**
 * @property {StoreCounter} window.FLEXIO_IMPORT_OBJECT.io.flexio.component_counter.StoreCounter
 */
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.component_counter.StoreCounter', StoreCounter );

/**
 * @property {StoreCounterBuilder} window.FLEXIO_IMPORT_OBJECT.io.flexio.component_counter.StoreCounterBuilder
 */
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.component_counter.StoreCounterBuilder' ,StoreCounterBuilder );

/**
 * @property {ActionIncrementCounter} window.FLEXIO_IMPORT_OBJECT.io.flexio.component_counter.ActionIncrementCounter
 */
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.component_counter.ActionIncrementCounter' ,ActionIncrementCounter );

/**
 * @property {ActionIncrementCounterBuilder} window.FLEXIO_IMPORT_OBJECT.io.flexio.component_counter.ActionIncrementCounterBuilder
 */
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.component_counter.ActionIncrementCounterBuilder' ,ActionIncrementCounterBuilder );

