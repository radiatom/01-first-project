import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import dialogReducer from "./dialogReducer";
import navbarReducer from "./navbarReducer";
import myProfileReducer from "./myProfileReducer";
import usersReducer from "./usersReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

const redusers = combineReducers({
    dialogsPage: dialogReducer,
    myProfilePage: myProfileReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    userProfile: userProfileReducer,
    auth: authReducer,
    form: formReducer,
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = legacy_createStore(redusers,composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware),) це оригінальний творець, а веще перероблений, щоб можна 
// було користуватись розширенням хрома redux DevTols

window.store = store

export default store