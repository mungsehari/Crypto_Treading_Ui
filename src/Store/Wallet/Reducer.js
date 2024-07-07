const initialState = {
  userWallet: {},
  loading: false,
  error: null,
  transactions: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_WALLET_REQUEST":
    case "DEPOSIT_MONEY_REQUEST":
    case "GET_WALLET_TRANSCTION_REQUEST":
    case "TRANSFER_MONEY_REQUEST":
      return { ...state, loading: true, error: null };

    case "GET_WALLET_TRANSCTION_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        transactions: action.payload,
      };

    case "GET_USER_WALLET_SUCCESS":
    case "TRANSFER_MONEY_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        userWallet: action.payload,
      };
    case "DEPOSIT_MONEY_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        userWallet: action.payload,
      };

    case "DEPOSIT_MONEY_FAILURE":
    case "GET_USER_WALLET_FAILURE":
    case "TRANSFER_MONEY_FAILURE":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default walletReducer;
