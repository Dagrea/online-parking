const initialState = {
	items: [],
	loading: false,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case 'REQUESTED_PLACES':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'REQUESTED_PLACES_SUCCEEDED':
      return {
        items: action.places,
        loading: false,
        error: false,
      };
    case 'REQUESTED_PLACES_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
	}
}