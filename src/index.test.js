import {cond, propEq} from 'ramda';
import {createReducer, when, select} from '.';

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

test('when function', () => {
	const condition = when(
		(_, action) => propEq('type', 'TEST', action),
		() => 'test',
	);
	const state = cond([condition])(undefined, {type: 'TEST', payload: null});

	expect(state).toBe('test');
});

test('createReducer', () => {
	const reducer = createReducer(
		when('TEST', () => 'test'),
		when('ANOTHER_TEST', () => 'another test'),
	);

	expect(reducer(undefined, {type: 'TEST', payload: null})).toBe('test');
	expect(reducer(undefined, {type: 'ANOTHER_TEST', payload: null})).toBe(
		'another test',
	);
	expect(reducer(true, {type: 'WHATEVER'})).toBe(true);
	expect(reducer(undefined, {type: 'WHATEVER'})).toBe(null);
});

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
