import {
  ViewContainer,
  Store
} from 'hotballoon'

import Header from './header.view'
import Nav from './nav.view'
import Main from './main.view'
import Footer from './footer.view'

import {
  constantes as C
} from '../component/constantes'

const STORE_CHANGED = Store.eventType('CHANGED')
/**
 * Container of view for totolist
 * @extends ViewContainer
 */

export class DemoContainer extends ViewContainer {
  registerViews(nav) {
    var appStore = this.Store(this.storesKey.get(C.STORE_ID__APP))
    this.addView(new Header('Header', this, appStore.state()), appStore._ID, STORE_CHANGED)
    this.addView(new Nav('Nav', this, nav))
    this.addView(new Main('Main', this, appStore.state()), appStore._ID, STORE_CHANGED)
    this.addView(new Footer('Footer', this, appStore.state()), appStore._ID, STORE_CHANGED)
  }
}
