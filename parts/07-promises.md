
## Promises

Promises offer an alternative (and more robust) way of working with asynchrnous
code that doesn't require the callback approach we've been practicing the last
week.

Async operations that implement promises will return a promise _immediately_.
This returned promise represents the eventual completion of the asyncrhonous
operation.

Promises are a simple _state machine_, which starts with the state of "pending".
If the async operation is completed successfully, the state changes to
"fulfilled". If the async operation cannot be completed or completes but
unsuccessfully, the state instead changes to "rejected".

When a promise is completed, that is, either "fulfilled" or "rejected", it runs
the callbacks inside of it.

You can register callbacks to be called when the "fulfilled" state is reached
using `.then`. And you can register callbacks to be called when the "rejected"
state is reached using `.catch`.

The syntax looks like this:

```js
let promise = asyncOperationReturningAPromise();

promise
    .then(function() {
        // this gets called when the promise is fulfilled
    })
    .catch(function() {
        // this gets called when the promise is rejected
    });

// Or, a shorter version of the above:

asyncOperationReturningAPromise()
    .then(function() {
        // this gets called when the promise is fulfilled
    })
    .catch(function() {
        // this gets called when the promise is rejected
    });
```
