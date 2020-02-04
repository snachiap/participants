import { combineReducers } from 'redux';

import participantReducer from './participant.reducer';

const reducers = combineReducers({
  participants: participantReducer
});

export default reducers;