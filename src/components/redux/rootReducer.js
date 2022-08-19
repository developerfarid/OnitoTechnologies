import { combineReducers } from "redux";
import userRegistrationReducer from "./userRegistration/userRegistrationReducer";

const rootReducer = combineReducers({
    user: userRegistrationReducer
})

export default rootReducer