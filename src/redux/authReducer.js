import { authApi } from "../api/api"


const SET_AUTH = 'SET_AUTH'
export const setAuth = (data) => {
    return {
        type: SET_AUTH,
        data:data
    }
}
    // my idUser 27556
    // state.auth.authData.data.id,
const standartStateAuthData = {
    authData: {
        data:{
            // id тимчасове бо теба розібратись чому данні з сервера приходять не своєчасно
            id:27556,
            login:'No logins'
        }
    }
}

const authReducer = (state = standartStateAuthData, action) => {
    switch (action.type) {
        case SET_AUTH: {
            return {
                ...state,
                authData:{...action.data}
            }
        }
        default:
            return state
    }

}

export const getAuth=()=>{
    return(dispatch)=>{
        authApi.getMeProfile()
            .then(data => {
                dispatch(setAuth(data))
            })
    }
}

export default authReducer