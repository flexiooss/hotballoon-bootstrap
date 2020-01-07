import {Stylist} from '@flexio-oss/stylist'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {AppStylesConfig} from './AppStylesConfig'

const styleSheetMediaAll = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('all')
  .medias(new globalFlexioImport.io.flexio.flex_types.arrays.StringArray('all'))
  .build()

const styleSheetMediaPrint = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('print')
  .medias(new globalFlexioImport.io.flexio.flex_types.arrays.StringArray('print'))
  .build()


class Color extends globalFlexioImport.io.flexio.stylist.types.Style {
  constructor() {
    super()

    this._addStyleRules(
      this._cssBuilder([this.colorAlert()])
        .styleSheetMediaRules(
          styleSheetMediaAll,
          {
            'color': 'red',
            'background-color': 'black',
          }
        ).styleSheetMediaRules(
        styleSheetMediaPrint,
        {
          'color': 'red'
        }
        )
        .build()
      ,
      this._cssBuilder([this.colorInfo()])
        .styleSheetMediaRules(
          styleSheetMediaAll,
          {
            'color': 'blue',
            'background-color': 'red',
          }
        ).styleSheetMediaRules(
        styleSheetMediaPrint,
        {
          'color': 'blue'
        }
        )
        .build()
    )
  }

  colorAlert() {
    return this._selector('.color-main')
  }

  colorInfo() {
    return this._selector('.color-info')
  }
}


class Border extends globalFlexioImport.io.flexio.stylist.types.Style {
  constructor() {
    super()

    this._addStyleRules(
      this._cssBuilder([this.borderLight()])
        .styleSheetMediaRules(
          styleSheetMediaAll,
          {
            'color': 'red',
            'background-color': 'pink',
          }
        ).styleSheetMediaRules(
        styleSheetMediaPrint,
        {
          'color': 'red',
          'background-color': 'black',
        }
        )
        .build()
      ,
      this._cssBuilder([this.color2()])
        .styleSheetMediaRules(
          styleSheetMediaAll,
          {
            'color': 'blue',
            'background-color': '#ef3d8d',
          }
        )
        .styleSheetMediaRules(
          styleSheetMediaPrint,
          {
            'color': 'red',
            'background-color': 'pink',
          }
        )
        .build()
    )
  }

  borderLight() {
    return this._selector('.color')
  }

  color2() {
    return this._selector('.color-2')
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
        .build(),
      false
    )
  }

  /**
   *
   * @param {Style} style
   * @return {Style}
   */
  register(style) {
    return this.__styleHandler.register(style)
  }

  /**
   *
   * @param {LoggerInterface} logger
   * @return {AppStylesConfig}
   */
  static build(logger) {
    const appStyles = new AppStyles(logger)

    return new AppStylesConfig(
      appStyles.register(new Color()),
      appStyles.register(new Border()))
  }
}
