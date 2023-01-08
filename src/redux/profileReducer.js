const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
export const updateNewPostTextActionCreater = (newTextPost) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newTextPost: newTextPost
    }
}
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
        case ADD_POST:
            const newPost = {
                id: state.myPostsData.length + 1, massage: state.newPostTextData, likeColum: 0
            }
            state.myPostsData.push(newPost)
            state.newPostTextData = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostTextData = action.newTextPost
            return state
        default:
            return state
    }

}

export default profileReducer