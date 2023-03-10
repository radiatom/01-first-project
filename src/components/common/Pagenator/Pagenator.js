import React from 'react';
import s from './Pagenator.module.css'


const Pagenator = React.memo((props) => {
    
    const portionSize = 5
    const pages = Math.ceil(props.countUsers / props.countUsersOnPage)
    const columPortion = Math.ceil(pages / portionSize)

    const pagesCounts = []
    for (let a = 1 + ((props.portionNumber - 1) * portionSize); a <= props.portionNumber * portionSize && a <= pages && a >= 1; a++) {
        pagesCounts.push(a)
    }
    return (
        <div className={s.pages}>
            <span>{props.portionNumber > 1 ?
                <span>
                    <span><button onClick={props.leftPortion}>PREW</button></span>
                    <span className={1 === props.pageNumber ? s.active : s.page} onClick={() => { props.openNumberPage(1, props.countUsersOnPage) }}> 1</span>
                    <span className={s.page}>... </span>
                </span>
                :
                ''}
            </span>

            <span className={s.page} >
                {pagesCounts.map(el => {
                    return (
                        <span
                            key={el}
                            onClick={() => { props.openNumberPage(el, props.countUsersOnPage) }}
                            className={el === props.pageNumber ? s.active : s.page}
                        >
                            {el + ' '}
                        </span>)
                })}
            </span>

            <span>
                {props.portionNumber !== columPortion ?
                    <span>
                        <span className={s.page}>... </span>
                        <span className={pages === props.pageNumber ? s.active : s.page} onClick={() => { props.openNumberPage(pages, props.countUsersOnPage) }}>{pages} </span>
                        <span><button onClick={props.rightPortion}>NEXT</button></span>
                    </span>
                    :
                    ''}
            </span>
        </div>
    );
}
)
export default Pagenator;
