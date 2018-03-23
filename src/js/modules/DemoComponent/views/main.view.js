import {
  View,
  selectAttributeHandler as $$
} from 'hotballoon'

import {
  ACTION_DEMO as ACTION_DEMO_KEY
} from '../component/_KEYS'

import {
  INCREMENT as ACTION_DEMO_INCREMENT,
  DECREMENT as ACTION_DEMO_DECREMENT
} from '../actions/DemoActions'

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
    const ACTION_DEMO = this.Action(ACTION_DEMO_KEY)

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
          ACTION_DEMO,
          ACTION_DEMO_INCREMENT, {})
      }, false)
    $$(this.nodeRef('decrementButton'))
      .on('click', () => {
        this.newAction(
          ACTION_DEMO,
          ACTION_DEMO_DECREMENT, {})
      }, false)

    return elements
  }
}

export default Main
