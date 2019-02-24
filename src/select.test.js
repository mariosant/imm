import {select} from '.';

describe('select', () => {
	test('select', () => {
		const state = {
			data: {
				account: 'Marios',
			},
			something: 'whatever',
		};

		const transformer = select(
			['data', 'account'],
			account => `${account} touched`,
		);

		expect(transformer(state)).toEqual({
			data: {
				account: 'Marios touched',
			},
			something: 'whatever',
		});
	});

	test('select dot notation', () => {
		const state = {
			data: {
				account: 'Marios',
			},
			something: 'whatever',
		};

		const transformer = select('data.account', account => `${account} touched`);

		expect(transformer(state)).toEqual({
			data: {
				account: 'Marios touched',
			},
			something: 'whatever',
		});
	});
});
