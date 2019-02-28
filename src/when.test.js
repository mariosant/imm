import {cond} from 'ramda';
import {createAction, when} from '.';

describe('when', () => {
	test('when actionType', () => {
		const condition = when('TEST', () => 'test');
		const state = cond([condition])(undefined, {type: 'TEST', payload: null});

		expect(state).toBe('test');
	});

	test('when action is undefined', () => {
		const condition = when('TEST', () => 'test');
		const state = cond([condition])(true, {});

		expect(state).toBe(undefined);
	});

	test('when action is passed', () => {
		const test = createAction('TEST');
		const condition = when(test, () => 'test');
		const state = cond([condition])(undefined, test());

		expect(state).toBe('test');
	});
});
