const fs = require('fs').promises;

const parseMetadata = function() {
    let keys;

    return fs.readFile('tech-actions-meta.csv', 'utf8')
        .then(function(data) {
            //console.log('data is:');
            //console.log(data);
            keys = data.trim().split(',');
            return keys;
        });
};

const parseActions = function(keys) {
    let parsedActions = [];

    return fs.readFile('tech-actions-pre-2000s.csv', 'utf8')
        .then(function(data) {
            //console.log('data is:');
            //console.log(data);

            // first go over every line
            data = data.trim().split('\n').forEach(function(dataLine) {
                let parsedEntry = {};

                // then go over every item, creating an object from it
                dataLine.split(';').forEach(function(dataEntry, index) {
                    parsedEntry[keys[index]] = dataEntry;
                });

                parsedActions.push(parsedEntry);
            });

            return parsedActions;
        });
}

parseMetadata()
    .then(parseActions)
    .then(function(result) {
        console.log('result is:');
        console.log(result);
    });

