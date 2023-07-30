export const requestPlaces = () => ({
	type: 'REQUESTED_PLACES',
})

export const requestPlacesSucces = places => ({
	type: 'REQUESTED_PLACES_SUCCEEDED',
	payload: places,
})

export const requestPlacesError = () => ({
	type: 'REQUESTED_PLACES_FAILED',
})

export const fetchPlaces = () => ({
	type: 'FETCHED_PLACES',
})