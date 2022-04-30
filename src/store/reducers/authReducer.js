import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { SIGNIN, SIGNOUT, USER_LOADED } from "../types/types";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
    case SIGNIN:
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const user = jwtDecode(action.token);
      console.log({ reducer: user });
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user.sub,
      };
    case SIGNOUT:
      localStorage.removeItem("token");
      toast("Goodbye...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
