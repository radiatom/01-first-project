import React from 'react';

const MyMassage = (props) => {
    return (
        <div>
            <img src={props.avatar} alt="" />
            {props.massage}
        </div>
    );
}

export default MyMassage;
