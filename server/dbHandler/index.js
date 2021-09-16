// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const clientLogsSchema = new Schema({
    customerId: String,
    data: Object
})

const saveLogToDb = (message) => {
    mongoose.connect('mongodb://localhost:27017/logs');
    const Model = mongoose.model('clientLogs', clientLogsSchema);

    const saveData = new Model({
        customerId: message.customerId,
        data: message.data
    }).save((err, result) => {
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

