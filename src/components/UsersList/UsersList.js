import s from './UsersList.module.css'
import Preloader from '../common/Preloader/Preloader';
import User from './User/User';
import Pagenator from '../common/Pagenator/Pagenator';

const Users = (props) => {
    
    return (
        <div className={s.users}>
            <Pagenator
                countUsers={props.countUsers}
                countUsersOnPage={props.countUsersOnPage}
                openNumberPage={props.openNumberPage}
                pageNumber={props.pageNumber}
            />

            {props.isFetching === true ?
                <div className={s.preloader}>
                    <Preloader />
                </div>
                :
                <div className={s.usersContainer}>{
                    props.users.map(el =>
                        <User
                            key={el.id}
                            el={el}
                            inProgressFollowing={props.inProgressFollowing}
                            deleteUnfollowThunkCreator={props.deleteUnfollowThunkCreator}
                            postFollowThunkCreator={props.postFollowThunkCreator}
                        />
                    )
                }
                </div>
            }
        </div>
    );
}

export default Users;


