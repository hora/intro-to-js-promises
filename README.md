# Intro to JavaScript Promises

_Note: This repo collects the lecture notes and code examples I created for
Lighthouse Labs (W2D4)_

In this lesson, we're going to build a simple HTTP client for interacting with
a JSON API. This is in order to fetch some data and answer questions that
interest us pertaining to that data. We're going to see two approaches for
making HTTP requests: one using the 'callback waterfall' method, and another
using promises.

## Review

### Sync vs async code

What is synchronous code?

What is asynchronous code?

## Review

### HTTP

What is HTTP?

What is a GET request?

How do we know a GET request was made successfully?

## JSON

- JSON is short for JavaScript Object Notation

- JSON is a way of transforming JavaScript objects into strings so that their
  data can be shared between computers

    - It will look a lot like a regular object, but keep in mind that they are
      _strings_

    - This is useful because the binary (0/1) data that makes up the content of
      a JS object can't be directly moved from one computer's memory to
      another's

    - First, that data is turned into a string, then shared with another
      computer (often via an HTTP request), then it is converted back into an
      object (this is called _parsing_)

- Today we won't need to create any JSON; instead, we'll be using ready-made
  JSON. To parse JSON use the following:

```js
let data = <some JSON data>

let obj = JSON.parse(data);
```

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

    - ex: [Dark Sky Weather API](https://darksky.net/poweredby/)

## A simple HTTP API

For demo purposes, I built a simple HTTP API that returns JSON data about tech
worker actions. The complete data can be found here: https://collectiveactions.tech/

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

