# Imm

> Write better reducers!

[![NPM version](https://img.shields.io/npm/v/@mariosant/imm.svg)](https://www.npmjs.com/package/@mariosant/imm)

Imm is a set of tools to help you simplify your reducers. It works with all flux-style architectures, including Redux, Recompose's `withReducer` and React's `useReducer` hook.  

## Installation

Just add `@mariosant/imm` to your `package.json`.
```bash
$ npm install @mariosant/imm

# or
$ yarn add @mariosant/imm
```

You can now import the module and use it like
```javascript
import {createReducer, when} from '@mariosant/imm';

// or if you are on node or browserify
const {createReducer, when} = require('@mariosant/imm');
```

## Usage

Using imm is pretty straightforward and simple. All it requires, is to dispatch actions that comply with the [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action).

```javascript
import {createReducer, when} from '@mariosant/imm';

const reducer = createReducer(
    when('SET_NAME', (state, {payload}) => ({...state, name: payload})),
    when('SET_EMAIL', (state, {payload}) => ({...state, email: payload})),
)
```

or even better:
```javascript
import {createReducer, when} from '@mariosant/imm';

const setName = (state, {payload}) => ({...state, name: payload})
const setEmail = (state, {payload}) => ({...state, email: payload})

const reducer = createReducer(
    when('SET_NAME', setName),
    when('SET_EMAIL', setEmail),
)
```

The first argument passed to `when`, can be a `String` or a `Function`. If it is a `String`, it compares it with the `type` of your dispatched action. If it is a function, it uses it as a predicate, which if it returns `true`, it executes the associated transfomer.

Here is an example.
```javascript
import {createReducer, when} from '@mariosant/imm';
import {propEq} from 'ramda';

const setName = (state, {payload}) => ({...state, name: payload})
const setEmail = (state, {payload}) => ({...state, email: payload})

const reducer = createReducer(
    when(propEq('type', 'SET_NAME'), setName),
    when(propEq('type', 'SET_EMAIL'), setEmail),
)
```

By using this paradigm, you have less things to worry about. You don't have to care about multiple return statements and you only have to test your transformers and if you use the feature, your predicates,

## Development
Easy enough!

```bash
$ yarn install  # to install dependencies
$ yarn test     # to run the test suite
```

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license.

[https://github.com/mariosant/imm](https://github.com/mariosant/imm)

## Contributing

1. Fork it (<https://github.com/mariosant/imm/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request