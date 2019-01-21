import {
  USERS_LOAD,
  USERS_LOAD_OK,
  USERS_LOAD_ERROR
} from "../../constants/actions";
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
