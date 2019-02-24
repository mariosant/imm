import {cond, is, prop, propEq, T} from 'ramda';

export default cond([
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
