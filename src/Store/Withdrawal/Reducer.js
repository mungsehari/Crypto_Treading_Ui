const initialState = {
  withdrawal: null,
  history: [],
  loading: false,
  error: null,
  paymentDetails: null,
  requests: [],
};

const withdrawalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WITHDRAWAL_REQUEST":
    case "GET_WITHDRAWAL_HISTROY_REQUEST":
    case "GET_WITHDRAWAL_REQUEST_REQUEST":
    case "GET_PAYMENT_DETAILS_REQUEST":
    case "WITHDRAWAL_PROCEED_REQUEST":
      return { ...state, loading: true, error: null };

    case "WITHDRAWAL_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        withdrawal: action.payload,
      };
    case "ADD_PAYMENT_DETAILS_SUCCESS":
    case "GET_PAYMENT_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        paymentDetails: action.payload,
      };

    case "WITHDRAWAL_PROCEED_SUCCESS":
      return {
        ...state,
        requests: state.requests.map((item) =>
          item.id == action.payload.id ? action.payload : item
        ),
        loading: false,
        error: null,
      };

    case "GET_WITHDRAWAL_HISTROY_SUCCESS":
      return { ...state, loading: false, error: null, history: action.payload };

    case "GET_WITHDRAWAL_REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        requests: action.payload,
      };

    case "WITHDRAWAL_FAITLURE":
    case "GET_WITHDRAWAL_HISTROY_FAILURE":
    case "GET_WITHDRAWAL_REQUEST_FAILURE":
    case "WITHDRAWAL_PROCEED_FAILURE":
    case "GET_PAYMENT_DETAILS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default withdrawalReducer;
