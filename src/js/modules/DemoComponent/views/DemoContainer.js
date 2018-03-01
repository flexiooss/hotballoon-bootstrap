import {
  ViewContainer,
  Store
} from 'hotballoon'

import Header from './header.view'
import Main from './main.view'
import Footer from './footer.view'

import '../assets/css/style_1.css'
import '../assets/css/style_2.css'

import {
  DEMO_STORE
} from '../component/_KEYS'

const STORE_CHANGED = Store.eventType('CHANGED')

/**
 * Container of view for the demo
 * @extends ViewContainer
 */
export class DemoContainer extends ViewContainer {
  registerViews(nav) {
    const demoStore = this.Store(this.storesKey.get(DEMO_STORE))

    this.addView(new Header('Header', this, demoStore.state()), demoStore._ID, STORE_CHANGED)
    this.addView(new Main('Main', this, demoStore.state()), demoStore._ID, STORE_CHANGED)
    this.addView(new Footer('Footer', this, demoStore.state()))
  }
}
