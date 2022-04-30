import axios from "axios";
import { url } from "../../api/index";
import { toast } from "react-toastify";
import { SIGNIN, SIGNOUT, USER_LOADED } from "../types/types";

export const signIn = (user) => (dispatch) => {
  console.log("Log in");
  axios
    .post(`${url}/auth/login`, user)
    .then((data) => {
      console.log({ action: data });
      localStorage.setItem("token", data.data.access_token);

      dispatch({
        type: SIGNIN,
        token: data.data.access_token,
      });
    })
    .catch((error) => {
      console.log(error.response);

      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: USER_LOADED,
        token,
      });
    } else return null;
  };
};

export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGNOUT,
  });
};
