import { LOADING } from "../actions/shared";

const initailState = {
  loading: false
}

const shared = (state = initailState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.value
      };
    default:
      return state;
  }
};


export default shared;