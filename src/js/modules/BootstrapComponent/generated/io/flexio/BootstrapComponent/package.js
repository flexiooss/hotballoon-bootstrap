import {FLEXIO_IMPORT_OBJECT, deepKeyAssigner} from 'flexio-jshelpers'
import {AppInitializedAction, AppInitializedActionBuilder} from './AppInitializedAction'

/**
 * @property {AppInitializedAction} window.FLEXIO_IMPORT_OBJECT.io.flexio.BootstrapComponent.AppInitializedAction
 */
deepKeyAssigner(window[FLEXIO_IMPORT_OBJECT], 'io.flexio.BootstrapComponent.AppInitializedAction', AppInitializedAction)
/**
 * @property {AppInitializedActionBuilder} window.FLEXIO_IMPORT_OBJECT.io.flexio.BootstrapComponent.AppInitializedActionBuilder
 */
deepKeyAssigner(window[FLEXIO_IMPORT_OBJECT], 'io.flexio.BootstrapComponent.AppInitializedActionBuilder', AppInitializedActionBuilder)
