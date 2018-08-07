import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import reducers from './reducers';
import sagas from './sagas';

const blacklistUserInformation = createBlacklistFilter('api', [
  ['github.auth', 'data'],
]);
const persistConfig = {
  key: 'githubSearch',
  version: 1,
  storage,
  transforms: [blacklistUserInformation],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  return { store, persistor };
};
