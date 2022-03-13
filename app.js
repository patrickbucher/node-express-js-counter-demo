'use strict';

const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('static'));

let counter = 0;

app.get('/count', (req, res) => {
    console.log('GET /count');
    res.send({ counter: counter });
});

app.put('/increment', (req, res) => {
    console.log('PUT /increment');
    counter += 1;
    res.send({ counter: counter });
});

app.listen(port, () => {
    console.log(`Counter app listening on port ${port}.`)
});
