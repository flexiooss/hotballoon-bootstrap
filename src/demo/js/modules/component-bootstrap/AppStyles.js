import {Stylist} from '@flexio-oss/stylist'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {themeAppFlexio} from "@flexio-corp/theme-app-flexio"

const styleSheetMediaAll = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('all')
  .medias(new globalFlexioImport.io.flexio.flex_types.arrays.StringArray('all'))
  .build()

const styleSheetMediaPrint = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('print')
  .medias(new globalFlexioImport.io.flexio.flex_types.arrays.StringArray('print'))
  .build()


export class AppStyles {
  /**
   *
   * @param {LoggerInterface} logger
   */
  constructor(logger) {
    this.__styleHandler = new Stylist(
      logger,
      new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaArrayBuilder()
        .pushValue(styleSheetMediaAll)
        .pushValue(styleSheetMediaPrint)
        .build(),
      false
    )
  }

  /**
   *
   * @return {Stylist}
   */
  stylist() {
    return this.__styleHandler
  }

  /**
   *
   * @param {LoggerInterface} logger
   * @return {ThemeStyle}
   */
  static build(logger) {
    const appStyles = new AppStyles(logger)
    return themeAppFlexio.register(appStyles.stylist())

  }
}
