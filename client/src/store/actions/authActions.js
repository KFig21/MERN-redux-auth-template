import { LOGIN, LOGOUT, REGISTER, CURRENT_USER } from "./types";
import axios from "axios";
import { url } from "../../helpers/Api";

export const register = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/register`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: REGISTER,
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const login = (cred) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/login`, cred)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: LOGIN,
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const logout = (cred) => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};

export const loadUser = (user) => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    if (token) {
      dispatch({
        type: CURRENT_USER,
        token,
      });
    } else {
      return null;
    }
  };
};
