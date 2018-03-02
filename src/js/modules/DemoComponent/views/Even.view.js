import {
  View
} from 'hotballoon'

class Even extends View {
  constructor(id, viewContainer, props) {
    super(id, viewContainer, props)
    this._privateState.set('even', this.getProp('demoNumber'))

    this.onPropsChanged = (oldProps) => {
      /**
       * Abort automatic node Reconciliation for : STATE_CHANGE
       * well played it's more optimized
       */
      this._shouldUpdate = false

      if (oldProps.demoNumber !== this.getProp('demoNumber')) {
        console.log('DemoComponent:View:Even will onPropsChange')
        /**
         * play with _privateState
         */
        this._setPrivateStateProp(
          'even',
          (this.getProp('demoNumber') % 2 === 0) ? this.getProp('demoNumber') : this.getProp('demoNumber') - 1
        )

        /**
         * Abort automatic node Reconciliation for : PROPS_CHANGE
         * well played it's more optimized
         */
        this._shouldUpdate = false
      }
    }

    this.onStateChanged = () => {
      console.log('DemoComponent:View:Even will onStateChanged')
      this.nodeRef('h5').innerHTML = this._formatTitle()
    }
  }

  view() {
    return this.html('div#evenContainer.wrapper.bordered.tag', {
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
    return `Do you like only even number ? (${this._getPrivateStateProp('even')})`
  }
}

export default Even
