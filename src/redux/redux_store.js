import { combineReducers, legacy_createStore } from "redux";
import dialogReducer from "./dialogReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";


const redusers = combineReducers({
    dialogsData: dialogReducer,
    profileData: profileReducer,
    navbarData: navbarReducer
})

const store = legacy_createStore(redusers)

export default store