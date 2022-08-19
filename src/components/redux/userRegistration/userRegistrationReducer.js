import * as actionTypes from "./actionTypes";
const instialstate = [];
 const userRegistrationReducer = (state = instialstate, action) => {
  switch (action.type) {
    case actionTypes.ADDUSER:
      return {};

    case actionTypes.UPDATEUSER:
      return {};
    case actionTypes.DELETEUSER:
      return {};
    case actionTypes.SINGLEUSER:
      return {};

    default:
      return state;
  }
};
export default userRegistrationReducer

