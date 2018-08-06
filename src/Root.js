import React from 'react';
import { Provider } from 'react-redux';
import App from './frames/App';
import configureStore from './store/configure';

const Root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

export default Root;
