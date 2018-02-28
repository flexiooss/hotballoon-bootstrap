import {
  View
} from 'hotballoon'
import logo
  from '../assets/img/logo.jpg'

class Header extends View {
  constructor(id, viewContainer, props) {
    super(id, viewContainer, props)
    this._privateState.set('even', this.getProp('demoNumber'))

    this.onUpdate = () => {
      console.log('DemoComponent:View:Header will updated')

      /**
       * play with _privateState
       */
      this._privateState.set('even', (this.getProp('demoNumber') % 2 === 0) ? this.getProp('demoNumber') : this.getProp('demoNumber') - 1)

      this.nodeRef('h1').innerHTML = this._formatTitle()

      /**
       * Abort automatic node Reconciliation : well played it's more optimized
       */
      this._shouldUpdate = false
    }
  }

  view() {
    return this.html('header#header.wrapper.bordered', {
      style: {
        textAlign: 'center'
      }
    },
    this.html('img#logo', {
      src: logo
    }),
    this.html('h1#theTitle', this._formatTitle(), {
      title: 'theTitle',
      nodeRef: 'h1'
    }))
  }

  _formatTitle() {
    return `Hello Flexionaute, do you like only even number ? (${this._privateState.get('even')})`
  }
}

export default Header
