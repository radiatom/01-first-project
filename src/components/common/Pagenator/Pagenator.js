import React, { useState } from 'react';
import s from './Pagenator.module.css'


const Pagenator = (props) => {
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortion = () => {
        setPortionNumber(portionNumber - 1)
    }
    const rightPortion = () => {
        setPortionNumber(portionNumber + 1)
    }

    const portionSize = 12
    const pages = Math.ceil(props.countUsers / props.countUsersOnPage)
    const columPortion = Math.ceil(pages / portionSize)

    const pagesCounts = []
    for (let a = 1 + ((portionNumber - 1) * portionSize); a <= portionNumber * portionSize && a <= pages && a >= 1; a++) {
        pagesCounts.push(a)
    }
    return (
        <div className={s.pages}>
            <span>
                {portionNumber > 1 ? <button onClick={leftPortion}>PREW</button> : ''}
            </span>

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

            <span>
                {portionNumber !== columPortion ? <button onClick={rightPortion}>NEXT</button> : ''}
            </span>
        </div>
    );
}

export default Pagenator;
