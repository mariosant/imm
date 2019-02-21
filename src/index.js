import {cond, curry, is, lensPath, over, prop, propEq, T} from 'ramda';

export const createReducer = (...cases) =>
	cond([...cases, [T, (state = null) => state]]);

export const when = cond([
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

const allowDotNotation = path =>
	typeof path === 'string' ? path.split('.') : path;

export const select = curry((path, transformer, state) =>
	over(lensPath(allowDotNotation(path)), transformer, state),
);

export const createAction = actionType =>
	Object.assign(
		value =>
			is(Error, value)
				? {
						type: actionType,
						error: value,
				  }
				: {
						type: actionType,
						payload: value,
				  },
		{type: actionType},
	);
