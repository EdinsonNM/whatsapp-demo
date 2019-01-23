import { AUTH_LOGIN_ERROR, AUTH_LOGIN_OK } from '../../constants/actions';
const initialState = {
  logged: false
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_LOGIN":
      return {
        ...state,
      };
    case AUTH_LOGIN_OK:
      return {
        ...state,
        logged: true
      };
    default:
      return state;
  }
}
