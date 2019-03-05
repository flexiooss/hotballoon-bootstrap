class Toto {
  constructor() {
    this._tutu = null
  }

  get tutu() {
    return this._tutu
  }
}

const t = new Toto()
// t._tutu = 'bb'
t.tutu = 'bibi'

/**
 * @type {StoreB.<T>}
 */
class StoreB {
  /**
   *
   * @param {Class.<T>} type
   * @param {T} data
   */
  constructor(type, data) {
    this._type = type
    this._data = data
  }

  /**
   *
   * @return {T}
   */
  get data() {
    return this._data
  }
}

const stores = new StoreB(Toto)

console.assert(stores._type === Toto)
console.assert(stores._type === t.constructor)
console.log(stores._type)
console.dir(stores._type)
console.assert(stores._type.prototype.hasOwnProperty('tutu'))
console.log(t)
console.dir({toto: 'titi'})
