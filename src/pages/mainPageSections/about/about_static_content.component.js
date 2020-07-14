import React, { Component } from 'react';

export default class AboutStaticContent extends Component{

  state = {
    activeSlide: 0
  }

  slideChange = (e) => {
    let goTo = parseInt(e.currentTarget.dataset.goto);

    setTimeout( () => this.setState({activeSlide: goTo}), 250);

    let text = document.getElementsByClassName('text-main-wrapper')[0];
    text.style.opacity = 0;
    setTimeout( (text) => text.style.opacity = 1, 1000, text );

    document.getElementById('about').style.setProperty('--bg-offset', `${100*goTo}vw`);

    document.getElementById('about--buttons').classList.remove('animated');
    setTimeout( () => document.getElementById('about--buttons').classList.add('animated'), 100 );
  }

  render() {

    const {
      activeSlide
    } = this.state;

    return(
      <div className="about--article-wrapper">
        <article id="about--article" className={`about--article light
          ${
            activeSlide === 0 ? "m-bg-0" :
            activeSlide === 1 ? "m-bg-1" :
            activeSlide === 2 ? "m-bg-2" : null}`
          }>
          <TextIntro/>
          <div className="about--controls">
            <h3 className="bebas-30 m-bebas-30">Потому что кино формирует:</h3>
            <ul id="about--buttons" className="bebas-20 m-bebas-14 animated">
              <li onClick={ e => this.slideChange(e) }
              data-goto="0"
              className={ activeSlide === 0 ? 'active' : null }>Паттерн потребления</li>
              <li onClick={ e => this.slideChange(e) }
              data-goto="1"
              className={ activeSlide === 1 ? 'active' : null }>Предпочтение выбора</li>
              <li onClick={ e => this.slideChange(e) }
              data-goto="2"
              className={ activeSlide === 2 ? 'active' : null }>Желание попробовать</li>
            </ul>
          </div>
          <div className="text-main-wrapper">
            { activeSlide === 0 ? <TextMain0/> : null }
            { activeSlide === 1 ? <TextMain1/> : null }
            { activeSlide === 2 ? <TextMain2/> : null }
          </div>
        </article>
      </div>
    )
  }
}

class TextIntro extends Component{
  render() {
    return(
      <div className="text-intro">
        <h2 className="bebas-64 m-bebas-30">Одна хорошая роль в кино</h2>
        <p className="helvetica-14-bold m-helvetica-12-bold">
          может сделать неизвестного человека Звездой.<br/>
          Так и бренд может стать звездой, благодаря одной интеграции в КИНО, потому <br className="m-hide"/> что КИНО вызывает сильные чувства.
          <br/>
          <br/>
          <span className="m-hide opacity-075">
            Восхищение, влюбленность, тревога – возможно, большая часть людей<br/>
            проживает свои самые яркие чувства за всю жизнь именно в КИНО.<br/>
            Многие мечтают, чтобы и в их жизни случилось что-нибудь КАК В КИНО.
          </span>
        </p>
      </div>
    )
  }
}

class TextMain0 extends Component{
  render() {
    return(
      <div className="text-main-1 text-main">
        <h2 className="bebas-64 m-bebas-30">Лучшие друзья девушек</h2>
        <p className="helvetica-14-bold m-helvetica-12-bold opacity-075">
          Построенная на голливудских фильмах и знаменитостях рекламная кампания <br/>
          «A diamond is forever» за два десятилетия привила всему миру идею, что бриллианты – <br/>вечная ценность. Их нужно покупать и никогда с ними не расставаться. <br/>
          В результате De Beers – одна из богатейших компаний мира. <br/>
          У каждого из нас есть какой-нибудь бриллиант.
        </p>
      </div>
    )
  }
}

class TextMain1 extends Component{
  render() {
    return(
      <div className="text-main-1 text-main">
        <h2 className="bebas-64 m-bebas-30">Мода в большом городе</h2>
        <p className="helvetica-14-bold m-helvetica-12-bold opacity-075">
          После выхода на экраны сериала «Секс в большом городе» бренд Manolo <br/>
          Blahnik стал феноменом массовой культуры и осуществил международную<br/> экспансию. Сегодня бутики работают в 50 городах мира. Представители <br/>
          семьи Blahnik признаются, что были в шоке от того, какой мощный эффект <br/>
          оказало появление бренда в сериале.
        </p>
      </div>
    )
  }
}

class TextMain2 extends Component{
  render() {
    return(
      <div className="text-main-1 text-main">
        <h2 className="bebas-64 m-bebas-30">Отдых в Вестеросе</h2>
        <p className="helvetica-14-bold m-helvetica-12-bold opacity-075">
        Благодаря сериалу «Игра Престолов», многие значимые локации которого <br/>
        располагались в Хорватии, в стране увеличился турпоток с 8 до 18 млн <br/>
        человек в год. Cтрана не может справиться с таким наплывом туристов!
        </p>
      </div>
    )
  }
}
