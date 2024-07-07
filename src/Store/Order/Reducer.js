const initialState = {
  order: null,
  orders: [],
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDER_REQUEST":
    case "PAY_ORDER_REQUEST":
    case "GET_ALL_ORDER_REQUEST":
      return { ...state, loading: true, error: null };

    case "GET_ORDER_SUCCESS":
    case "PAY_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        order: action.payload,
      };

    case "GET_ALL_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        orders: action.payload,
      };

    case "GET_ORDER_FAILURE":
    case "PAY_ORDER_FAILURE":
    case "GET_ALL_ORDER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default orderReducer;
