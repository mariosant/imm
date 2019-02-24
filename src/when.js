import {cond, is, prop, propEq, T} from 'ramda';

/**
 * Returns predicates to be used with `createReducer`.
 *
 * @sig (*... => Boolean, *... -> any)
 * @returns [{Function}, {Function}]
 * @example
 * when('SET_NAME', (state, action) => ({...state, name: action.payload}));
 */
const when = cond([
	[
		is(String),
		(actionType, transformer) => [
			(_, action = {}) => propEq('type', actionType, action),
			transformer,
		],
	],
	[
		prop('type'),
		(action, transformer) => [
			() => propEq('type', action.type, action),
			transformer,
		],
	],
	[
		T,
		() => {
			throw new Error(
				'The predicate can be the action type or an action creator.',
			);
		},
	],
]);

export default when;
