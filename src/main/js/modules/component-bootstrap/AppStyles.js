import {Stylist} from '@flexio-oss/stylist'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {AppStylesConfig} from './AppStylesConfig'

const styleSheetMediaAll = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('all')
  .medias(
    new globalFlexioImport.io.flexio.extended_flex_types.StringArrayBuilder()
      .pushValue('all')
      .build()
  )
  .build()

const styleSheetMediaPrint = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('print')
  .medias(
    new globalFlexioImport.io.flexio.extended_flex_types.StringArrayBuilder()
      .pushValue('print')
      .build()
  )
  .build()

class Color extends globalFlexioImport.io.flexio.stylist.types.Style {

  get colorAlert() {
    return this._css('.color-main')
      .rule(
        styleSheetMediaAll,
        {
          'color': 'red',
          'background-color': 'black',
        }
      ).rule(
        styleSheetMediaPrint,
        {
          'color': 'red'
        }
      )
      .build()
  }

  get colorInfo() {
    return this._css('.color-info')
      .rule(
        styleSheetMediaAll,
        {
          'color': 'blue',
          'background-color': '#c1efdb',
        }
      )
      .rule(
        styleSheetMediaPrint,
        {
          'color': 'blue'
        }
      )
      .build()
  }
}

class Border extends globalFlexioImport.io.flexio.stylist.types.Style {

  get borderLight() {
    return this._css('.color')
      .rule(
        styleSheetMediaAll,
        {
          'color': 'red',
          'background-color': 'pink',
        }
      ).rule(
        styleSheetMediaPrint,
        {
          'color': 'red',
          'background-color': 'black',
        }
      )
      .build()
  }

  get color2() {
    return this._css('.color-2')
      .rule(
        styleSheetMediaAll,
        {
          'color': 'blue',
          'background-color': '#ef3d8d',
        }
      )
      .rule(
        styleSheetMediaPrint,
        {
          'color': 'red',
          'background-color': 'pink',
        }
      )
      .build()
  }
}

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
        .build()
    )
  }

  /**
   *
   * @param {LoggerInterface} logger
   * @return {AppStylesConfig}
   */
  static build(logger) {
    const appStyles = new AppStyles(logger)

    return new AppStylesConfig(
      appStyles.__styleHandler.register(
        new Color()
      ),
      appStyles.__styleHandler.register(
        new Border())
    )
  }
}
