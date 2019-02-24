import {is} from 'ramda';

export default actionType =>
	Object.assign(
		(value, meta) => ({
			meta,
			type: actionType,
			payload: value,
			error: is(Error, value),
		}),
		{type: actionType},
	);
