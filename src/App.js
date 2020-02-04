import React from 'react';
import { createStore, compose } from 'redux';
import reducers from './store/reducer';
import { Provider } from 'react-redux';
import SampleContainer from './container/SampleContainer';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Additional Extensions
      })
    : compose;

const store = createStore(reducers, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      <SampleContainer />
    </Provider>
  );
}

export default App;
