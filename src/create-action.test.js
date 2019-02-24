import {createAction} from '.';

describe('createAction', () => {
	test('action creator', () => {
		const increment = createAction('INCREMENT');

		expect(increment(2)).toEqual({
			type: 'INCREMENT',
			payload: 2,
			meta: undefined,
			error: false,
		});
	});

	test('action creator undefined', () => {
		const increment = createAction('INCREMENT');

		expect(increment()).toEqual({
			type: 'INCREMENT',
			payload: undefined,
			meta: undefined,
			error: false,
		});
	});

	test('action creator error', () => {
		const increment = createAction('INCREMENT');
		const error = new Error('generic');

		expect(increment(error)).toEqual({
			type: 'INCREMENT',
			payload: error,
			error: true,
			meta: undefined,
		});
	});
});
