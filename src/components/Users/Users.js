import s from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import avatar from './../../Img/avatar.jpg'

const Users = (props) => {
    const pages = Math.ceil(props.countUsers / props.countUsersOnPage)
    const pagesCounts = []
    for (let a = 1; a <= pages; a++) {
        pagesCounts.push(a)
    }
    return (
        <div className={s.pageUsers}>
            <div className={s.pages}>
                <span className={s.page} >
                    {pagesCounts.map(el => {
                        return (<span key={el} onClick={() => { props.openNumberPage(el, props.countUsersOnPage) }} className={el === props.pageNumber ? s.active : s.page}>{el}</span>)
                    })}
                </span>
            </div>

            {props.isFetching === true ?
                <div className={s.preloader}>
                    <Preloader />
                </div>
                :
                <div className={s.users}>{
                    props.users.map(el =>
                        <div key={el.id} className={s.user}>
                            <div>
                                <NavLink to={'/userProfile/' + el.id}>
                                    <img src={el.photos.small === null ? avatar : el.photos.small} alt="avatar" />
                                </NavLink>
                            </div>

                            <div>
                                {
                                    el.followed ?
                                        <button disabled={props.inProgressFollowing.some(e => e === el.id)} onClick={() => {
                                            props.deleteUnfollowThunkCreator(el.id)
                                        }}>Unfollow</button> :
                                        <button disabled={props.inProgressFollowing.some(e => e === el.id)} onClick={() => {
                                            props.deleteАollowThunkCreator(el.id)
                                        }}>Follow</button>

                                }
                            </div>

                            <div>
                                {el.name} {el.last_name}
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


