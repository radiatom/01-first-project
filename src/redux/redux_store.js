import { combineReducers, legacy_createStore } from "redux";
import dialogReducer from "./dialogReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


const redusers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer
})

const store = legacy_createStore(redusers)

export default store