import {cond, T} from 'ramda';

export default (...cases) => cond([...cases, [T, (state = null) => state]]);
