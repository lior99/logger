const Logger = {
    _loggerEndPoint: 'http://localhost:5000/api/log',
    _customerId: null,

    setCustomerId: function(customerId) {       
       this._customerId = customerId;
    },

    getCustomerId: function() {
        return this._customerId;
    },

    Log: function(logData) {        
        const { methodName, data: { params }, type = 'info', errorMessage = '' } = logData;

        const message = {  
            customerId: this._customerId,   
            data: {
                methodName,
                params
            },
            type,
            errorMessage
        }

        const messageAsBlob = new Blob([JSON.stringify(message)]);

        navigator.sendBeacon(this._loggerEndPoint, messageAsBlob);
    },
    
}

export default Logger;
