import api from "@/config/api";

export const getUserWatchlist = () => async (dispatch) => {
  dispatch({ type: "GET_USER_WATCHLIST_REQUEST" });
  try {
    const response = await api.get(`/api/watchlist/user`);
    console.log("get user watchlist ", response.data);
    dispatch({ type: "GET_USER_WATCHLIST_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_WATCHLIST_FAILURE", payload: error.message });
    console.log("error user watchlist", error.response.data);
  }
};

export const addItemToWatchlist =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: "ADD_COIN_TO_WATCHLIST_REQUEST" });
    try {
      const response = await api.patch(
        `/api/watchlist/add/coin/${coinId}`,
        {},

        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log("add item watchlist ", response.data);
      dispatch({
        type: "ADD_COIN_TO_WATCHLIST_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "ADD_COIN_TO_WATCHLIST_FAILURE",
        payload: error.message,
      });
      console.log("error add item", error.response.data);
    }
  };
