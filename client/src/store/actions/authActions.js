import { LOGIN, LOGOUT, REGISTER, CURRENT_USER, LOGIN_FAIL } from "./types";
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

export const login = (cred, setErrorHandler) => {
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
        if (error.response) {
          dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};

export const loadUser = () => {
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
