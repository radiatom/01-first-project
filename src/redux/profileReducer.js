const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const updateNewPostTextActionCreater = (newTextPost) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newTextPost: newTextPost
    }
}

const ADD_POST = 'ADD-POST'
export const addPosstActionCreater = () => {
    return {
        type: ADD_POST
    }
}

const standartStateProfileData = {
    myPostsData: [
        { id: 1, massage: 'Hi, how a you?', likeColum: 15 },
        { id: 2, massage: 'Its my first post', likeColum: 999 }
    ],
    newPostTextData: ''
}
const profileReducer = (state = standartStateProfileData, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostTextData: action.newTextPost
            }
            // state.newPostTextData = action.newTextPost
            // return state
        case ADD_POST:
            const newPost = {
                id: state.myPostsData.length + 1, massage: state.newPostTextData, likeColum: 0
            }
            return{
                ...state,
                myPostsData:[ newPost, ...state.myPostsData],
                newPostTextData : ''
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