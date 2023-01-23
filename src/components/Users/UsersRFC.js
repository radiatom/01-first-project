// import React from 'react';
// import axios from 'axios';
// import s from './Users.module.css'



// const Users = (props) => {
//     const usersData = [
//         { id: 1, userId: 1, firstName: 'Arsen', lastName: 'Mozol', st: 'deweloper', cityName: 'Lutsk', countryName: 'Ukraine', subscribe: false, img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
//         { id: 2, userId: 2, firstName: 'Andrew', lastName: 'Dub', st: 'Junior', cityName: 'Kyiv', countryName: 'Ukraine', subscribe: false, img: 'https://pngimg.com/uploads/thinking_man/thinking_man_PNG11613.png' },
//         { id: 3, userId: 3, firstName: 'Anton', lastName: 'Klen', st: 'Midle', cityName: 'Rivne', countryName: 'Ukraine', subscribe: false, img: 'https://purepng.com/public/uploads/large/purepng.com-manmanadult-malemale-childboy-beingmens-1421526920869cscbo.png' },
//         { id: 4, userId: 4, firstName: 'Bob', lastName: 'Storm', st: 'Senior', cityName: 'Lviv', countryName: 'Ukraine', subscribe: false, img: 'https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg' },
//     ]

//     if (props.users.length === 0) {
//         // axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         axios.get('https://reqres.in/api/users?page=1')
//             .then(response => {
//                 props.addUsers(response.data.data)
//             })
//     }

//     return (
//         <div className={s.users}>{
//             props.users.map(el =>
//                 <div key={el.id} className={s.user}>
//                     <div>
//                         <img src={el.avatar} alt="avatar" />
//                     </div>

//                     <div>
//                         {
//                             el.subscribe ?
//                                 <button onClick={() => { props.unfollow(el.userId) }}>Follow</button> :
//                                 <button onClick={() => { props.follow(el.userId) }}>Unfollow</button>
//                         }
//                     </div>

//                     <div>
//                         {el.first_name} {el.last_name}
//                     </div>

//                     <div>
//                         {el.st}
//                     </div>

//                     <div>
//                         {el.cityName}, {el.countryName}
//                     </div>
//                 </div>

//             )
//         }
//         </div>
//     );
// }

// export default Users;