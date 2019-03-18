import { deepFreezeSeal } from 'flexio-jshelpers' 

class ActionIncrementCounter {

    /**
    */
    constructor (  ){
        
        deepFreezeSeal( this );
    }
    toObject() {
        var jsonObject = {};
        return jsonObject;
    }
    /**
    * @return object
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
    * @returns {ActionIncrementCounter}
    */
    static fromObject( jsonObject ) {
        var builder = new ActionIncrementCounterBuilder()
        return builder;
    }
    /**
    * @param {string} json
    * @returns {ActionIncrementCounter}
    */
    static fromJson( json ){
        var jsonObject = JSON.parse( json );
        return this.fromObject( jsonObject );
    }
}
export { ActionIncrementCounterBuilder}
