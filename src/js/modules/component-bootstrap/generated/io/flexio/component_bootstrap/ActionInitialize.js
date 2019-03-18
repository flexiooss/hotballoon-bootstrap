import { deepFreezeSeal } from 'flexio-jshelpers' 

class ActionInitialize {

    /**
    @param {string}
    */
    constructor ( message ){
        this._message = message;
        deepFreezeSeal( this );
    }
    /**
    * @returns {string}
    */
    message() {
        return this._message;
    }
    /**
    * @param { string } message
    */
    withMessage( message ) {
        var builder = ActionInitializeBuilder.fromObject( this.toObject() );
        builder.message( message);
        return builder.build();
    }
    toObject() {
        var jsonObject = {};
        if( this._message != undefined ){
            jsonObject["message"] = this._message;
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
export { ActionInitialize}

class ActionInitializeBuilder {
    /**
    * @constructor
    */
    constructor(){
        this._message = null;
    }
    /**
    * @param { string } message
    */
    message( message ) {
        this._message = message;
        return this;
    }
    /**
    * @returns {ActionInitialize}
    */
    build(){
        return new ActionInitialize(this._message)
    }
    /**
    * @param {object} jsonObject
    * @returns {ActionInitialize}
    */
    static fromObject( jsonObject ) {
        var builder = new ActionInitializeBuilder()
        if( jsonObject["message"] != undefined ){
            builder.message( jsonObject['message']);
        }
        return builder;
    }
    /**
    * @param {string} json
    * @returns {ActionInitialize}
    */
    static fromJson( json ){
        var jsonObject = JSON.parse( json );
        return this.fromObject( jsonObject );
    }
}
export { ActionInitializeBuilder}
