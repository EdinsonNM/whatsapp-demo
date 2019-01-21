const initialState = {
  logged: false
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_LOGIN":
      return {
        ...state,
        logged: true
      };
    default:
      return state;
  }
}
