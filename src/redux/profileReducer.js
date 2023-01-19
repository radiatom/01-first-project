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

const standartStateProfileData = {
    // 27556
    profileData: {
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
        lookingForAJobDescription: "грошей стільки б що нема куди подіти",
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
const profileReducer = (state = standartStateProfileData, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostTextData: action.newTextPost
            }
        // state.newPostTextData = action.newTextPost
        // return state
        case ADD_POST:
            const newPost = {
                id: state.myPostsData.length + 1, massage: state.newPostTextData, likeColum: 0
            }
            return {
                ...state,
                myPostsData: [newPost, ...state.myPostsData],
                newPostTextData: ''
            }
        // newPost добавляється на початку масива щоб відображався на сторінці зверху а не знизу

        // state.myPostsData.push(newPost)
        // state.newPostTextData = ''
        // return state
        default:
            return state
    }

}

export default profileReducer