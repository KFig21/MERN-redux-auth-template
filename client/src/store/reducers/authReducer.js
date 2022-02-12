import { LOGIN, LOGOUT, REGISTER, CURRENT_USER } from "../actions/types";
import jwtDecode from "jwt-decode";

const initialState = {
  username: null,
  email: null,
  firstname: null,
  lastname: null,
  theme: null,
  token: localStorage.getItem("token"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
    case LOGIN:
    case REGISTER:
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        theme: user.theme,
        _id: user._id,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        username: null,
        email: null,
        firstname: null,
        lastname: null,
        theme: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
