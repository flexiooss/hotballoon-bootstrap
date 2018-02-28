import {
  View,
  selectAttributeHandler as $$
} from 'hotballoon'
import {
  ACTION_DEMO
} from '../component/_KEYS'

class Main extends View {
  constructor(id, viewContainer, props) {
    super(id, viewContainer, props)
    // this._privateState.set('even', 0)

    this.onUpdate = () => {
      console.log('DemoComponent:View:Main will updated')
      // this._privateState.set('incr', (Myclass % 2 === 0) ? Myclass : Myclass - 1)
    }
  }

  view() {
    const elements = this.html(
      'main#main.wrapper',
      this.html('div#buttonContainer',
        this.html('span#curent', this.getProp('demoNumber'), {
          style: {
            fontSize: '50px'
          }
        }),
        this.html('button#increment', '+1', {
          nodeRef: 'incrementButton'
        }),
        this.html('button#decrement', '-1', {
          nodeRef: 'decrementButton'
        })
      )
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
