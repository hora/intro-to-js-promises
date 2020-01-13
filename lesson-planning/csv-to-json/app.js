const express = require('express');
const app = express();
const port = 3001;

const csvToJson = require('csvtojson');

app.get('/', function(req, res) {
    csvToJson()
        .fromFile('tech-actions.csv')
        .then(function(data) {
            res.send(data);
        });
});

app.get('/pre-2000s', function(req, res) {
    csvToJson()
        .fromFile('tech-actions-pre-2000s.csv')
        .then(function(data) {
            res.send(data);
        });
});

app.get('/2000s', function(req, res) {
    csvToJson()
        .fromFile('tech-actions-2000s.csv')
        .then(function(data) {
            res.send(data);
        });
});

app.get('/2010s', function(req, res) {
    csvToJson()
        .fromFile('tech-actions-2010s.csv')
        .then(function(data) {
            res.send(data);
        });
});

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
})

