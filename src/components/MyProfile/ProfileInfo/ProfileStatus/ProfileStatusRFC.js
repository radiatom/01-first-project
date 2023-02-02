import React, { useState, useEffect } from 'react';
import s from './ProfileStatus.module.css'


const ProfileStatusRFC = (props) => {
    const [editMode, setEditeMode] = useState(false);
    const activeteEditMode = () => {
        setEditeMode(true)
    }
    const deActiveteEditMode = () => {
        setEditeMode(false)
        props.putStatusText(status)
    }


    const [status, setstatus] = useState(props.status);
    const onStatusChange = (e) => {
        setstatus(e.currentTarget.value)
    }


    useEffect(() => {
        setstatus(props.status)
    }, [props.status])

    
    return (
        <div>
            {editMode ?
                <input
                    type="text"
                    onChange={onStatusChange}
                    onBlur={deActiveteEditMode}
                    autoFocus={true}
                    value={status}

                />
                :
                (<div className={s.status}>
                    <span onClick={activeteEditMode} >
                        <h3>
                            {props.status}
                        </h3>
                    </span>
                </div>)}
        </div>
    );
}

export default ProfileStatusRFC;
