import React, { Component } from 'react';

export default class AboutArticle1 extends Component{
  render(){
    return(
      <article id="about--article-1" className={`light about--article-1 about--article ${this.props.active}`}>
        <div className="text-intro-container">
          <h2 className="bebas-64 m-bebas-30">Одна хорошая роль в кино</h2>
          <p className="helvetica-14-bold m-helvetica-12-bold">
          может сделать неизвестного человека Звездой.<br/>
          Так и бренд может стать звездой, благодаря одной интеграции в КИНО, потому что КИНО вызывает сильные чувства.
            <br/><br/>
            <span className="helvetica-14-bold m-helvetica-12-bold opacity-075">
              Восхищение, влюбленность, тревога – возможно, большая часть людей проживает свои самые яркие чувства за всю жизнь именно в КИНО.
              <br/>
               И после этого многие мечтают, чтобы и в их жизни случилось что-нибудь КАК В КИНО.
            </span>
          </p>
        </div>

        <div className="text-main-container">
          <h3 className="bebas-30 m-bebas-30">Потому что кино формирует:</h3>
          <ul className="bebas-20 m-bebas-14">
            <li className="current" onClick={ () => this.props.changeSlide(0) }>
              Паттерн потребления
            </li>
            <li onClick={ () => this.props.changeSlide(1) }>
              Предпочтение выбора
            </li>
            <li onClick={ () => this.props.changeSlide(2) }>
              Желание попробовать
            </li>
          </ul>
          <h2 className="bebas-64 m-bebas-25">
            Лучшие друзья девушек
          </h2>
          <p className="helvetica-14-bold m-helvetica-12-bold">
            Построенная на голливудских фильмах и знаменитостях рекламная кампания<br/>
            «A diamond is forever» за два десятилетия привила всему миру идею, что бриллианты – вечная ценность. Их нужно покупать и никогда с ними не расставаться.  В результате <br/>
             De Beers - одна из богатейших компаний мира. У каждого из нас есть какой-нибудь бриллиант.
          </p>
        </div>
      </article>
    )
  }
}
