import configureMockStore from 'redux-mock-store';
import * as actions from './participant.actions';

const mockStore = configureMockStore();

describe('Participant Aciton', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  })

  it('add', () => {
    const participant = { name: 'name', email: 'email', phoneNumber: 'phone' };

    const expectedAction = [{
      type: 'ADD',
      payload: participant
    }]

    store.dispatch(actions.add(participant));
    expect(store.getActions()).toEqual(expectedAction);
  });


  it('remove', () => {
    const id = '123';

    const expectedAction = [{
      type: 'DELETE',
      payload: id
    }]

    store.dispatch(actions.remove(id));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('update', () => {
    const participant = { name: 'name', email: 'email', phoneNumber: 'phone', id: '123' };

    const expectedAction = [{
      type: 'UPDATE',
      payload: participant
    }]

    store.dispatch(actions.update(participant));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('setSorting', () => {
    const sort = { sortBy: 'soryBy', sortOrder: 'sortOrder' }

    const expectedAction = [{
      type: 'SORT',
      payload: sort
    }]

    store.dispatch(actions.setsorting(sort));
    expect(store.getActions()).toEqual(expectedAction);
  });


  it('seEditing', () => {
    const editId = '123';

    const expectedAction = [{
      type: 'SET_EDIT',
      payload: editId
    }]

    store.dispatch(actions.setEditing(editId));
    expect(store.getActions()).toEqual(expectedAction);
  });
});