import {curry, lensPath, over} from 'ramda';

const allowDotNotation = path =>
	typeof path === 'string' ? path.split('.') : path;

/**
 * Transform a specific part of an object.
 * The function is curried so it can be executed partially.
 *
 * This is usually used with `when`, in order to provide an easy way to manipulate state/
 * @sig ([String], Function, Object) -> Object
 * @params {[String]} path
 * @params {Function} transformer
 * @params {Object} state
 * @returns {Object} A new object that derives from given state
 * @example
 * const handle = select(['user', 'email'], _email => payload);
 * handle(state);
 */
const select = curry((path, transformer, state) =>
	over(lensPath(allowDotNotation(path)), transformer, state),
);

export default select;
