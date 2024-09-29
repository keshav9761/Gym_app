import { combineReducers } from "redux";
import SignupReducer from "../Pages/Signup/signupSlice/SignupSlice"
import LoginSlice from "../Pages/Login/LoginSlice";

const rootReducers = combineReducers({
    signup: SignupReducer,
    login:LoginSlice
})
export default rootReducers;