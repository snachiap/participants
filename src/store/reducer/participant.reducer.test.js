import reducers from './participant.reducer';
import { data } from './participant.reducer';
import _ from 'lodash';

import short from 'short-uuid';
jest.mock('short-uuid', () => ({
  generate: () => '123'
}));

describe('Participant reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      participants: data.map(d => ({ ...d, id: short.generate() })),
      editId: '',
      sort: {
        sortBy: 'name',
        sortOrder: 'asc'
      }
    };
  });

  it('Should load proper initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('ADD', () => {
    const state = _.cloneDeep(initialState);
    const action = { type: 'ADD', payload: { name: 'name', email: 'email', phoneNumber: 'phone' } };
    const expectedState = { ...initialState, participants: [...initialState.participants, { name: 'name', email: 'email', phoneNumber: 'phone', id: '123' }] };

    expect(reducers(state, action)).toEqual(expectedState);
  });

  it('DELETE', () => {
    const state = _.cloneDeep(initialState);
    const action = { type: 'DELETE', payload: '123' };
    const expectedState = { ...initialState, participants: [] };

    expect(reducers(state, action)).toEqual(expectedState);
  });

  it('UPDATE', () => {
    const state = { ..._.cloneDeep(initialState), editId: '45' };
    const action = { type: 'UPDATE', payload: { name: 'name', email: 'email', phoneNumber: 'phone', id: '123' } };
    const expectedState = { ...initialState, participants: [{ name: 'name', email: 'email', phoneNumber: 'phone', id: '123' }], editId: '' };

    expect(reducers(state, action)).toEqual(expectedState);
  })


  it('SET_EDIT', () => {
    const state = _.cloneDeep(initialState);
    const action = { type: 'SET_EDIT', payload: '45' };
    const expectedState = { ...initialState, editId: '45' };

    expect(reducers(state, action)).toEqual(expectedState);
  });

  it('SORT', () => {
    const state = _.cloneDeep(initialState);
    const action = { type: 'SORT', payload: { sortBy: 'email', sortOrder: 'desc' } };
    const expectedState = { ...initialState, sort: { sortBy: 'email', sortOrder: 'desc' } };

    expect(reducers(state, action)).toEqual(expectedState);
  });
})