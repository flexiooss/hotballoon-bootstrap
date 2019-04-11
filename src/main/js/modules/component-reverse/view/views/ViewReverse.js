import { e, View } from 'hotballoon'

export class ViewReverse extends View {
  constructor(viewContainer, storeReversePublic) {
    super(viewContainer)

    this.__store = storeReversePublic
    this.subscribeToStore(this.__store)
  }

  template() {
    return this.__div()
  }

  __div() {
    return this.html(
      e('div').childNodes(
        this.__inputText(),
        this.__inputButton(),
        this.__spanLabel()
      )
    )
  }

  __spanLabel() {
    let label = this.__store.data().label()
    return this.html(
      e('p').text('Inversé : ' + label)
    )
  }

  __inputText() {
    return this.html(
      e('input#PLOK')
        .properties(
          { value: 'toto', placeholder: 'label', type: 'text' }
        )
    )
  }

  __inputButton() {
    return this.html(
      e('input')
        .attributes(
          { value: 'maj', type: 'button' }
        )
    )
  }
}
