import React, { useState } from 'react';
import s from './ProfileStatus.module.css'
import { Field } from 'redux-form';
import { Input } from '../../../common/FromControls/FromControls';
import { maxLength, } from '../../../../utils/validators/validators';

const maxLength20 = maxLength(20)



const ProfileStatusRFC = (props) => {
    const [editMode, setEditeMode] = useState(false);
    const activeteEditMode=()=>{
        setEditeMode(true)
    }
    const deActiveteEditMode=()=>{
        setEditeMode(false)
        props.handleSubmit()
    }
    return (
        <div>
            {editMode ?
                (<form onSubmit={props.handleSubmit}>
                    <Field
                        validate={[maxLength20]}
                        onBlur={deActiveteEditMode}
                        autoFocus={true}
                        // placeholder={props.status}
                        name={'statusText'}
                        component={Input} 
                        value={props.status}/>
                </form>)
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
