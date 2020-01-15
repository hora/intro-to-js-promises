const request = require('request');

let techWorkerActions = [];

request('http://localhost:3001/pre-2000s', function(error, response, body) {
    if (error) {
        console.log('There was an error making the request');
        return;
    }

    let actionsPre2000 = JSON.parse(body);

    for (let action of actionsPre2000) {
        techWorkerActions.push(action);
    }

    request('http://localhost:3001/2000s', function(error, response, body) {
        if (error) {
            console.log('There was an error making the request');
            return;
        }

        let actions2000s = JSON.parse(body);

        for (let action of actions2000s) {
            techWorkerActions.push(action);
        }

        request('http://localhost:3001/2010s', function(error, response, body) {
            if (error) {
                console.log('There was an error making the request');
                return;
            }

            let actions2010s = JSON.parse(body);

            for (let action of actions2010s) {
                techWorkerActions.push(action);
            }

            // Only now would we be ready to work with the complete dataset
            let totalWorkers = 0;

            for (let action of techWorkerActions) {
                let workers = Number(action.workers);

                if(!isNaN(workers)) {
                    totalWorkers += workers;
                }
            }

            console.log(`Approximately ${totalWorkers} tech workers were involved in collective actions since 1979. Note: some workers may have been counted more than once.`);
        });

    });
});

