import { authApi } from "../api/api"
import { getMyProfile, getMyStatus } from "./myProfileReducer"


const SET_AUTH = 'authReducer/SET_AUTH'
export const setAuth = (data) => {
    return {
        type: SET_AUTH,
        data: data
    }
}
const SET_ERORR_LOGIN = 'authReducer/SET_ERORR_LOGIN'
export const setErorrLogin = (error) => {
    return {
        type: SET_ERORR_LOGIN,
        error: error
    }
}


const standartStateAuthData = {
    authData: {
        data: {
            id: null,
            login: 'No logins'
        },
        resultCode: null
    },
    errorLogin: false
}


const authReducer = (state = standartStateAuthData, action) => {
    switch (action.type) {
        case SET_AUTH: {
            return {
                ...state,
                authData: { ...action.data }
            }
        }
        case SET_ERORR_LOGIN: {
            return {
                ...state,
                errorLogin: !state.errorLogin
            }
        }
        default: return state
    }
}

export const postLogin = (formData) => async (dispatch) => {
    const data = await authApi.login(formData)
    data.resultCode === 0 ? dispatch(getAuth()) : dispatch(setErorrLogin())
    setTimeout(() => dispatch(setErorrLogin()), 10000)
}

export const deleteLogin = () => async (dispatch) => {
    const data = await authApi.logaut()
    if (data.resultCode === 0) {
        alert('You logaut')
        dispatch(getAuth())
    }
}

export const getAuth = () => async (dispatch) => {
    const data = await authApi.getAuthProfile()
    setTimeout(() => dispatch(setAuth(data)), 1000)
    if (data.resultCode === 0) {
        dispatch(getMyProfile(data.data.id))
        dispatch(getMyStatus(data.data.id))
    }


}

export default authReducer