import React from 'react';
import s from './Setting.module.css'

const Setting = (props) => {
    return (
        <div className={s.setting}>
            <h3>Exit with this site:</h3>
            <button onClick={props.deleteLogin}>Logaut</button>
        </div>
    );
}

export default Setting;
