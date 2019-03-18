import {deepFreezeSeal} from 'flexio-jshelpers'

class AppInitializedAction {
  /**
   * @param {string} message
   * @private
   */
  constructor(message) {
    this._message = message
    deepFreezeSeal(this)
  }

  /**
   * @returns {string}
   */
  message() {
    return this._message
  }

  /**
   * @param { string } message
   */
  withMessage(message) {
    var builder = AppInitializedActionBuilder.fromObject(this.toObject())
    builder.message(message)
    return builder.build()
  }

  /**
   * @return {Object}
   */
  toObject() {
    var jsonObject = {}
    if (this._message !== undefined) {
      jsonObject['message'] = this._message
    }
    return jsonObject
  }

  /**
   * @return {string}
   */
  toJSON() {
    return JSON.stringify(this.toObject())
  }
}

export {AppInitializedAction}

class AppInitializedActionBuilder {
  /**
   * @constructor
   */
  constructor() {
    this._message = null
  }

  /**
   * @param { string } message
   */
  message(message) {
    this._message = message
    return this
  }

  /**
   * @returns {AppInitializedAction}
   */
  build() {
    return new AppInitializedAction(this._message)
  }

  /**
   * @param {object} jsonObject
   * @returns {AppInitializedActionBuilder}
   */
  static fromObject(jsonObject) {
    var builder = new AppInitializedActionBuilder()
    if (jsonObject['message'] !== undefined) {
      builder.message(jsonObject['message'])
    }
    return builder
  }

  /**
   * @param {string} json
   * @returns {AppInitializedActionBuilder}
   */
  static fromJson(json) {
    var jsonObject = JSON.parse(json)
    return this.fromObject(jsonObject)
  }
}

export {AppInitializedActionBuilder}
