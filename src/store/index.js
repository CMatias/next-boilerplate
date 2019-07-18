import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from '@store/reducers';

export default () => {
  return createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
