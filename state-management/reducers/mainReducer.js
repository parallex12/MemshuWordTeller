import { GET_CATEGORIES } from "../types/types";
const initialState = {
  get_categories: null
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        get_categories: action.payload,
      };
    default:
      return state;
  }
};
export default mainReducer;
