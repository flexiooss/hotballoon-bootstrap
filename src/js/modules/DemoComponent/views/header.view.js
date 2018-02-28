import {
  View
} from 'hotballoon'
import logo
  from '../assets/img/logo.jpg'

class Header extends View {
  view() {
    return this.html('header#header.wrapper.bordered', {
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
    }))
  }
}

export default Header
