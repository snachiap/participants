export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const SORT = 'SORT';
export const SET_EDIT = 'SET_EDIT';

const add = participant => ({
  type: ADD,
  payload: participant
});

const remove = id => ({
  type: DELETE,
  payload: id
});

const update = participant => ({
  type: UPDATE,
  payload: participant
});

const setsorting = sortSpec => ({
  type: SORT,
  payload: sortSpec
});

const setEditing = id => ({
  type: SET_EDIT,
  payload: id
});

export { add, remove, update, setsorting, setEditing };
