import { FILTER_CONTACTS } from "redux/constants";

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};