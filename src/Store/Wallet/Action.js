import api from "@/config/api";

export const getUserWallet = (jwt) => async (dispatch) => {
  dispatch({ type: "GET_USER_WALLET_REQUEST" });
  try {
    const response = await api.get(`/api/wallet`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("get user wallet ", response.data);
    dispatch({ type: "GET_USER_WALLET_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_WALLET_FAILURE", payload: error.message });
    console.log(error);
  }
};

export const getWalletTransactions = (jwt) => async (dispatch) => {
  dispatch({ type: "GET_WALLET_TRANSCTION_REQUEST" });
  try {
    const response = await api.get(`/api/transactions`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("get user transaction ", response.data);
    dispatch({
      type: "GET_WALLET_TRANSCTION_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_WALLET_TRANSCTION_FAILURE",
      payload: error.message,
    });
    console.log(error);
  }
};

export const depositMoney =
  ({ jwt, orderId, paymentId, navigate }) =>
  async (dispatch) => {
    dispatch({ type: "DEPOSIT_MONEY_REQUEST" });
    try {
      const response = await api.put(`/api/wallet/deposit`, null, {
        params: {
          order_id: orderId,
          payment_id: paymentId,
        },
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({
        type: "DEPOSIT_MONEY_SUCCESS",
        payload: response.data,
      });
      navigate("/wallet");

      console.log("deposit money ", response.data);
    } catch (error) {
      dispatch({
        type: "DEPOSIT_MONEY_FAILURE",
        payload: error.message,
      });
      console.log(error);
    }
  };

export const paymentHandler =
  ({ jwt, amount, paymentMethod }) =>
  async (dispatch) => {
    dispatch({ type: "DEPOSIT_MONEY_REQUEST" });
    try {
      const response = await api.post(
        `/api/payment/${paymentMethod}/amount/${amount}`,
        null,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      window.location.href = response.data.payment_url;

      //   dispatch({
      //     type: "DEPOSIT_MONEY_SUCCESS",
      //     payload: response.data,
      //   });
      navigate("/wallet");
      console.log("payment Handler ", response.data);
    } catch (error) {
      dispatch({
        type: "DEPOSIT_MONEY_FAILURE",
        payload: error.message,
      });
      console.log(error);
    }
  };

export const transferMoney =
  ({ jwt, walletId, reqData }) =>
  async (dispatch) => {
    dispatch({ type: "TRANSFER_MONEY_REQUEST" });
    try {
      const response = await api.put(
        `/api/wallet/${walletId}/transfer`,
        reqData,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      window.location.href = response.data.payment_url;

      dispatch({
        type: "TRANSFER_MONEY_SUCCESS",
        payload: response.data,
      });
      navigate("/wallet");
      console.log("transfer money data ", response.data);
    } catch (error) {
      dispatch({
        type: "TRANSFER_MONEY_FAILURE",
        payload: error.message,
      });
      console.log(error);
    }
  };
