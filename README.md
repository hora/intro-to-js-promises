# W2D4 - Promises

In this lesson, we're going to build a simple HTTP client for interacting with
a JSON API. This is in order to fetch some data and answer questions that
interest us pertaining to that data. We're going to see two approaches for
making HTTP requests: one using the 'callback waterfall' method, and another
using promises.

## Review

### Sync vs async code

What is synchronous code?

- executed sequentially, waits for one thing to finish
  before moving on from top to bottom (more-or-less)

What is asynchronous code?

- not synchronous

- sync code keeps executing while async code is waiting

    - for ex:
    - waiting for an event to be triggered
    - waiting for some time to pass (setTimeout,
      setInterval)

- callbacks are needed when working with async code

## Review

### HTTP

What is HTTP?

- HyperText Transfer Protocol

- protocol: the rules we follow to send data between two machines/computers/etc

- hypertext: documents with hyper links that let you go from one document to
  another

What is an HTTP GET request?

- query to an HTTP server to get some data

How do we know a GET request was made successfully?

- the server sends a status as part of the response: 200 OK (usually)

## API

- API is short for Application Program Interface

- There are a variety of possible APIs, but for our purposes today, we can think
  about them as HTTP servers that return data

    - This is different than HTTP servers that return web pages, that is, HTML
      pages (which usually will include HTML, CSS and JS code, as well as
      images, videos, and other media).

    - Lots of APIs return JSON data

    - But this is not a requirement; APIs can return any kind of data supported
      by HTTP

- APIs are built and maintained by all sorts of organizations who offer access
  to their data to other computer programs (sometimes for free, other times for
  a fee)

    - ex: (Dark Sky Weather API)[https://darksky.net/poweredby/]

## A simple HTTP API

For demo purposes, I built a simple HTTP API that returns JSON data about tech
worker actions. The complete data can be found here: https://collectiveactions.tech/

You can run the server for this API by cloning this repo, changing directory
into the [`lesson-planning/csv-to-json/`]() directory, and then running the command
`node app.js`

### Routes

Each of the following routes return JSON data representing a lit of publicly
recorded worker actions. Each of the following routes returns an array of
objects, with each object representing a worker action. Each object contains the
following attributes:

- `id`
- `date` – the date of the action
- `sources` – where you can find more information about the action
- `actions` – the types of actions taken by the workers (for example strikes or
  open letters)
- `struggles` – what the workers were struggling for (for example better pay or
  climate action)
- `description` – a short description of the action
- `locations` – where the action(s) took place
- `companies` – which tech companies were targetted by the action
- `workers` – an approximate count of how many workers were involved in the
  action
- `tags`
- `author`

#### GET /pre-2000s

All the worker actions that took place before the year 2000.

#### GET /2000s

All the worker actions that took place before the year 2000 and 2009.

#### GET /2010s

All the worker actions that took place between the year 2010 and 2019.

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

## Examples

For the two examples we built in class, see the (`http-clients`)[/http-clients]
directory. The callback approach is in
[`callbacks.js`](/http-clients/callbacks.js) and the promises approach in
[`promises.js`](/http-clients/promises.js)

## References and further reading

- [Database of collective worker actions](https://collectiveactions.tech/)

- [Article with some preliminary analysis of the collective worker actions
  data](https://www.theguardian.com/commentisfree/2019/dec/22/tech-worker-activism-2019-what-we-learned)

- [Francis Bourgouin's w2d4 lecture notes](https://github.com/FrancisBourgouin/lhl-12-w2d3)

- [Nima Boscarino's w2d4 lecture notes](https://github.com/NimaBoscarino/errors-promises-notes)

- [Khurram Virani's w2d4 lecture notes](https://github.com/kvirani/w02d4-promises/blob/2019-12-05/2_promises.js)

- [More on promises from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

