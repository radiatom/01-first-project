import { userProfileApi } from "../api/api"


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const updateNewPostText = (newTextPost) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newTextPost: newTextPost
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
        data:data
    }
}

const standartStateMyProfileData = {
    status:'hello',
    // my idUser 27556
    myProfileData: {
        aboutMe: "я крута багата людина",
        contacts: {
            facebook: "facebook.com",
            website: null,
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "грошей стільки , що нема куди подіти",
        fullName: "Arsen Mozol",
        userId: 1,
        photos: {
            small: "http://viper-tuning.com.ua/pic/image/2012/11/tyuning-Audi-Q7.jpg",
            large: "http://viper-tuning.com.ua/pic/image/2012/11/tyuning-Audi-Q7.jpg"
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostTextData: action.newTextPost
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
            return{
                ...state,
                myProfileData:{...action.data}
            }
        default:
            return state
    }

}

export const getMyProfile=(userId)=>{
    return(dispatch)=>{
        userProfileApi.getProfile(userId)
            .then(data => {
                dispatch(setMyProfile(data))
            })
    }
}

export default myProfileReducer