import React from 'react';
import s from './FoemConsrols.module.css'


export const TextArea = ({ input, meta, ...props }) => {
    return (
        <div className={s.formControl}>
            <div>
                <textarea
                    className={(meta.touched && meta.error ? s.erorrForm : '')}
                    placeholder={props.placeholder}
                    cols={props.cols}
                    rows={props.rows}
                    {...input}
                    {...props}
                />
            </div>
            <div>
                <span>{meta.touched && meta.error}</span>
            </div>
        </div>
    );
}

// meta.touched бачить що ти клацав на поле.
// meta.error помилка яку покаже якщо не було введено жоного символу в поле

export const Input = ({ input, meta, ...props }) => {
    return (
        <div className={s.formControl}>
            <div>
                <input
                    className={(meta.touched && meta.error ? s.erorrForm : '')}
                    placeholder={props.placeholder}
                    {...input}
                    {...props}
                />
            </div>
            <div>
                <span>{meta.touched && meta.error}</span>
            </div>
        </div>
    );
}