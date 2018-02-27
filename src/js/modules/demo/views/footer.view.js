import {
  View
} from 'hotballoon'

class Footer extends View {
  view() {
    const p = this.addNodeRef('p', document.createElement('p'))

    var element = document.createElement('footer')

    this.addText(p)
    element.appendChild(p)
    return element
  }
  update() {
    this.addText(this.nodeRef('p'))
  }
  addText(element) {
    element.textContent = (this.getProp('suffix')) ? 'Youre last think was :' + this.getProp('suffix') : ''
  }
}

export default Footer
