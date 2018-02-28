import {
  View
} from 'hotballoon'
import * as demoComponentPackage
  from '../package.json'

class Footer extends View {
  view() {
    return this.html('footer#cestLePied.wrapper', 'DemoComponent version : ' + demoComponentPackage.version)
  }
}

export default Footer
