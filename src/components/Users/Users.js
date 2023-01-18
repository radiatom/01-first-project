import s from './Users.module.css'
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';



const Users = (props) => {
    
    const countPages = Math.ceil(props.countUsers / props.countUsersOnPage)
     
    const obj = []
        for (let a = 1; a <= countPages; a++) {
            obj.push(a)
        }
    return (
        <div className={s.pageUsers}>
            <div className={s.pages}>
                <span className={s.page} >
                    {obj.map(el => {
                         return (<span key={el.id} onClick={() => { props.openPage(el) }} className={el === props.pageNumber ? s.active : s.page}>{el}</span>)
                    })}
                </span>
            </div>
            
            {props.isFetching===true?<Preloader />:
                <div className={s.users}>{
                    props.users.map(el =>
                        <div key={el.id} className={s.user}>
                            <div>
                                <NavLink to={'/userProfile/'+el.id}>
                                    <img src={el.photos.small===null?'https://avatars.mds.yandex.net/i?id=64b9cebcb670fa8e85d37fcd6a16b87a19b5d346-6932444-images-thumbs&n=13':el.photos.small} alt="avatar" />
                                </NavLink>
                            </div>

                            <div>
                                {
                                    el.followed ?
                                        <button onClick={() => { props.unfollow(el.id) }}>Follow</button> :
                                        <button onClick={() => { props.follow(el.id) }}>Unfollow</button>
                                }
                            </div>

                            <div>
                                {el.name} {el.last_name}
                            </div>

                            <div>
                                {el.st}
                            </div>

                            <div>
                                {el.cityName}, {el.countryName}
                            </div>
                        </div>
                        )
                    }
                </div>
            }

            
        </div>
    );
}

export default Users;


// class Users extends Component {
//     // constructor(props) {
//     //     super(props)
//     // }
    

//     render() {
//         const obj = []
//         for (let a = 1; a <= this.countPages; a++) {
//             obj.push(a)
//         }
//         return (
//             <div className={s.pageUsers}>
//                 <div className={s.pages}>
//                     <span className={s.page} >
//                         {obj.map(el => {
//                             return (<span key={this.props.id} onClick={() => { this.openPage(el) }} className={el === this.props.pageNumber ? s.active : s.page}>{el}</span>)
//                         })}
//                     </span>
//                 </div>

//                 <div className={s.users}>{
//                     this.props.users.map(el =>
//                         <div key={el.id} className={s.user}>
//                             <div>
//                                 <img src={el.avatar} alt="avatar" />
//                             </div>

//                             <div>
//                                 {
//                                     el.subscribe ?
//                                         <button onClick={() => { this.props.unfollow(el.userId) }}>Follow</button> :
//                                         <button onClick={() => { this.props.follow(el.userId) }}>Unfollow</button>
//                                 }
//                             </div>

//                             <div>
//                                 {el.name} {el.last_name}
//                             </div>

//                             <div>
//                                 {el.st}
//                             </div>

//                             <div>
//                                 {el.cityName}, {el.countryName}
//                             </div>
//                         </div>

//                     )
//                 }
//                 </div>
//             </div>
//         );
//     }
// }

// export default Users;

