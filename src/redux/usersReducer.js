const SET_PAGE = 'SET_PAGE'
export const setPageActionCreater = (number) => {
    return {
        type: SET_PAGE,
        number: number
    }
}

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const setTotalCountActionCreater = (num) => {
    return {
        type: SET_TOTAL_COUNT,
        num: num
    }
}

const ADD_USERS = 'ADD_USERS'
export const addUsersActionCreater = (users) => {
    return {
        type: ADD_USERS,
        users: users
    }
}

const FOLLOW = 'FOLLOW'
export const followActionCreater = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

const UNFOLLOW = 'UNFOLLOW'
export const unfollowActionCreater = (userId) => {
    return {
        type: UNFOLLOW,
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
        default: return state
    }
}

export default usersReducer