import {
  View,
  selectAttributeHandler as $$
} from 'hotballoon'
import {
  ACTION_DEMO
} from '../component/_KEYS'

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
          this.Action(ACTION_DEMO),
          this.Action(ACTION_DEMO).type('CHANGE_STEP'), {
            step: e.target.value
          })
      }, false)
    return el
  }
}

export default Header
