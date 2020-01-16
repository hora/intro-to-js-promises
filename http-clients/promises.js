const request = require('request-promise-native');

const fetchWorkerActions = function() {

    let techWorkerActions = [];

    // fetchWorkerActions returns a promise
    // that is, the promise returned by calling request
    return request('http://localhost:3001/pre-2000s')
        .then(function(body) {
            let actionsPre2000 = JSON.parse(body);

            for (let action of actionsPre2000) {
                techWorkerActions.push(action);
            }

            // we want to make another request, so we do that, returning the
            // promise so we can continue chaining our .then calls
            return request('http://localhost:3001/2000s')
        })
        .then(function(body) {
            let actions2000 = JSON.parse(body);

            for (let action of actions2000) {
                techWorkerActions.push(action);
            }

            // we want to make another request, so we do that, returning the
            // promise so we can continue chaining our .then calls
            return request('http://localhost:3001/2010s')
        })
        .then(function(body) {
            let actions2010 = JSON.parse(body);

            for (let action of actions2010) {
                techWorkerActions.push(action);
            }

            // all the requests are done, and the data array is fully built
            // so now we can return it
            // this value will be passed to .then calls further down the chain,
            // in this case, on line 50
            return techWorkerActions;
        })
};

fetchWorkerActions()
    // this .then registeres a callback for what should happen when
    // the final chained promise inside fetchWorkerActions is fulfilled
    .then(function(workerActions) {
        let totalWorkers = 0;

        for (let action of workerActions) {
            let workerNum = Number(action.workers);


            if (!isNaN(workerNum)) {
                totalWorkers += workerNum;
            }
        }

        console.log(`Approx. ${totalWorkers} were involved in actions between 1979 and 2019.`);
    })
    // finally, in case there are error at any point in the async calls above,
    // the promises will be rejected and this callback will be called
    .catch(function(error) {
        console.log(`There was an error: ${error}`);
    });
