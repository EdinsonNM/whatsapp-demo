const initialState = {
  progress: false,
  data: [],
  page: 0
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "USERS_LOAD":
      return {
        ...state,
        page: state.page + 1,
        progress: true
      };
    case "USERS_LOAD_OK":
      return {
        ...state,
        data: [...state.data, ...action.payload],
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
