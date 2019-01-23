import {
  View,
  HtmlParams,
  ViewParameters,
  ViewStoresParameters,
  NodeEventListenerFactory
} from 'hotballoon'

export const INCREMENT_EVENT = 'INCREMENT_EVENT'

const COUNT_STORE = 'COUNT_STORE'

export default class Main extends View {
  /**
   *
   * @param {ViewParameters} viewParameters
   * @param {MainStores} mainStores
   */
  constructor(viewParameters, mainStores) {
    super(viewParameters, mainStores)
    this.suscribeToStore(COUNT_STORE)
  }

  /**
   *
   * @return {Node}
   */
  view() {
    return this.html(
      'main#main.toto', HtmlParams.withChildNodes(
        this.html(
          'div', HtmlParams.withChildNodes([
            this.html('span#Counter.counter', HtmlParams.withText(this._addCounter())),
            this.html('input#increment.increment',
              HtmlParams
                .withAttributes(
                  { value: 'Inc', type: 'button' })
                .addEventListener(
                  NodeEventListenerFactory.listen('click')
                    .callback((e) => {
                      this.dispatch(INCREMENT_EVENT, null)
                    })
                    .build())
            )
          ])
        )
      )
    )
  }

  /**
   *
   * @private
   */
  _addCounter() {
    const data = this.stateValue(COUNT_STORE)
    console.log(this)
    console.log(data)

    if (data.count) {
      return data.count
    } else {
      return 'counter not found'
    }
  }
}

export class MainStores extends ViewStoresParameters {
  /**
   *
   * @param {PipelineStore} pipelineStore
   * @param {StagesStore} stagesStore
   * @param {LogsStore} logsStore
   * @param {SelectedPipelineStore} selectedPipelineStore
   */
  constructor(countStore) {
    super()
    this.setStore(COUNT_STORE, countStore)
  }
}
