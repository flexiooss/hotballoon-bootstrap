import {
  View,
  selectAttributeHandler as $$
} from 'hotballoon'

class Main extends View {
  constructor(id, viewContainer, props) {
    super(id, viewContainer, props)
    this._privateState.set('incr', 5)

    this.onUpdate = () => {
      console.log('onUpdate')
      this._privateState.set('incr', this._privateState.get('incr') + 1)
    }
  }

  view() {
    const elements = this.html(
      'main#main',
      this.html('div#buttonContainer',
        this.html('button#increment', 'click me !!', {
          nodeRef: 'incrmentButton'
        })
      )
    )

    $$(this.nodeRef('incrmentButton'))
      .on('click', () => {
        if (input.value) {
          let action = this.Action('ListTodoListActions')
          this.newAction(action, action.type('ADD_LIST'), {
            title: input.value
          })
          input.value = ''
        } else {
          window.alert('ET LE TiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiTRE !!!')
        }
      }, false)

    return elements
  }
}

export default Main
