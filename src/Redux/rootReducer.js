import { combineReducers } from "redux";
import SignupReducer from "../Pages/Signup/signupSlice/SignupSlice"


const rootReducers = combineReducers({
    signup: SignupReducer
})
export default rootReducers;