import { assert, isNumber, isNull, deepFreezeSeal } from 'flexio-jshelpers' 

class StoreCounter {

    /**
    * @param {number} count
    * @private
    */
    constructor ( count ){
        this._count = count;
        deepFreezeSeal( this );
    }
    /**
    * @returns {number}
    */
    count() {
        return this._count;
    }
    /**
    * @param { number } count
    */
    withCount( count ) {
        var builder = StoreCounterBuilder.from( this );
        builder.count( count);
        return builder.build();
    }
    toObject() {
        var jsonObject = {};
        if( this._count != undefined ){
            jsonObject["count"] = this._count;
        }
        return jsonObject;
    }
    /**
    * @returns {object}
    */
    toJSON() {
        return this.toObject();
    }
}
export { StoreCounter}

class StoreCounterBuilder {
    /**
    * @constructor
    */
    constructor(){
        this._count = null;
    }
    /**
    * @param { number } count
    * @returns {StoreCounterBuilder}
    */
    count( count ) {
        if( !isNull( count )){
            assert( isNumber( count ), 'count should be a number' );
        }
        this._count = count;
        return this;
    }
    /**
    * @returns {StoreCounter}
    */
    build(){
        return new StoreCounter(this._count)
    }
    /**
    * @param {object} jsonObject
    * @returns {StoreCounterBuilder}
    */
    static fromObject( jsonObject ) {
        var builder = new StoreCounterBuilder()
        if( jsonObject["count"] !== undefined ){
            builder.count( parseInt(jsonObject['count']));
        }
        return builder;
    }
    /**
    * @param {string} json
    * @returns {StoreCounterBuilder}
    */
    static fromJson( json ){
        var jsonObject = JSON.parse( json );
        return this.fromObject( jsonObject );
    }
    /**
    * @param {StoreCounter} instance
    * @returns {StoreCounterBuilder}
    */
    static from( instance ){
        var builder = new StoreCounterBuilder();
        builder.count( instance.count() );
        return builder;
    }
}
export { StoreCounterBuilder}
