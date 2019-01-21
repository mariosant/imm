import {cond, is, propEq, T} from 'ramda';

export const createReducer = (...cases) =>
	cond([...cases, [T, (_, state) => state]]);

export const when = cond([
	[
		is(String),
		(actionType, transformer) => [propEq('type', actionType), transformer],
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
