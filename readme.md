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

## Deploy :ship:
This app will automatically get published under `@thechatshop/your-module-name` on npm (when new code is on master and a new tag exists with `vX.X.X` format)

:rotating_light: **Check the [config.yml](./.circleci/config.yml) for more**

Here is an example:

```bash
git checkout master
# Will generate a tag as well
npm version patch #or major, minor, patch

git push --follow-tags
```
