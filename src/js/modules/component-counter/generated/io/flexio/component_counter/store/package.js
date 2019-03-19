import{ FLEXIO_IMPORT_OBJECT, deepKeyAssigner } from 'flexio-jshelpers'
import {StoreCounter, StoreCounterBuilder} from "./StoreCounter";

/**
* @property {StoreCounter} window.FLEXIO_IMPORT_OBJECT.io.flexio.component_counter.store.StoreCounter
*/
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.component_counter.store.StoreCounter' ,StoreCounter );
/**
* @property {StoreCounterBuilder} window.FLEXIO_IMPORT_OBJECT.io.flexio.component_counter.store.StoreCounterBuilder
*/
deepKeyAssigner( window[FLEXIO_IMPORT_OBJECT], 'io.flexio.component_counter.store.StoreCounterBuilder' ,StoreCounterBuilder );

