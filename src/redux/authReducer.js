import { authApi } from "../api/api"
import { getMyProfile } from "./myProfileReducer"


const SET_AUTH = 'SET_AUTH'
export const setAuth = (data) => {
    return {
        type: SET_AUTH,
        data: data
    }
}
const SET_ERORR_LOGIN = 'SET_ERORR_LOGIN'
export const setErorrLogin = (error) => {
    return {
        type: SET_ERORR_LOGIN,
        error:error
    }
}
const standartStateAuthData = {
    authData: {
        data: {
            // id тимчасове бо  данні з сервера приходять не своєчасно
            // id:27556,
            id: null,
            login: 'No logins'
        },
        resultCode: ''
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

export const postLogin = (formData) => {
    return (dispatch) => {
        authApi.login(formData)
            .then(data => {
                data.resultCode === 0 ? dispatch(getAuth()) :
                    dispatch(setErorrLogin())
                    setTimeout(()=>dispatch(setErorrLogin()),10000)
            }
            )
    }
}
export const deleteLogin = () => {
    return (dispatch) => {
        authApi.logaut()
            .then(data => {
                if (data.resultCode === 0) {
                    alert('You logaut')
                    dispatch(getAuth())
                }
            })
    }
}

export const getAuth = () => {
    return (dispatch) => {
        authApi.getAuthProfile()
            .then(data => {
                dispatch(setAuth(data))
                dispatch(getMyProfile(data.data.id))
            })
    }
}

export default authReducer