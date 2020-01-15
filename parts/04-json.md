
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

