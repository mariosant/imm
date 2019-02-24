import {curry, lensPath, over} from 'ramda';

const allowDotNotation = path =>
	typeof path === 'string' ? path.split('.') : path;

export default curry((path, transformer, state) =>
	over(lensPath(allowDotNotation(path)), transformer, state),
);
