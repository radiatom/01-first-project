// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const standartStateUsersData = {
//     users: [
//         { id: 1, userId: 1, firstName: 'Arsen', lastName: 'Mozol', status: 'deweloper', cityName: 'Lutsk', countryName: 'Ukraine', subscribe: false, img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
//         { id: 2, userId: 2, firstName: 'Andrew', lastName: 'Dub', status: 'Junior', cityName: 'Kyiv', countryName: 'Ukraine', subscribe: false, img: 'https://pngimg.com/uploads/thinking_man/thinking_man_PNG11613.png' },
//         { id: 3, userId: 3, firstName: 'Anton', lastName: 'Klen', status: 'Midle', cityName: 'Rivne', countryName: 'Ukraine', subscribe: false, img: 'https://purepng.com/public/uploads/large/purepng.com-manmanadult-malemale-childboy-beingmens-1421526920869cscbo.png' },
//         { id: 4, userId: 4, firstName: 'Bob', lastName: 'Storm', status: 'Senior', cityName: 'Lviv', countryName: 'Ukraine', subscribe: false, img: 'https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg' },
//     ]
// }
// const action = {
//     type: FOLLOW,
//     userId: 1
// }


// const usersReducer = (state = standartStateUsersData, action) => {
//     let stateCopy
//     switch (action.type) {
//         case FOLLOW: {
//             return {
//                 ...state,
//                 users: [...state.users.map(el => {
//                     if (el.userId === action.userId) {
//                         return { ...el, subscribe: true }
//                     }
//                     return el
//                 })]
//             }

//         }
//         case UNFOLLOW: {
//             return {
//                 ...state,
//                 users: [...state.users.map(el => {
//                     if (el.userId === action.userId) {
//                         return { ...el, subscribe: false }
//                     }
//                     return el
//                 })]
//             }
//         }
//         default: return state
//     }
// }

// console.log(usersReducer(standartStateUsersData, action))



// const pages = () => {
//     for (let a = 1; a <= 500; a++) {
//         let obj=[]
//         obj.push(a)
//         console.log(obj)
//     }
// }
// pages()