import React from 'react';
import preloader from '../../../Img/PreloaderEnance.gif'
import s from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloader" />
        </div>
    );
}

export default Preloader;
