import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import dialogReducer from "./dialogReducer";
import navbarReducer from "./navbarReducer";
import myProfileReducer from "./myProfileReducer";
import usersReducer from "./usersReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";


const redusers = combineReducers({
    dialogsPage: dialogReducer,
    myProfilePage: myProfileReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    userProfile: userProfileReducer,
    auth: authReducer,
})

const store = legacy_createStore(redusers, applyMiddleware (thunkMiddleware))

window.store = store

export default store