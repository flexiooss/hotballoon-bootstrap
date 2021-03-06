/* global runTest */
import {TestCase} from 'code-altimeter-js'

const assert = require('assert')

class TestExampleTest extends TestCase {
  testFirstThink() {
    assert.ok(true, 'Test should pass if you don\'t touch this method')
  }

  testSecondThink() {
    assert.throws(() => {
      throw Error('Learn more : https://github.com/flexiooss/code-altimeter-js')
    },
    'Ah ah !!!')
  }

  static beforeClass() {
    console.log('Shutdown your phone : the test begins')
  }

  static afterClass() {
    console.log('You can take your normal life')
  }

  setUp() {
    console.log('Sir yes Sir !!!')
  }

  tearDown() {
    console.log('So short !!!')
  }
}

runTest(TestExampleTest)
