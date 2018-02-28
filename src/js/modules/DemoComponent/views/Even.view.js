import {
  View
} from 'hotballoon'

class Even extends View {
  constructor(id, viewContainer, props) {
    super(id, viewContainer, props)
    this._privateState.set('even', this.getProp('demoNumber'))

    this.onUpdate = () => {
      console.log('DemoComponent:View:Even will updated')

      /**
       * play with _privateState
       */
      this._privateState.set('even', (this.getProp('demoNumber') % 2 === 0) ? this.getProp('demoNumber') : this.getProp('demoNumber') - 1)

      this.nodeRef('h5').innerHTML = this._formatTitle()

      /**
       * Abort automatic node Reconciliation : well played it's more optimized
       */
      this._shouldUpdate = false
    }
  }

  view() {
    return this.html('div#evenContainer.wrapper.bordered', {
      style: {
        textAlign: 'center'
      }
    },
    this.html('h5#Even', this._formatTitle(), {
      title: 'theTitle',
      nodeRef: 'h5'
    }))
  }

  _formatTitle() {
    return `Do you like only even number ? (${this._privateState.get('even')})`
  }
}

export default Even
