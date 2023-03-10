import React from 'react';
import s from './News.module.css';
import useParamsImg from "./../../Img/useParamsImg.png"

const News = (props) => {
    return (
        <div className={s.news}>
            <div className={s.post}>
                <h3>Cайти для допомоги:</h3>
                <ul>
                    <li> Css, HTML :<a href="https://css.in.ua/">https://css.in.ua/</a></li>
                    <li>Install git pages from react: <a href="https://github.com/gitname/react-gh-pages">https://github.com/gitname/react-gh-pages</a> </li>
                    <li> Install react bootstrap :<a href="https://www.geeksforgeeks.org/how-to-install-bootstrap-in-react-js/">https://www.geeksforgeeks.org/how-to-install-bootstrap-in-react-js/</a></li>
                    <li> link in indexjs <a href="https://react-bootstrap.github.io/getting-started/introduction">https://react-bootstrap.github.io/getting-started/introduction</a></li>
                    <li> Font styles <a href="https://fonts.google.com/?preview.text=%D0%AF%D0%BA%D1%89%D0%BE%20%D0%B2%D1%81%D1%8E%20%D0%B4%D1%96%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D0%BA%D1%83%20%D0%B1%D1%83%D0%B4%D0%B8%D1%82%D0%B5%20%D0%B2%D0%B8%D0%BA%D0%BE%D0%BD%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D0%B2%D0%BB%D0%B0%D1%81%D0%BD%D0%B8%D0%BC%D0%B8%20%D1%81%D0%B8%D0%BB%D0%B0%D0%BC%D0%B8%20%D0%B2%D0%B8%20%D0%B2%D0%B8%D1%8F%D1%81%D0%BD%D0%B8%D1%82%D0%B5:%20%D1%8F%D0%BA%20%D0%B1%D1%83%D0%BA%D1%81%D1%83%D1%94%20%D0%B1%D0%B5%D0%BD%D0%B4%D0%B8%D0%BA%D1%81,%20%D1%96%20%D1%87%D0%B8%20%D1%94%20%D0%BF%D1%96%D0%B4%D0%BE%D0%B7%D1%80%D0%B0,%20%D1%89%D0%BE%20%D0%B2%D0%B0%D1%88%20%D0%B1%D0%B5%D0%BD%D0%B4%D0%B8%D0%BA%D1%81%20%D0%BD%D0%B5%20%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D0%B9;%20%D1%87%D0%B8%20%D0%BF%D0%BE%D1%88%D0%BA%D0%BE%D0%B4%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D1%83%20%D0%B2%D0%B0%D1%81%20%D0%B2%D1%96%D0%BD%D0%B5%D1%86%D1%8C;%20%D0%B2%20%D1%8F%D0%BA%D0%BE%D0%BC%D1%83%20%D1%81%D1%82%D0%B0%D0%BD%D1%96%20%D1%83%20%D0%B2%D0%B0%D1%81%20%D0%B2%D1%82%D1%83%D0%BB%D0%BA%D0%B8,%20%D0%BF%D1%96%D0%B4%D1%88%D0%B8%D0%BF%D0%BD%D0%B8%D0%BA%D0%B8,%20%D1%80%D0%B5%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D1%80,%20%D1%8F%D0%BA%D1%96%D1%80%20%D1%81%D1%82%D0%B0%D1%80%D1%82%D0%B5%D1%80%D0%B0.&preview.size=20&preview.text_type=custom&subset=cyrillic&noto.script=Cyrl">https://fonts.google.com/</a></li>
                    <li> Font styles install<a href="https://developers.google.com/fonts/docs/getting_started">https://developers.google.com/fonts/docs/getting_started</a></li>
                    <li>Css tools <a href="https://webcode.tools/generators/css/background-image"></a></li>
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
                    <li><span >px (пікселі)</span></li>
                    <li><span >%(відносно батьківського тега)</span></li>
                    <li><span >em (по суті що  % але відносно батьківського контейнера)</span></li>
                    <li><span >rem (по суті що % але відносно головного/першого контейнера )</span></li>
                </p>

                <h3>CSS styles : </h3>
                <p>background-color : <span >колір фону</span> </p>
                <p> color : <span >колір тексту</span> </p>
                <p>font-style : <span >стиль шрифта/тексту</span> </p>
                <p>font-weight :<span >товщина шрифта/тексту</span></p>
                <p>font-size: <span > розмір шрифта/тексту </span> </p>
                <p> list-style : <span > стиль елемента списка(1,2) </span> </p>
                <p> margin :<span > відступи за межами контейнера </span> </p>
                <p> padding: <span > відступи в середині  контейнера, між контентом і його межами </span> </p>
                <p> @media(max-width:800px){ } <span className={s.data}> які стилі і в яких межах будуть застосовуватись </span> </p>
                <p>  <span >  </span> </p>
                <p>  <span >  </span> </p>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>
            <div className={s.post}>
                <h3>Поширені контрольні точки:</h3>
                <ul>
                    <li><span>без @media</span> 1201px та більше:  тут дуже великі екрани, телевізори</li>
                    <li><span>@media (max-width: 1200px)</span>1001px — 1200px: тут великі екрани, настільні комп'ютери</li>
                    <li><span>@media (max-width: 1000px)</span>769px — 1024px: тут малі екрани, портативні комп'ютери</li>
                    <li><span>@media (max-width: 768px)</span>481px — 768px: тут планшети</li>
                    <li><span>@media (max-width: 480px)</span>321px — 480px: тут мобільні пристрої</li>
                    <li> <span>@media (max-width: 320px)</span></li>
                </ul>
            </div>

            <div className={s.post}>
                <h3>HTML tags:</h3>
                <ol>
                    <li>ol : <span >тег/контейнер для нумерованого списку</span></li>
                    <li>ul : <span >тег/контейнер для не нумерованого спику</span></li>
                    <li>li : <span >тег для елемента списка</span></li>
                    <li> textarea: <span > поле для текста </span></li>
                    <li> input: <span> строка для вводу </span></li>
                    <li>  <span >  </span></li>
                    <li>  <span >  </span></li>
                    <li>  <span >  </span></li>
                    <li>  <span >  </span></li>
                </ol>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>

            <div className={s.post}>
                <h3>Гарячі клавіши:</h3>
                <ul>
                    <li>ctrl+k і потім ctrl+s : <span >виклик меню з гарячимим клавішами в vscode</span></li>
                    <li>ctrl+w : <span >кастомний виклик, швидке обернення виділений текст тегом</span></li>
                    <li>  <span >  </span></li>
                    <li>  <span >  </span></li>
                </ul>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>
            <div>
                <h3>useParams() - це хук (hook) React, який надає доступ до параметрів маршруту в рамках компонента</h3>
                <p>При створенні маршруту в React Router, ми можемо включити динамічні сегменти шляху, які представлені змінними, які можуть бути передані в компонент в якості параметрів. Наприклад, в маршруті /users/:id, :id є динамічним параметром, який може бути замінений на різні значення.</p>
                <p>Коли ми використовуємо useParams(), React Router дозволяє нам отримати доступ до значення параметра, що знаходиться у шляху, і повернути його в якості об'єкта, який містить пари ключ-значення. Наприклад, якщо шлях був /users/123, тоді useParams() поверне об'єкт ${"{ id: 123 }"}, де id - це ім'я параметра, вказаного в маршруті.</p>
                <p>Приклад використання useParams():</p>
                <img src={useParamsImg} alt="useParamsImg" />

            </div>
            <div className={s.post}>
                <h3>Принципи позицонування:</h3>
                <div className={s.div}>One div, display:block, News </div>
                <div className={s.div}>Two div, display:block, News </div>
                <div className={s.div}>Three div , display:block, News </div>
                <span >one span, display:string, News </span>
                <span >two span, display:string, News </span>
                <span >three span, display:string, News </span>

                <div><button>Like</button></div>
                {/* <div className={s.textarea}> <textarea cols="100" rows="2"></textarea></div> */}
                <div><button>Post</button></div>
            </div>
        </div>
    );
}

export default News;
