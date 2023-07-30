import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index.js';
import { watchFetchPlaces } from '../sagas.js';

const sagaMiddleware = createSagaMiddleware()

export default () => {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(watchFetchPlaces);
	return store;
};
