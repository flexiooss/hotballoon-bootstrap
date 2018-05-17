import {
  View,
  selectAttributeHandler as $$
} from 'hotballoon'

import {
  DEMO_ACTIONS,
  DEMO_ACTIONS_INCREMENT,
  DEMO_ACTIONS_DECREMENT
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
    const elements = this.html(
      'main#main.wrapper.tag',
      this.html('button#decrement', '-' + this.getProp('step')),
      this.html('span#curent', this.getProp('demoNumber'), {
        style: {
          fontSize: '50px'
        }
      }),
      this.html('button#increment', '+ ' + this.getProp('step')),
      this.html('div#balloon.balloon', {
        style: {
          position: 'absolute',
          bottom: this.getProp('demoNumber') + 'rem'
        }
      }),
      this._subViews.get('even').render()
    )

    $$(this.nodeRef('increment'))
      .on('click', () => {
        this.Action(DEMO_ACTIONS).trigger(
          DEMO_ACTIONS_INCREMENT, {})
      }, false)

    $$(this.nodeRef('decrement'))
      .on('click', () => {
        this.Action(DEMO_ACTIONS).trigger(
          DEMO_ACTIONS_DECREMENT, {})
      }, false)

    return elements
  }
}

export default Main
