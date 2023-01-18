
const SET_PROFILE = 'SET_PROFILET'
export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}

const standartStateProfileData = {
    PostsData: [
        { id: 1, massage: 'Hi, how a you?', likeColum: 15 },
        { id: 2, massage: 'Its my first post', likeColum: 999 }
    ],
    profileData: {}
}

const userProfileReducer = (state = standartStateProfileData, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profileData:action.profile
            }
        }
        default:
            return state
    }

}

export default userProfileReducer