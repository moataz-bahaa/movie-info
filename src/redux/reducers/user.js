import { SIGN_IN, SIGN_OUT, UPDATE_USER_INFO } from "../actions/user";

const user = (state = null, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...action.currentUser
      }
    case SIGN_OUT:
      return null;
    case UPDATE_USER_INFO:
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}

export default user;