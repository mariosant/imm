import {cond, propEq} from 'ramda';
import {createReducer, when} from '.';

test('when actionType', () => {
	const condition = when('TEST', () => 'test');
	const state = cond([condition])(undefined, {type: 'TEST', payload: null});

	expect(state).toBe('test');
});

test('when action is undefined', () => {
	const condition = when('TEST', () => 'test');
	const state = cond([condition])(undefined, undefined);

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
});
