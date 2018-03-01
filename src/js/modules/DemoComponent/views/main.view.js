import {
  View,
  selectAttributeHandler as $$
} from 'hotballoon'

import {
  ACTION_DEMO
} from '../component/_KEYS'

import Even from './Even.view'

class Main extends View {
  constructor(id, viewContainer, props) {
    super(id, viewContainer, props)
    this.onUpdate = () => {
      console.log('DemoComponent:View:Main will updated')
    }
    this.registerSubView('even', new Even('even', this.ViewContainer(), props))
  }

  view() {
    const elements = this.html(
      'main#main.wrapper.tag',
      this.html('button#decrement', '-' + this.getProp('step'), {
        nodeRef: 'decrementButton'
      }),
      this.html('span#curent', this.getProp('demoNumber'), {
        style: {
          fontSize: '50px'
        }
      }),
      this.html('button#increment', '+ ' + this.getProp('step'), {
        nodeRef: 'incrementButton'
      }),
      this.html('div#balloon', {
        style: {
          position: 'absolute',
          bottom: this.getProp('demoNumber') + 'rem'
        }
      }),
      this._subViews.get('even').render()
    )

    $$(this.nodeRef('incrementButton'))
      .on('click', () => {
        this.newAction(
          this.Action(ACTION_DEMO),
          this.Action(ACTION_DEMO).type('INCREMENT'), {})
      }, false)
    $$(this.nodeRef('decrementButton'))
      .on('click', () => {
        this.newAction(
          this.Action(ACTION_DEMO),
          this.Action(ACTION_DEMO).type('DECREMENT'), {})
      }, false)

    return elements
  }
}

export default Main
