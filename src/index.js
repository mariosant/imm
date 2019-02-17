import {cond, curry, prop, is, lensPath, over, propEq, T} from 'ramda';

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
		(actionFn, transformer) => [
			(_, action = {}) => propEq('type', actionFn.type, action),
			transformer,
		],
	],
	[is(Function), (predicate, transformer) => [predicate, transformer]],
	[
		T,
		() => {
			throw new Error(
				'The predicate can be the action type or a predicate function.',
			);
		},
	],
]);

const allowDotNotation = path =>
	typeof path === 'string' ? path.split('.') : path;

export const select = curry((path, transformer, state) =>
	over(lensPath(allowDotNotation(path)), transformer, state),
);

export const createAction = actionType => {
	const fn = value =>
		is(Error, value)
			? {
					type: actionType,
					error: value,
			  }
			: {
					type: actionType,
					payload: value,
			  };

	fn.type = actionType;

	return fn;
};
