import { authApi } from "../api/api"


const SET_AUTH = 'SET_AUTH'
export const setAuth = (data) => {
    return {
        type: SET_AUTH,
        data:data
    }
}

const standartStateAuthData = {
    authData: {
        data:{
            // id тимчасове бо теба розібратись чому данні з сервера приходять не своєчасно
            id:27556,
            // id:null,
            login:'No logins'
        },
        resultCode:''
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

export const postLogin=(formData)=>{
    return(dispatch)=>{
        authApi.login(formData)
            .then(data => {
                if(data.resultCode===0){
                    dispatch(getAuth())
                }
            })
    }
}
export const deleteLogin=()=>{
    return(dispatch)=>{
        authApi.logaut()
            .then(data => {
                if(data.resultCode===0){
                    alert('You logaut')
                    dispatch(getAuth())
                }
            })
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