import { e, ElementEventListenerBuilder, EventListenerOrderedBuilder, View, ViewPublicEventHandler } from 'hotballoon'

export const UPDATE_EVENT = 'UPDATE_EVENT'

export class ViewReverse extends View {
  constructor(viewContainer, storeReversePublic) {
    super(viewContainer)

    this.__store = storeReversePublic
    this.subscribeToStore(this.__store)
  }

  on() {
    return new ViewReverseEvent((a) => {
      return this._on(a)
    })
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

class ViewReverseEvent extends ViewPublicEventHandler {
  reverseEvent(clb) {
    return this._subscriber(
      EventListenerOrderedBuilder
        .listen(UPDATE_EVENT)
        .callback((payload) => {
          clb(payload)
        })
        .build()
    )
  }
}
