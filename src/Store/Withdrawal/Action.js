import api from "@/config/api";

export const withdrawalRequest =
  ({ amount, jwt }) =>
  async (dispatch) => {
    dispatch({ type: "WITHDRAWAL_REQUEST" });
    try {
      const response = await api.post(`/api/withdrawal/${amount}`, null, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("withdrawal data ", response.data);
      dispatch({ type: "WITHDRAWA_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "WITHDRAWA_FAILURE", payload: error.message });
      console.log(error);
    }
  };

export const proceedWithdrawal =
  ({ id, jwt, accept }) =>
  async (dispatch) => {
    dispatch({ type: "WITHDRAWAL_PROCEED_REQUEST" });
    try {
      const response = await api.patch(
        `/api/admin/withdrawal/${id}/proceed/${accept}`,
        null,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log("proceed Withdrawal  ", response.data);
      dispatch({ type: "WITHDRAWAL_PROCEED_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "WITHDRAWAL_PROCEED_FAILURE", payload: error.message });
      console.log(error);
    }
  };

export const getWithdrawalHistroy =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: "GET_WITHDRAWAL_HISTROY_REQUEST" });
    try {
      const response = await api.get(`/api/withdrawal`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("get Withdrawal Histroy   ", response.data);
      dispatch({
        type: "GET_WITHDRAWAL_HISTROY_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_WITHDRAWAL_HISTROY_FAILURE",
        payload: error.message,
      });
      console.log(error);
    }
  };

export const getAllWithdrawalRequest = (jwt) => async (dispatch) => {
  dispatch({ type: "GET_WITHDRAWAL_REQUEST_REQUEST" });
  try {
    const response = await api.get(`/api/admin/withdrawal`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("get all  Withdrawal req   ", response.data);
    dispatch({
      type: "GET_WITHDRAWAL_REQUEST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_WITHDRAWAL_REQUEST_FAILURE",
      payload: error.message,
    });
    console.log(error);
  }
};

export const addPaymentDetails =
  ({ paymentDetails, jwt }) =>
  async (dispatch) => {
    dispatch({ type: "ADD_PAYMENT_DETAILS_REQUEST" });
    try {
      const response = await api.post(`/api/payment-details`, paymentDetails, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("add PaymentDetails   ", response.data);
      dispatch({
        type: "ADD_PAYMENT_DETAILS_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PAYMENT_DETAILS_FAILURE",
        payload: error.message,
      });
      console.log(error);
    }
  };

export const getPaymentDetails =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: "GET_PAYMENT_DETAILS_REQUEST" });
    try {
      const response = await api.get(`/api/payment-details`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("get PaymentDetails   ", response.data);
      dispatch({
        type: "GET_PAYMENT_DETAILS_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_PAYMENT_DETAILS_FAILURE",
        payload: error.message,
      });
      console.log(error);
    }
  };
