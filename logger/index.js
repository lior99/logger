const Logger = {
    _loggerEndPoint: 'http://localhost:5000/api/message',
    _customerId: null,

    setCustomerId: function(customerId) {       
       this._customerId = customerId;
    },

    getCustomerId: function() {
        return this._customerId;
    },

    Log: function(logData) {        
        console.log('logData', logData);
        const { methodName, data: { params } } = logData;

        const message = {  
            customerId: this._customerId,   
            data: {
                methodName,
                params
            }       
        }

        const messageAsBlob = new Blob([JSON.stringify(message)]);

        navigator.sendBeacon(this._loggerEndPoint, messageAsBlob);
    },
    
}

export default Logger;
