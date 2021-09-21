import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const clientLogsSchema = new Schema({
    customerId: String,
    data: Object,
    type: String,
    errorMessage: String
})

const saveLogToDb = (message) => {
    mongoose.connect('mongodb://localhost:27017/logs');
    const Model = mongoose.model('clientLogs', clientLogsSchema);

    const {customerId, data, type, errorMessage} = message;

    const saveDataModel = new Model({
        customerId,
        data,
        type: type || 'Info',
        errorMessage
    })
    
    saveDataModel.save((err, result) => {
        if (err) {
            console.log('err', err);
            return err;
        }

        return result;
    })
}

export {
    saveLogToDb
}

