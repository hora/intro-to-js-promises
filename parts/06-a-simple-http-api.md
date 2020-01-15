
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

