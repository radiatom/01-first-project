import{ usersApi }from './../api/api'



const SET_PAGE = 'SET_PAGE'
export const setPage = (number) => {
    return {
        type: SET_PAGE,
        number: number
    }
}

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const setTotalCount = (num) => {
    return {
        type: SET_TOTAL_COUNT,
        num: num
    }
}

const ADD_USERS = 'ADD_USERS'
export const addUsers = (users) => {
    return {
        type: ADD_USERS,
        users: users
    }
}

const FOLLOW = 'FOLLOW'
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

const UNFOLLOW = 'UNFOLLOW'
export const unfollow = (userId) => {

    return {
        type: UNFOLLOW,
        userId: userId
    }
}

const IS_FETCHING = 'IS_FETCHING'
export const toggleIsFetching = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching: isFetching,
    }
}

const PROGRESS_FOLLOWING = 'PROGRESS_FOLLOWING'
export const progressFollowing = (progress, userId) => {
    return {
        type: PROGRESS_FOLLOWING,
        progress: progress,
        userId: userId
    }
}

const standartStateUsersData = {
    users: [
        // { id: 1, userId: 1, firstName: 'Arsen', lastName: 'Mozol', st: 'deweloper', cityName: 'Lutsk', countryName: 'Ukraine', subscribe: false, img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
        // { id: 2, userId: 2, firstName: 'Andrew', lastName: 'Dub', st: 'Junior', cityName: 'Kyiv', countryName: 'Ukraine', subscribe: false, img: 'https://pngimg.com/uploads/thinking_man/thinking_man_PNG11613.png' },
        // { id: 3, userId: 3, firstName: 'Anton', lastName: 'Klen', st: 'Midle', cityName: 'Rivne', countryName: 'Ukraine', subscribe: false, img: 'https://purepng.com/public/uploads/large/purepng.com-manmanadult-malemale-childboy-beingmens-1421526920869cscbo.png' },
        // { id: 4, userId: 4, firstName: 'Bob', lastName: 'Storm', st: 'Senior', cityName: 'Lviv', countryName: 'Ukraine', subscribe: false, img: 'https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg' },
    ],
    pageNumber: 1,
    countUsers: 100,
    countUsersOnPage: 100,
    isFetching: false,
    inProgressFollowing: [],

}

const usersReducer = (state = standartStateUsersData, action) => {
    switch (action.type) {
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                countUsers: action.num
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                pageNumber: action.number
            }
        }
        case ADD_USERS: {
            return {
                ...state, users: [...action.users]
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: [...state.users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: true }
                    }
                    return el
                })]
            }

        }
        case UNFOLLOW: {
            return {
                ...state,
                users: [...state.users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: false }
                    }
                    return el
                })]
            }
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case PROGRESS_FOLLOWING: {
            return {
                ...state,
                inProgressFollowing: action.progress === true ?
                    [...state.inProgressFollowing, action.userId]
                    : state.inProgressFollowing.filter(id => id !== action.userId)
            }
        }
        default: return state
    }
}

export const deleteUnfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(progressFollowing(true, userId))
        usersApi.deleteUnfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(progressFollowing(false, userId))
            }
            )
    }
}

export const deleteАollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(progressFollowing(true,userId))
        usersApi.postFollow(userId)
        .then(response => {
            if(response.data.resultCode===0){
                dispatch(follow(userId))
            }
            dispatch(progressFollowing(false,userId))
        }
        )
    }
}

export const openNumberPage=(number,countUsersOnPage)=>{
    return (dispatch)=>{
        dispatch(toggleIsFetching(true))
        usersApi.getAddUsers2(number, countUsersOnPage)
            .then(data => {
                let users = [...data.items]
                dispatch(addUsers(users))
                dispatch(toggleIsFetching(false))
            })
            dispatch(setPage(number))
    }
}
export const addUsersOnPage=(pageNumber,countUsersOnPage)=>{
    return (dispatch)=>{
        dispatch(toggleIsFetching(true))
        usersApi.getAddUsers(pageNumber, countUsersOnPage)
            .then(data => {
                dispatch(addUsers([...data.items]))
                dispatch(setTotalCount(data.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }
}





export default usersReducer