import { combineReducers } from "redux";
import SignupReducer from "../Pages/Signup/signupSlice/SignupSlice"
import LoginSlice from "../Pages/Login/LoginSlice";
import ForgetPwd from "../Pages/ForgetPwd/ForgetPwdSlice";

const rootReducers = combineReducers({
    signup: SignupReducer,
    login:LoginSlice,
    forget:ForgetPwd
})
export default rootReducers;