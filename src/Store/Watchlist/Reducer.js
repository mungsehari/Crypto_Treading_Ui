import { existInWatchlist } from "@/utils/existInWatchlist";

const initialState = {
  watchlist: null,
  loading: false,
  error: null,
  items: [],
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_WATCHLIST_REQUEST":
    case "ADD_COIN_TO_WATCHLIST_REQUEST":
      return { ...state, loading: true, error: false };

    case "GET_USER_WATCHLIST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        watchlist: action.payload,
        items: action.payload.coins,
      };
    case "ADD_COIN_TO_WATCHLIST_SUCCESS":
      let updateItems = existInWatchlist(state.items, action.payload)
        ? state.items.filter((item) => item.id !== action.payload.id)
        : [action.payload, ...state.items];
      return {
        ...state,
        items: updateItems,
        loading: false,
        error: null,
      };

    case "GET_USER_WATCHLIST_FAILURE":
    case "ADD_COIN_TO_WATCHLIST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default watchlistReducer;
