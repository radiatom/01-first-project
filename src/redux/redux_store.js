import { combineReducers, legacy_createStore } from "redux";
import dialogReducer from "./dialogReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
const redusers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    userProfile: userProfileReducer,
    auth: authReducer,
})

const store = legacy_createStore(redusers)

window.store = store

export default store