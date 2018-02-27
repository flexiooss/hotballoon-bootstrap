import {
  View
} from 'hotballoon'

class Header extends View {
  view() {
    const header = document.createElement('header')
    const h1 = this.addNodeRef('h1', document.createElement('h1'))
    h1.textContent = 'hello  ' + this.getProp('suffix')

    header.appendChild(h1)

    return header
  }

  update() {
    this.nodeRef('h1').textContent = 'hello  ' + this.getProp('suffix')
  }
}

export default Header
