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
            <span>13.48</span>
            {/* <p>Цейт сайт створений з використанням API з сайту social-network.samuraijs.com.База данних закрита. Щоб рандомний юсер міг отримати доступ до цієї бази данних, мені 
                як творцю сайту потрібно оплатити підписку. Я цього не роблю по таким причинам: 1)власник бази данних в білорусі 2) оплата в деревяних 
                грошах 3) в мене нема грошей). Щоб в повній мірі пощупати цей сайт потрібно клонувати його з репозиторію(https://github.com/radiatom/01-first-project.git) у свій редактор кода (в редакторі виконати команду npm install, та запустити проект npm start), і також зробити 
                звичайну реєстрацію на сайті social-network.samuraijs.com. Тепер відкритий проект в браузері можна щупати в повній мірі. Після реєстрацї використайте свій emeil та password при вході на сторінці проекту. Повторюся це спрацює лише коли цей 
                проект клонований та запущений локально на вашому комппютері, тоді проект запуститься на localhost та зможе отримувати данні.</p> */}

        </div>
    );
}

export default News;
