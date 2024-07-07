import api from "@/config/api";

export const getAssetById =
  ({ assetId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: "GET_ASSET_REQUEST" });
    try {
      const response = await api.get(`/api/asset/${assetId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("asset by id ", response.data);
      dispatch({ type: "GET_ASSET_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_ASSET_FAILURE", payload: error.message });
      console.log(error);
    }
  };

export const getAssetDetails =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: "GET_ASSET_DETAILS_REQUEST" });
    try {
      const response = await api.get(`/api/asset/coin/${coinId}/user`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("asset details.. ", response.data);
      dispatch({ type: "GET_ASSET_DETAILS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_ASSET_DETAILS_FAILURE", payload: error.message });
      console.log(error);
    }
  };

export const getUserAssets =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: "GET_USER_ASSETS_REQUEST" });
    try {
      const response = await api.get(`/api/asset`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(" users assets  .. ", response.data);
      dispatch({ type: "GET_USER_ASSETS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_USER_ASSETS_FAILURE", payload: error.message });
      console.log(error);
    }
  };
