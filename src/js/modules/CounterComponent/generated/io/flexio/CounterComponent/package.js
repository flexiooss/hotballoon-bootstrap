import{ FLEXIO_IMPORT_OBJECT, deepKeyAssigner } from 'flexio-jshelpers'
import {CounterStore, CounterStoreBuilder} from "./CounterStore";
import {CounterIncrementAction, CounterIncrementActionBuilder} from "./CounterIncrementAction";

/**
 * @property {CounterStore} window.FLEXIO_IMPORT_OBJECT.io.flexio.CounterComponent.CounterStore
 */
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.CounterComponent.CounterStore' ,CounterStore );
/**
 * @property {CounterStoreBuilder} window.FLEXIO_IMPORT_OBJECT.io.flexio.CounterComponent.CounterStoreBuilder
 */
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.CounterComponent.CounterStoreBuilder' ,CounterStoreBuilder );
/**
 * @property {CounterIncrementAction} window.FLEXIO_IMPORT_OBJECT.io.flexio.CounterComponent.CounterIncrementAction
 */
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.CounterComponent.CounterIncrementAction' ,CounterIncrementAction );
/**
 * @property {CounterIncrementActionBuilder} window.FLEXIO_IMPORT_OBJECT.io.flexio.CounterComponent.CounterIncrementActionBuilder
 */
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.CounterComponent.CounterIncrementActionBuilder' ,CounterIncrementActionBuilder );

