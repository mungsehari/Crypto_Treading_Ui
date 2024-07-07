import axios from "axios";

export const register = (userData) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  const baseUrl = "http://localhost:5454";
  try {
    const res = await axios.post(`${baseUrl}/auth/signup`, userData);
    const user = res.data;
    console.log(user);
    dispatch({ type: "REGISTER_SUCCESS", payload: user.jwt });
    localStorage.setItem("jwt", user.jwt);
  } catch (error) {
    dispatch({ type: "REGISTER_FAILURE", payload: error });
    console.log(error);
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  const baseUrl = "http://localhost:5454";
  try {
    const res = await axios.post(`${baseUrl}/auth/signin`, userData.data);
    const user = res.data;
    dispatch({ type: "LOGIN_SUCCESS", payload: user.jwt });
    localStorage.setItem("jwt", user.jwt);
    userData.navigate("/");
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
    console.log(error);
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUEST" });
  const baseUrl = "http://localhost:5454";
  try {
    const res = await axios.get(`${baseUrl}/api/users/profile`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    const user = res.data;
    dispatch({ type: "GET_USER_SUCCESS", payload: user });
  } catch (error) {
    dispatch({ type: "GET_USER_FAILURE", payload: error.response.data.msg });
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: "LOGOUT" });
};
