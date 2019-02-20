import { GOT_ALL_USERS } from "../actions/user.action";

export const initialState = {
  users: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export default rootReducer;
