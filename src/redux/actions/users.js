import {
    USERS_LOAD,
    USERS_LOAD_OK,
    USERS_LOAD_ERROR,
    USERS_REGISTER_LOGIN,
    USERS_REGISTER_LOGIN_OK
} from '../../constants/actions';
export const loadUsers = () => ({
  type: USERS_LOAD
});
export const loadUsersOk = payload => ({
  type: USERS_LOAD_OK,
  payload
});
export const loadUsersError = payload => ({
  type: USERS_LOAD_ERROR,
  payload
});

// registrar login de usuario
export const registerUserLoginAction = userId => ({
  type: USERS_REGISTER_LOGIN ,
  payload: {
    userId
  }
})
export const registerUserLoginActionOk = payload => ({
  type: USERS_REGISTER_LOGIN_OK,
  payload
})

export const registerUserLoginActionError = payload => ({
  type: USERS_REGISTER_LOGIN_OK ,
  payload
})