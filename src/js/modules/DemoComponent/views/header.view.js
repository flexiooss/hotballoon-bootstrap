import {
  View,
  selectAttributeHandler as $$
} from 'hotballoon'
import {
  DEMO_ACTIONS,
  DEMO_ACTIONS_CHANGE_STEP
} from '../actions/DemoActions'

import logo
  from '../assets/img/logo.jpg'

class Header extends View {
  view() {
    const el = this.html('header#header.wrapper.bordered.tag', {
      style: {
        textAlign: 'center'
      }
    },
    this.html('img#logo', {
      src: logo
    }),
    this.html('h1#theTitle', 'Hello Flexionaute', {
      title: 'theTitle'
    }),
    this.html(
      'label', 'step :  ',
      this.html('input#stepInput', {
        placeholder: 'step',
        value: this.getProp('step', 1)
      })
    )
    )

    $$(this.nodeRef('stepInput'))
      .on('change', (e) => {
        this.Action(DEMO_ACTIONS).trigger(
          DEMO_ACTIONS_CHANGE_STEP, {
            step: e.target.value
          })
      }, false)
    return el
  }
}

export default Header
