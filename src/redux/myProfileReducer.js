import { userProfileApi, myProfileApi,authApi } from "../api/api"


const SET_STATUS = 'SET_STATUS'
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}

const UPDATE_STATUS = 'UPDATE_STATUS'
export const update_status = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    }
}
const SET_TEXT_POST = 'SET_TEXT_POST'
export const setTextPost = (postText) => {
    return {
        type: SET_TEXT_POST, postText: postText
    }
}

const ADD_POST = 'ADD-POST'
export const addPost = () => {
    return {
        type: ADD_POST
    }
}

const SET_MY_ROFILE = 'SET_MY_ROFILE'
export const setMyProfile = (data) => {
    return {
        type: SET_MY_ROFILE,
        data: data
    }
}

const SET_MY_iD = 'SET_MY_iD'
export const setMyId = (id) => {
    return {
        type: SET_MY_iD,
        id
    }
}

const standartStateMyProfileData = {
    myId:null,
    status: '',
    myProfileData: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: null,
            twitter: "",
            instagram: "",
            youtube: null,
            github: "",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 1,
        photos: {
            small: "#",
            large: "#"
        }
    },
    myPostsData: [
        { id: 1, massage: 'Hi, how a you?', likeColum: 15 },
        { id: 2, massage: 'Its my first post', likeColum: 999 }
    ],
    newPostTextData: ''
}
const myProfileReducer = (state = standartStateMyProfileData, action) => {
    switch (action.type) {
        case SET_TEXT_POST:
            return {
                ...state,
                newPostTextData: action.postText
            }

        case ADD_POST:
            const newPost = {
                id: state.myPostsData.length + 1, massage: state.newPostTextData, likeColum: 0
            }
            return {
                ...state,
                myPostsData: [newPost, ...state.myPostsData],
                newPostTextData: ''
            }
        case SET_MY_ROFILE:
            return {
                ...state,
                myProfileData: { ...action.data }
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_MY_iD:
            return {...state,
                myId: action.id
            }
        default:
            return state
    }

}
export const getMyUserId = () => {
    return (dispatch) => {
        authApi.getMeProfile()
            .then(data => {
                dispatch(setMyId(data.data.id))
            })
    }
}


export const getMyProfile = (userId) => {
    return (dispatch) => {
        userProfileApi.getProfile(userId)
            .then(data => {
                dispatch(setMyProfile(data))
            })
    }
}

export const getMyStatus = (myUserId) => {
    return (dispatch) => {
        myProfileApi.getStatus(myUserId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const putStatusText = (statusText) => {
    return (dispatch) => {
        myProfileApi.updateStatus(statusText)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(statusText))
                }
            })
    }
}

export default myProfileReducer