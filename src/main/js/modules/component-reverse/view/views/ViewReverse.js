import { e, ElementEventListenerBuilder, View } from 'hotballoon'

export const UPDATE_EVENT = 'UPDATE_EVENT'

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
        this.__spanLabel(),
        this.__inputText(),
        this.__inputButton()
      )
    )
  }

  __spanLabel() {
    let label = this.__store.data().label()
    return this.html(
      e('span').text(label)
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
        ).listenEvent(
        ElementEventListenerBuilder.listen('click')
          .callback((event) => {
            this.__updateLabelEvent(event)
          })
          .build()
      )
    )
  }

  __updateLabelEvent(event) {
    const p = this.nodeRef('PLOK').value
    console.dir(p)
    this.dispatch(UPDATE_EVENT, p)
  }
}
