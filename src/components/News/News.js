import React from 'react';
import s from './News.module.css';

const News = () => {
    return (
        <div className={s.news}>
            <div className={s.div} >One div block News </div>
            <div className={s.div}>Two div block News </div>
            <div className={s.div}>Three block div News </div>
            <span className={s.span}>one span string News </span>
            <span className={s.span}>two span string News </span>
            <span className={s.span}>three span string News </span>
            <span>npm run deploy</span>
            
        </div>
    );
}

export default News;
