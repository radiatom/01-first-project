import React from 'react';
import s from './Pagenator.module.css'

const Pagenator = (props) => {
    const pages = Math.ceil(props.countUsers / props.countUsersOnPage)
    const pagesCounts = []
    for (let a = 1; a <= pages; a++) {
        pagesCounts.push(a)
    }
    return (
        <div className={s.pages}>
            <span className={s.page} >
                {pagesCounts.map(el => {
                    return (
                        <span
                            key={el}
                            onClick={() => { props.openNumberPage(el, props.countUsersOnPage) }}
                            className={el === props.pageNumber ? s.active : s.page}
                        >
                            {el}
                        </span>)
                })}
            </span>
        </div>
    );
}

export default Pagenator;
