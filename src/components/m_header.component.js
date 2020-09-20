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

  goToAnchor = e => {
    e.preventDefault();
    let id = e.currentTarget.dataset.link;
    let anchor = document.getElementById(id).offsetTop + document.getElementById(id).parentElement.offsetTop;

    window.scrollTo(0, anchor);
    this.setState({ active: false });
  }

  render() {
    return(
      <header id="header" className={ (this.props.color === 'light' ? 'light' : null) + " " + (this.isSamsungBrowser ? 'samsung' : null)  }>
        <div onClick={ e => this.goToAnchor(e) } data-link="title" className="logo"></div>
        <button onClick={ this.handleClick }></button>
        <div className={ this.state.active ? 'active nav-container' :
         'nav-container' }>
          <nav className="m-bebas-20">
            <h2 className="m-bebas-30">Меню</h2>
            <ul>
              <li onClick={ e => this.goToAnchor(e) } data-link="how-it-works" className="nav-link">Как это работает</li>
              <li onClick={ e => this.goToAnchor(e) } data-link="filming-anchor" className="nav-link">Что снимаем</li>
              <li onClick={ e => this.goToAnchor(e) } data-link="about-us" className="nav-link">Кто мы</li>
              <li onClick={ e => this.goToAnchor(e) } data-link="statistics" className="nav-link">Статистика</li>
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
            <a href="tel: + 7 (495) 147 47-75">
              Позвонить
            </a>
            <a href="mailto: kakvkino@planagency.ru">
              Написать
            </a>
          </div>
        </div>
      </header>
    )
  }
}
