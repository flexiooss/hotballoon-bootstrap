import { deepFreezeSeal } from 'flexio-jshelpers' 

class CounterStore {

    /**
    @param {number}
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
        var builder = CounterStoreBuilder.fromObject( this.toObject() );
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
    * @return object
    */
    toJSON() {
        return this.toObject();
    }
}
export { CounterStore}

class CounterStoreBuilder {
    /**
    * @constructor
    */
    constructor(){
        this._count = null;
    }
    /**
    * @param { number } count
    */
    count( count ) {
        this._count = count;
        return this;
    }
    /**
    * @returns {CounterStore}
    */
    build(){
        return new CounterStore(this._count)
    }
    /**
    * @param {object} jsonObject
    * @returns {CounterStore}
    */
    static fromObject( jsonObject ) {
        var builder = new CounterStoreBuilder()
        if( jsonObject["count"] != undefined ){
            builder.count( parseInt(jsonObject['count']));
        }
        return builder;
    }
    /**
    * @param {string} json
    * @returns {CounterStore}
    */
    static fromJson( json ){
        var jsonObject = JSON.parse( json );
        return this.fromObject( jsonObject );
    }
}
export { CounterStoreBuilder}
