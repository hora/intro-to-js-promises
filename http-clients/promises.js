const request = require('request-promise-native');

const fetchWorkerActions = function() {
    let workerActions = [];

    return request('http://localhost:3001/pre-2000s')
        .then(function(data) {
            let actionsPre2000 = JSON.parse(data);

            for (let action of actionsPre2000) {
                workerActions.push(action);
            }

            return request('http://localhost:3001/2000s');
        })
        .then(function(data) {
            let actions2000 = JSON.parse(data);

            for (let action of actions2000) {
                workerActions.push(action);
            }

            return request('http://localhost:3001/2010s');
        })
        .then(function(data) {
            let actions2010 = JSON.parse(data);

            for (let action of actions2010) {
                workerActions.push(action);
            }

            return workerActions;
        });
};

// we call our function which returns a promise
fetchWorkerActions()
    // and because this function returns a promise, we can immediately call
    // .then
    // the callback for .then will be called if the promise is fulfilled
    // succesffully
    .then(function(workerActions) {
        let totalWorkers = 0;

        for (let action of workerActions) {
            let workers = Number(action.workers);

            if(!isNaN(workers)) {
                totalWorkers += workers;
            }
        }

        console.log(totalWorkers);
    })
    // if the promise is not fulfilled but instead is rejected, this means there
    // was an error
    // we can handle error by calling .catch
    .catch(function(error) {
        console.log(error);
    });

