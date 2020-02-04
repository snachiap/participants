export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const SORT = 'SORT';


const add = participant => ({
  type: ADD,
  payload: participant
});

const remove = id => ({
  type: DELETE,
  payload: id
})

const update = participant => ({
  type: UPDATE,
  payload: participant
});

const sort = (sortSpec) => ({
  type: SORT,
  payload: sortSpec
})


export {
  add,
  remove,
  update,
  sort
}