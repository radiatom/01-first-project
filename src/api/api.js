import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    // headers: {
    //     "API-KEY": "84c765f5-9aa4-4ed5-8edd-fa5b35cd4f49"
    // }
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
    logaut: () => {
        return instance.delete('auth/login')
            .then(response => {
                return response.data
            })
    },
    login: ({ email, password, rememberMe = false, captcha = true }) => {
        return instance.post('auth/login', { email, password, rememberMe, captcha })
            .then(response => {
                return response.data
            })
    },
    getAuthProfile: () => {
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
    updateStatus: (status)=> {
        return instance.put(`profile/status`, { status: status })
            .then(response => {
                return response.data
            })
    },
    putAvatar: (file) => {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            return response.data
        })
    }
}
