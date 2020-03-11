import React, { Component, Fragment } from 'react';

export default class Footer extends Component{
  render() {
    return(
      <Fragment>
        <div id="pre-footer">
          <h2 className="bebas-64 dark">
            Пришло время включить магию кино<br/>
            В свою рекламную кампанию
          </h2>
        </div>
        <footer id="footer">
          <div className="contacts-container-1 contacts-container">
            <h2 className="bebas-30 m-bebas-30">Контакты:</h2>
            {/*stuff*/}
            <div className="person">
              <h2 className="bebas-30 m-bebas-30">Ирина ларцева</h2>
              <h3 className="helvetica-14-bold m-helvetica-12-bold opacity-075">Основатель проекта</h3>
              <span className="bebas-20 m-bebas-20">+7 (903) 161 55-33</span>
              <span className="bebas-20 m-bebas-20">IL<span className="opacity-05">@Kakvkino.Group</span></span>
            </div>
            <div className="person">
              <h2 className="bebas-30 m-bebas-30">Юрий лешок</h2>
              <h3 className="helvetica-14-bold m-helvetica-12-bold opacity-075">Основатель проекта</h3>
              <span className="bebas-20 m-bebas-20">+7 (926) 495 35-46</span>
              <span className="bebas-20 m-bebas-20">UL<span className="opacity-05">@Kakvkino.Group</span></span>
            </div>
            <div className="person">
              <h2 className="bebas-30 m-bebas-30">Николай Кравченко</h2>
              <h3 className="helvetica-14-bold m-helvetica-12-bold opacity-075">Руководитель отдела продаж</h3>
              <span className="bebas-20 m-bebas-20">+7 (909) 323 44-43</span>
              <span className="bebas-20 m-bebas-20">SalesManager<span className="opacity-05">@Kakvkino.Group</span></span>
            </div>
            <div className="person">
              <h2 className="bebas-30 m-bebas-30">Мария Шестакович</h2>
              <h3 className="helvetica-14-bold m-helvetica-12-bold opacity-075">Специалист отдела продаж</h3>
              <span className="bebas-20 m-bebas-20">+7 (965) 330 54-93</span>
              <span className="bebas-20 m-bebas-20">SALES<span className="opacity-05">@Kakvkino.Group</span></span>
            </div>
            <div className="buttons-container bebas-20">
              <a href="tel: +7 (909) 323 44-43">Позвонить</a>
              <a href="mailto: SalesManager@Kakvkino.Group">Написать</a>
            </div>
          </div>

          <div className="contacts-container-2 contacts-container">
            {/*social*/}
            <div className="social-links">
              <a href="/"></a><a href="/"></a><a href="/"></a>
            </div>
            {/*map*/}
            <div className="map-container">
            </div>
            {/*address*/}
            <a href="/" className="bebas-20 address">125080 Москва<br/> Волоколамское ш., д.1., стр.1, офис 709А</a>
          </div>

          <div className="site-map-container">
            <h2 className="bebas-20">Карта сайта:</h2>
            <ul className="helvetica-13-regular">
              <h3 className="bebas-20">Главная</h3>
              <li><a href="/#title">О проекте</a></li>
              <li><a href="/#about">Кино в дейстии</a></li>
              <li><a href="/#stats--article-1">Жизненный цикл кино</a></li>
              <li><a href="/#stats--article-2">Как это работает</a></li>
              <li><a href="/#stats">Статистика</a></li>
              <li><a href="/#about-us">Кто мы</a></li>
            </ul>
            <ul className="helvetica-13-regular">
              <h3 className="bebas-20">Что снимаем</h3>
              <li>Фильмы в разработке</li>
            </ul>
            <ul className="helvetica-13-regular">
              <h3 className="bebas-20">Статистика</h3>
              <li>Аудитория кинотеатров</li>
              <li>Статистика фильмов</li>
            </ul>
          </div>
        </footer>
      </Fragment>
    )
  }
}
