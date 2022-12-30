import React from 'react';

const HisMassage = (props) => {
    
    return (
        <div>
            {props.massage}
            <img src={props.avatar} alt="" />
        </div>
    );
}

export default HisMassage;
