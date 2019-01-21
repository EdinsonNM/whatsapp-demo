const initialState = {
  progress: false,
  data: []
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "USERS_LOAD":
      return {
        ...state,
        progress: true
      };
    case "USERS_LOAD_OK":
      return {
        ...state,
        data: action.payload,
        progress: false
      };
    case "USERS_LOAD_ERROR":
      return {
        ...state,
        data: [],
        progress: false,
        error: "Ocurrio un error!!!"
      };
    default:
      return state;
  }
}
