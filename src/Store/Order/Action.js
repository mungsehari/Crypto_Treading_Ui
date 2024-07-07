import api from "@/config/api";

export const payOrder =
  ({ jwt, orderData, amount }) =>
  async (dispatch) => {
    dispatch({ type: "PAY_ORDER_REQUEST" });
    try {
      const response = await api.post(`/api/orders/pay`, orderData, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("order success ", response.data, amount);
      dispatch({ type: "PAY_ORDER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "PAY_ORDER_FAILURE", payload: error.message });
      console.log(error);
    }
  };

export const getOrderById =
  ({ jwt, orderId }) =>
  async (dispatch) => {
    dispatch({ type: "GET_ORDER_REQUEST" });
    try {
      const response = await api.get(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("get orders  ", response.data);
      dispatch({ type: "GET_ORDER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_ORDER_FAILURE", payload: error.message });
      console.log(error);
    }
  };

export const getAllOrdersForUser =
  ({ jwt, orderType, assetSymbol }) =>
  async (dispatch) => {
    dispatch({ type: "GET_ALL_ORDER_REQUEST" });
    try {
      const response = await api.get(`/api/orders`, {
        headers: { Authorization: `Bearer ${jwt}` },
        params: { order_type: orderType, asset_symbol: assetSymbol },
      });
      console.log("get All orders for user  ", response.data);
      dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_ALL_ORDER_FAILURE", payload: error.message });
      console.log(error);
    }
  };
