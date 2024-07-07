import api, { API_BASE_URL } from "@/config/api";
import axios from "axios";

export const getCoinList = (page) => async (dispatch) => {
  dispatch({ type: "FETCH_COIN_LIST_REQUEST" });
  const baseURL = "http://localhost:5454";
  try {
    const { data } = await axios.get(`${baseURL}/coins?page=${page}`);
    console.log("coin list ", data);
    dispatch({ type: "FETCH_COIN_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_COIN_LIST_FAILURE", payload: error.message });
    console.log(error);
  }
};

export const getTop50CoinList = () => async (dispatch) => {
  dispatch({ type: "FETCH_TOP_50_COIN_LIST_REQUEST" });

  try {
    const response = await axios.get(`${API_BASE_URL}/coins/top50`);

    console.log("top 50 coin list ", response.data);
    dispatch({
      type: "FETCH_TOP_50_COIN_LIST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_TOP_50_COIN_LIST_FAILURE",
      payload: error.message,
    });
    console.log(error);
  }
};

export const fetchMarketChart =
  ({ coinId, days, jwt }) =>
  async (dispatch) => {
    dispatch({ type: "FETCH_MARKET_CHART_REQUEST" });

    try {
      const response = await api.get(`/coins/${coinId}/chart?days=${days}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      console.log("top 50 coin list ", response.data);
      dispatch({
        type: "FETCH_MARKET_CHART_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_MARKET_CHART_FAILURE",
        payload: error.message,
      });
      console.log(error);
    }
  };

export const fetchCoinById = (coinId) => async (dispatch) => {
  dispatch({ type: "FETCH_COIN_BY_ID_REQUEST" });

  try {
    const response = await axios.get(`${API_BASE_URL}/coins/${coinId}`);

    console.log(" coin by id ", response.data);
    dispatch({
      type: "FETCH_COIN_BY_ID_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_COIN_BY_ID_FAILURE",
      payload: error.message,
    });
    console.log(error);
  }
};

export const fetchCoinDetails =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: "FETCH_COIN_DETAILS_REQUEST" });

    try {
      const response = await api.get(`/coins/details/${coinId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      console.log(" coin details", response.data);
      dispatch({
        type: "FETCH_COIN_DETAILS_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_COIN_DETAILS_FAILURE",
        payload: error.message,
      });
      console.log(error);
    }
  };

export const searchCoin = (keyword) => async (dispatch) => {
  dispatch({ type: "SEARCH_COIN_REQUEST" });
  try {
    const response = await api.get(`/coins/search?q=${keyword}`);

    console.log("search coin ", response.data);
    dispatch({
      type: "SEARCH_COIN_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "SEARCH_COIN_FAILURE",
      payload: error.message,
    });
    console.log(error);
  }
};
