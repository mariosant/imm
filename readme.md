# IMM

Develop reducers withh ease

## Development
```bash
$ git clone git@github.com:mariosant/imm.git
$ cd imm
$ yarn install
```

## Installation
```bash
yarn add @mariosant/imm
```

## Usage
```javascript
import {createReducer, when} from 'imm';

const reducer = createReducer(
    when('SET_NAME', (state, {payload}) => {...state, name: payload.name}),
    when(startsWith('ESCALATION'), transformerFn,
)
```

## Testing :bomb:
```bash
$ yarn test     # add -- --watch to monitor for changes
```
