import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.active}>
                    Arsen
                </div>

                <div className={s.dialog}>
                    Mycola
                </div>

                <div className={s.dialog}>
                    Andrey
                </div>

                <div className={s.dialog}>
                    Igor
                </div>

                <div className={s.dialog}>
                    Viktor
                </div>

                <div className={s.dialog}>
                    Antony
                </div>
            </div>

            <div className={s.massages}>
                
                    <div className={s.dialog}>
                        Hi
                    </div>

                    <div className={s.dialog}>
                        Hi
                    </div>

                    <div className={s.dialog}>
                        Its you admin?
                    </div>

                    <div className={s.dialog}>
                        Yes
                    </div>
                
        </div>
        </div >
    );
}

export default Dialogs;
