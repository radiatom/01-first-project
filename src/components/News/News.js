import React from 'react';
import s from './News.module.css';

const News = (props) => {
    return (
        <div className={s.news}>
            <div className={s.post}>
                <h3>Cайти для допомоги:</h3>
                <ul>
                    <li> Css, HTML :<a href="https://css.in.ua/">https://css.in.ua/</a></li>

                </ul>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>

            <div className={s.post}>
                <p className={s.p1}>Команда обновлення сайту на 'gh pages': <span className={s.data}>npm run deploy</span></p>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>

            <div className={s.post}>
                <p>Величини визначються:
                    <li><span className={s.data}>px (пікселі)</span></li>
                    <li><span className={s.data}>%(відносно батьківського тега)</span></li>
                    <li><span className={s.data}>em (по суті що  % але відносно батьківського контейнера)</span></li>
                    <li><span className={s.data}>rem (по суті що % але відносно головного/першого контейнера )</span></li>
                </p>

                <h3>CSS styles : </h3>
                <p>background-color : <span className={s.data}>колір фону</span> </p>
                <p> color : <span className={s.data}>колір тексту</span> </p>
                <p>font-style : <span className={s.data}>стиль шрифта/тексту</span> </p>
                <p>font-weight :<span className={s.data}>товщина шрифта/тексту</span></p>
                <p>font-size: <span className={s.data}> розмір шрифта/тексту </span> </p>
                <p> list-style : <span className={s.data}> стиль елемента списка(1,2) </span> </p>
                <p> margin :<span className={s.data}> відступи за межами контейнера </span> </p>
                <p> padding: <span className={s.data}> відступи в середині  контейнера, між контентом і його межами </span> </p>
                <p> @media(max-width:800px){} <span className={s.data}> які стилі і в яких межах будуть застосовуватись </span> </p>
                <p>  <span className={s.data}>  </span> </p>
                <p>  <span className={s.data}>  </span> </p>
                
                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>

            <div className={s.post}>
                <h3>HTML tags:</h3>
                <ol>
                    <li>ol : <span className={s.data}>тег/контейнер для нумерованого списку</span></li>
                    <li>ul : <span className={s.data}>тег/контейнер для не нумерованого спику</span></li>
                    <li>li : <span className={s.data}>тег для елемента списка</span></li>
                    <li> textarea: <span className={s.data}> поле для текста </span></li>
                    <li> input: <span className={s.data}> строка для вводу </span></li>
                    <li>  <span className={s.data}>  </span></li>
                    <li>  <span className={s.data}>  </span></li>
                    <li>  <span className={s.data}>  </span></li>
                    <li>  <span className={s.data}>  </span></li>
                </ol>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>

            <div className={s.post}>
                <h3>Гарячі клавіши:</h3>
                <ul>
                    <li>ctrl+k і потім ctrl+s : <span className={s.data}>виклик меню з гарячимим клавішами в vscode</span></li>
                    <li>ctrl+w : <span className={s.data}>кастомний виклик, швидке обернення виділений текст тегом</span></li>
                    <li>  <span className={s.data}>  </span></li>
                    <li>  <span className={s.data}>  </span></li>
                </ul>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>

            <div className={s.post}>
                <h3>Принципи позицонування:</h3>
                <div className={s.div}>One div, display:block, News </div>
                <div className={s.div}>Two div, display:block, News </div>
                <div className={s.div}>Three div , display:block, News </div>
                <span className={s.span}>one span, display:string, News </span>
                <span className={s.span}>two span, display:string, News </span>
                <span className={s.span}>three span, display:string, News </span>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>
        </div>
    );
}

export default News;
