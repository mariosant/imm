import {cond, propEq} from 'ramda';
import {createReducer, when} from '.';

test('when actionType', () => {
	const condition = when('TEST', () => 'test');
	const state = cond([condition])({type: 'TEST', payload: null});

	expect(state).toBe('test');
});

test('when function', () => {
	const condition = when(propEq('type', 'TEST'), () => 'test');
	const state = cond([condition])({type: 'TEST', payload: null});

	expect(state).toBe('test');
});

test('createReducer', () => {
	const reducer = createReducer(
		when('TEST', () => 'test'),
		when('ANOTHER_TEST', () => 'another test'),
	);

	expect(reducer({type: 'TEST', payload: null})).toBe('test');
	expect(reducer({type: 'ANOTHER_TEST', payload: null})).toBe('another test');
	expect(reducer({type: 'WHATEVER'}, true)).toBe(true);
});
