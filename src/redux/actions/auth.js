import { AUTH_LOGIN } from "../../constants/actions";
export const loginAction = (user, password) => ({
  type: AUTH_LOGIN,
  payload: {
    user,
    password
  }
});
