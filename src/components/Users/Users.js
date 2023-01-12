import React from 'react';
import s from './Users.module.css'
const Users = (props) => {


    return (
        <div className={s.users}>{
            props.users.map(el =>
                <div key={el.id} className={s.user}>
                    <div>
                        <img src={el.img} alt="avatar" />
                    </div>

                    <div>
                        {
                            el.subscribe ? 
                            <button onClick={() => { props.unfollow(el.userId) }}>Follow</button>: 
                            <button onClick={() => { props.follow(el.userId) }}>Unfollow</button>
                        }
                    </div>

                    <div>
                        {el.firstName} {el.lastName}
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
    );
}

export default Users;
