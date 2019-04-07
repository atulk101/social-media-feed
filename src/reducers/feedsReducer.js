import { GET_FEEDS, ADD_TWEET } from "../actions/types";
const initialState = {
  feeds: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDS:
      return {
        ...state,
        feeds: [action.payload.feeds, ...state.feeds]
      };
    case ADD_TWEET:
      return {
        ...state,
        feeds: [action.payload.feeds, ...state.feeds]
      };
    default:
      return state;
  }
}
