import express from 'express';
// const express = require('express');

import {saveLogToDb} from './dbHandler/index.js';
const PORT = 5000;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

  app.use(express.urlencoded());
  app.use(express.json());

app.post('/api/message', (req, res) => {
    req.on('data', (buffer) => {
        const data = Buffer.from(buffer).toString();

        const message = JSON.parse(data);
        console.log('message', message);

        try {
            const result = saveLogToDb(message);
            res.status(200).send(result);
        } catch(err) {
            console.log('we got an error',err);
            res.status(400).send(err.description);
        }
    })

});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
