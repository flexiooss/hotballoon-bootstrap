import {
  View,
  selectAttributeHandler as $$
} from 'hotballoon'
import {
  ACTION_DEMO as ACTION_DEMO_KEY
} from '../component/_KEYS'

import {
  CHANGE_STEP as ACTION_DEMO_CHANGE_STEP
} from '../actions/DemoActions'

import logo
  from '../assets/img/logo.jpg'

class Header extends View {
  view() {
    const ACTION_DEMO = this.Action(ACTION_DEMO_KEY)

    const el = this.html('header#header.wrapper.bordered.tag', {
      style: {
        textAlign: 'center'
      }
    },
    this.html('img#logo', {
      src: logo
    }),
    this.html('h1#theTitle', 'Hello Flexionaute', {
      title: 'theTitle',
      nodeRef: 'h1'
    }),
    this.html(
      'label', 'step :  ',
      this.html('input#stepInput', {
        nodeRef: 'stepInput',
        placeholder: 'step',
        value: this.getProp('step', 1)
      })
    )
    )

    $$(this.nodeRef('stepInput'))
      .on('change', (e) => {
        this.newAction(
          ACTION_DEMO,
          ACTION_DEMO_CHANGE_STEP, {
            step: e.target.value
          })
      }, false)
    return el
  }
}

export default Header
