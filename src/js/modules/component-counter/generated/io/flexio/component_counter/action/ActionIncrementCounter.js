import { assert, isNull, deepFreezeSeal } from 'flexio-jshelpers' 

class ActionIncrementCounter {

    /**
    * @private
    */
    constructor (  ){
        
        deepFreezeSeal( this );
    }
    toObject() {
        var jsonObject = {};
        return jsonObject;
    }
    /**
    * @returns {object}
    */
    toJSON() {
        return this.toObject();
    }
}
export { ActionIncrementCounter}

class ActionIncrementCounterBuilder {
    /**
    * @constructor
    */
    constructor(){
        
    }
    /**
    * @returns {ActionIncrementCounter}
    */
    build(){
        return new ActionIncrementCounter()
    }
    /**
    * @param {object} jsonObject
    * @returns {ActionIncrementCounterBuilder}
    */
    static fromObject( jsonObject ) {
        var builder = new ActionIncrementCounterBuilder()
        return builder;
    }
    /**
    * @param {string} json
    * @returns {ActionIncrementCounterBuilder}
    */
    static fromJson( json ){
        var jsonObject = JSON.parse( json );
        return this.fromObject( jsonObject );
    }
    /**
    * @param {ActionIncrementCounter} instance
    * @returns {ActionIncrementCounterBuilder}
    */
    static from( instance ){
        var builder = new ActionIncrementCounterBuilder();
        return builder;
    }
}
export { ActionIncrementCounterBuilder}
