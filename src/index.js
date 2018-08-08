/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(<Root />, root);
}
registerServiceWorker();
