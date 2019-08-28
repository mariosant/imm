import createReducer from './create-reducer';
import when from './when';

const initialState = 'initial-state';

const reducer = createReducer([when('ACTION', () => 'action')], initialState);

describe('createReducer', () => {
	test('will return initial state when state is undefined', () => {
		expect(reducer(undefined, {type: 'ACTION', payload: 'test'})).toEqual(
			initialState,
		);
	});

	test('will return state when action is unknown', () => {
		expect(reducer(initialState, {type: 'test', payload: 'test'})).toEqual(
			initialState,
		);
	});

	test('will honor cases when everything is fine', () => {
		expect(reducer(initialState, {type: 'ACTION', payload: 'test'})).toEqual(
			'action',
		);
	});
});
