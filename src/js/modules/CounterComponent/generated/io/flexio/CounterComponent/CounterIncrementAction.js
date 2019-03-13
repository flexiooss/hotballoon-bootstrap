import { deepFreezeSeal } from 'flexio-jshelpers' 

class CounterIncrementAction {

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
export { CounterIncrementAction}

class CounterIncrementActionBuilder {
    /**
    * @constructor
    */
    constructor(){
        
    }
    /**
    * @returns {CounterIncrementAction}
    */
    build(){
        return new CounterIncrementAction()
    }
    /**
    * @param {object} jsonObject
    * @returns {CounterIncrementAction}
    */
    static fromObject( jsonObject ) {
        var builder = new CounterIncrementActionBuilder()
        return builder;
    }
    /**
    * @param {string} json
    * @returns {CounterIncrementAction}
    */
    static fromJson( json ){
        var jsonObject = JSON.parse( json );
        return this.fromObject( jsonObject );
    }
}
export { CounterIncrementActionBuilder}
