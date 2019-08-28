import {cond, T} from 'ramda';

const isUndef = a => typeof a === 'undefined';

/**
 * Create a reducer function that accepts multiple predicates and transformers.
 * The reducer created is smart enough to handle unknown action types by returning state unchanged.
 * This is meant to be in  conjunction with `when`.
 * @sig [[Function, Function]] -> (state, action)
 * @returns {Function} A reducer function
 * @example
 * const reducer = createReducer(
 *   when('SET_EMAIL', handleEmail)
 * );
 */
const createReducer = (cases, initialState) =>
	cond([[isUndef, () => initialState], ...cases, [T, state => state]]);

export default createReducer;
