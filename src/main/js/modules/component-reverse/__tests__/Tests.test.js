import { TestCase } from 'code-altimeter-js'
import { ComponentReverse } from '..'
import { ActionUpdatePayloadBuilder } from '../generated/io/flexio/component_reverse/actions/ActionUpdatePayload'
import { App } from '../../../app/App'
import { AppDispatcher } from '../../../app/AppDispatcher'

const assert = require('assert')

class Tests extends TestCase {
  setUp() {
    this.__APP = new App('CounterApplication', new AppDispatcher())
  }

  testReverse() {
    let component = new ComponentReverse(this.__APP.addComponentContext(), { 'nodeType': 1 })
    let action = new ActionUpdatePayloadBuilder().label('plok').build()

    // Check store empty
    let data = component.getPublicStore().data()
    assert.strictEqual(data.label(), '')

    component.getAction().dispatch(action)

    // Check store updated
    data = component.getPublicStore().data()
    assert.strictEqual(data.label(), 'kolp')
  }
}

runTest(Tests)
