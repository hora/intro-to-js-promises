const request = require('request');

// What we want:
// fetch the worker actions data form the api
// go through all of that data and count how many workers were involved in
// actions from 1979 - 2019

request('http://localhost:3001/pre-2000s', function(error, response, body){

    let techWorkerActions = [];

    if (error) {
        console.log('Request: GET http://localhost:3001/pre-2000s');
        console.log('There was an error making the request.');
        return;
    }

    let actionsPre2000 = JSON.parse(body);

    for (let action of actionsPre2000) {
        techWorkerActions.push(action);
    }

    request('http://localhost:3001/2000s', function(error, response, body){

        if (error) {
            console.log('There was an error making the request.');
            return;
        }

        let actions2000 = JSON.parse(body);

        for (let action of actions2000) {
            techWorkerActions.push(action);
        }

        request('http://localhost:3001/2010s', function(error, response, body){

            if (error) {
                console.log('There was an error making the request.');
                return;
            }

            let actions2010 = JSON.parse(body);

            for (let action of actions2010) {
                techWorkerActions.push(action);
            }

            let totalWorkers = 0;

            for (let action of techWorkerActions) {
                let workerNum = Number(action.workers);


                if (!isNaN(workerNum)) {
                    totalWorkers += workerNum;
                }
            }

            console.log(`Approx. ${totalWorkers} were involved in actions between 1979 and 2019.`);
        });
    });
});


