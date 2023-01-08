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
const profileReducer = (state, action) => {
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