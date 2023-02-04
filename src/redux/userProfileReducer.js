import { userProfileApi } from "../api/api"


const SET_PROFILE = 'userProfileReducer/SET_PROFILE'
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
                profileData: action.profile
            }
        }
        default:
            return state
    }
}

export const getProfile = (router) => async (dispatch) => {
    const userId = router.params.userId
    const data = await userProfileApi.getProfile(userId)
    dispatch(setProfile(data))
}

export default userProfileReducer