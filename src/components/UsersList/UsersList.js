import s from './UsersList.module.css'
import Preloader from '../common/Preloader/Preloader';
import User from './User/User';
import Pagenator from '../common/Pagenator/Pagenator';
import React, { useState } from 'react';


const Users = (props) => {
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortion = () => {
        setPortionNumber(portionNumber - 1)
    }
    const rightPortion = () => {
        setPortionNumber(portionNumber + 1)
    }
    return (
        <div className={s.users}>
            <Pagenator
            portionNumber={portionNumber} leftPortion={leftPortion} rightPortion={rightPortion} {...props}
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
            <Pagenator
            portionNumber={portionNumber} leftPortion={leftPortion} rightPortion={rightPortion} {...props}
                countUsers={props.countUsers}
                countUsersOnPage={props.countUsersOnPage}
                openNumberPage={props.openNumberPage}
                pageNumber={props.pageNumber}
            />
        </div>
    );
}

export default Users;


