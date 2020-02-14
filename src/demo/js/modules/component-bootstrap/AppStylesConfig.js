export class AppStylesConfig {
  /**
   *
   * @param {Color} color
   * @param {Border} border
   */
  constructor(color, border) {
    /**
     *
     * @type {Color}
     * @private
     */
    this.__color = color
    /**
     *
     * @type {Border}
     * @private
     */
    this.__border = border
  }

  /**
   *
   * @return {Color}
   */
  get color() {
    return this.__color
  }

  /**
   *
   * @return {Border}
   */
  get border() {
    return this.__border
  }
}
