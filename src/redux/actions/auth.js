import { AUTH_LOGIN, AUTH_LOGIN_OK, AUTH_LOGIN_ERROR, AUTH_USER_ME } from '../../constants/actions';
export const loginAction = (email, password) => ({
  type: AUTH_LOGIN,
  payload: {
    email,
    password
  }
});

export const loginActionOk = payload => ({
  type: AUTH_LOGIN_OK,
  payload
});

export const loginActionError = payload => ({
  type: AUTH_LOGIN_ERROR,
  payload
});

export const userMeAction = payload => ({
  type: AUTH_USER_ME,
  payload
});
