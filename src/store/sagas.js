import { call, put, takeEvery } from 'redux-saga/effects'
import API from '../utils/API.js';

export function* watchFetchPlaces() {
  yield takeEvery('FETCHED_PLACES', fetchPlacesAsync);
}

export function* fetchPlacesAsync() {
  try {
    yield put({ type: 'REQUESTED_PLACES' });
    const data = yield call(() => {
      return fetch(API.API_PLACES)
              .then(res => res.json())
      }
    );
    yield put({ type: 'REQUESTED_PLACES_SUCCEEDED', places: [] });
  } catch (error) {
    yield put({ type: 'REQUESTED_PLACES_FAILED', error });
  }
}