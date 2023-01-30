import { authApi } from "../api/api"


const SET_AUTH = 'SET_AUTH'
export const setAuth = (data) => {
    return {
        type: SET_AUTH,
        data:data
    }
}

// const SET_CODE = 'SET_CODE'
// export const setCode = () => {
//     return {
//         type: SET_CODE,
//     }
// }

    // my idUser 27556
    // state.auth.authData.data.id,
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
        // case SET_CODE:
        //     return{
        //         ...state,
        //         authData:{...state.authData,
        //             resultCode:0
        //         }

        //     }
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

export const getAuth=()=>{
    return(dispatch)=>{
        authApi.getMeProfile()
            .then(data => {
                dispatch(setAuth(data))
            })
    }
}

export default authReducer