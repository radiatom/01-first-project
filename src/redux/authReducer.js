
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
            login:'null'
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

export default authReducer