import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersApi = {
    getAddUsers: (pageNumber, countUsersOnPage) => {
        return instance.get(`users?page=${pageNumber}&count=${countUsersOnPage}`)
            .then(response => {
                return response.data
            })
    },
    getAddUsers2: (el, countUsersOnPage) => {
        return instance.get(`users?page=${el}&count=${countUsersOnPage}`)
            .then(response => {
                return response.data
            })
    },
    deleteUnfollow: (id) => {
        return instance.delete(`follow/` + id)
    },
    postFollow: (id) => {
        return instance.post(`follow/` + id)
    },
}
export const userProfileApi = {
    getProfile: (userId) => {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}

export const authApi = {
    login:({email,password,rememberMe=false,captcha=true})=>{
        return instance.post('auth/login',{email,password,rememberMe,captcha})
        .then(response => {
            return response.data
        })
    },
    getMeProfile: () => {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    }
}

export const myProfileApi = {
    getStatus: (myUserId) => {
        return instance.get(`profile/status/` + myUserId)
            .then(response => {
                return response.data
            })
    },
    updateStatus:(status)=>{
        return instance.put(`profile/status`,{status:status})
            .then(response => {
                return response.data
            })
    }
}
// export const usersApi={
//     getUsers:(pageNumber,countUsersOnPage)=>{
//         return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${countUsersOnPage}`,{withCredentials:true})
//         .then(response => {
//             return response.data
//         })
//     },
//     getUsers2:(el,countUsersOnPage)=>{
//         return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${countUsersOnPage}`,{withCredentials:true})
//         .then(response => {
//             return response.data
//         })
//     }
// }