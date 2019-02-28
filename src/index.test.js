import {createAction, createReducer, select, when} from '.';

describe('imm exports', () => {
	test('createAction', () => expect(createAction).toBeTruthy());
	test('createReducer', () => expect(createReducer).toBeTruthy());
	test('select', () => expect(select).toBeTruthy());
	test('when', () => expect(when).toBeTruthy());
});
