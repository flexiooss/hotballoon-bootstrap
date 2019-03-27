import { assert, isNull, deepFreezeSeal, isString } from 'flexio-jshelpers' 

class ActionInitialize {

    /**
    * @param {string} message
    * @private
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
        var builder = ActionInitializeBuilder.from( this );
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
    * @returns {object}
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
    * @returns {ActionInitializeBuilder}
    */
    message( message ) {
        if( !isNull( message )){
            assert( isString( message ), 'message should be a string' );
        }
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
    * @returns {ActionInitializeBuilder}
    */
    static fromObject( jsonObject ) {
        var builder = new ActionInitializeBuilder()
        if( jsonObject["message"] !== undefined ){
            builder.message( jsonObject['message']);
        }
        return builder;
    }
    /**
    * @param {string} json
    * @returns {ActionInitializeBuilder}
    */
    static fromJson( json ){
        var jsonObject = JSON.parse( json );
        return this.fromObject( jsonObject );
    }
    /**
    * @param {ActionInitialize} instance
    * @returns {ActionInitializeBuilder}
    */
    static from( instance ){
        var builder = new ActionInitializeBuilder();
        builder.message( instance.message() );
        return builder;
    }
}
export { ActionInitializeBuilder}
