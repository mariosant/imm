import {cond, is, propEq, T} from 'ramda';

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
