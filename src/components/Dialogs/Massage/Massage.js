import React from 'react';
import s from './Massage.module.css'
import MyMassage from './MyMassage/MyMassage';
import HisMassage from './HisMassage/HisMassage';


const Massage = (props) => {
    
    return (
        <div className='s.massage'>
            <div className={props.idUser===1?s.styleMy:s.styleHis}>
                {props.idUser===1?<MyMassage massage={props.massage} avatar={props.avatar}/>:<HisMassage massage={props.massage} avatar={props.avatar}/>}
            </div>

            
        </div>
    );
}

export default Massage;
