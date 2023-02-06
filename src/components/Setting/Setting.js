import React from 'react';
import s from './Setting.module.css'

const Setting = (props) => {
    return (
        <div>
            <div className={s.setting}>
                <h3>Exit with this site:</h3>
                <button onClick={props.deleteLogin}>Logaut</button>
            </div>

            <div className={s.updateAvatar}>
                <h3>Update avatar img</h3>
                <input onChange={e=>props.putAvatarFile(e.target.files[0])} type="file" />
            </div>
        </div>

    );
}

export default Setting;
