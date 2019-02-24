import {is} from 'ramda';

/**
 * Creates an action creator function.
 * @sig String -> (any, any) -> {k: v}
 * @params {String} actionType
 * @returns {Function} A new function that creates an FSA compliant action
 * @example
 * const setEmail = createAction('SET_EMAIL');
 * dispatch(setEmail('marios@sent.com'));
 */
const createAction = actionType =>
	Object.assign(
		(value, meta) => ({
			meta,
			type: actionType,
			payload: value,
			error: is(Error, value),
		}),
		{type: actionType},
	);

export default createAction;
