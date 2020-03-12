import React, { Component } from 'react';

export default class MobileHeader extends Component{

  state = {
    active: false
  }

  isSamsungBrowser = navigator.userAgent.match(/SamsungBrowser/i);

  handleClick = () => {
    this.state.active ? this.setState({ active: false }) :
    this.setState({ active: true })
  }

  render() {
    return(
      <header id="header" className={ (this.props.color === 'light' ? 'light' : null) + " " + (this.isSamsungBrowser ? 'samsung' : null)  }>
        <div className="logo"></div>
        <button onClick={ this.handleClick }></button>
        <div className={ this.state.active ? 'active nav-container' :
         'nav-container' }>
          <nav className="m-bebas-20">
            <h2 className="m-bebas-30">Меню</h2>
            <ul>
              <li className="nav-link"><a href="#stats--article-2-anchor">Как это работает</a></li>
              <li className="nav-link"><a href="#service">Что снимаем</a></li>
              <li className="nav-link"><a href="#about-us">Кто мы</a></li>
              <li className="nav-link"><a href="#stats">Статистика</a></li>
            </ul>
          </nav>
          <div className="contacts-container">
            <h2 className="m-bebas-30">Контакты</h2>

            <div className="person">
              <h2 className="m-bebas-20">Ирина ларцева</h2>
              <h3 className="m-helvetica-12-bold opacity-075">Основатель проекта</h3>
              <span className="m-bebas-20">+7 (903) 161 55-33</span>
              <span className="m-bebas-20">IL<span className="opacity-05">@Kakvkino.Group</span></span>
            </div>
            <div className="person">
              <h2 className="m-bebas-20">Юрий лешок</h2>
              <h3 className="m-helvetica-12-bold opacity-075">Основатель проекта</h3>
              <span className="m-bebas-20">+7 (926) 495 35-46</span>
              <span className="m-bebas-20">UL<span className="opacity-05">@Kakvkino.Group</span></span>
            </div>
          </div>
          <div className="sales-dep-container">
            <h2 className="m-bebas-30">Отдел продаж</h2>
            <a href="tel: +7 (909) 323 44-43" className="m-bebas-20">
              Позвонить
            </a>
            <a href="mailto: SalesManager@Kakvkino.Group" className="m-bebas-20">
              Написать
            </a>
            <a href="/" target="_blank"></a>
            <a href="/" target="_blank"></a>
            <a href="/" target="_blank"></a>
          </div>
        </div>
      </header>
    )
  }
}
