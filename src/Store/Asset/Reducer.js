const initialState = {
  asset: null,
  userAssets: [],
  loading: false,
  error: null,
  assetDetails: null,
};

const assetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ASSET_REQUEST":
    case "GET_USER_ASSETS_REQUEST":
      return { ...state, loading: true, error: null };

    case "GET_ASSET_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        asset: action.payload,
      };
    case "GET_ASSET_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        assetDetails: action.payload,
      };
    case "GET_USER_ASSETS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        userAssets: action.payload,
      };

    case "GET_ASSET_FAILURE":
    case "GET_ASSET_DETAILS_FAILURE":
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default assetReducer;
