import React, { Component } from 'react';

export default class Header extends Component{

  render() {
    return(
      <header id="header" className={ this.props.color === 'light' ? 'light' : null }>
        <div className="logo"></div>
        <div className="nav-wrapper">
          <nav>
            <ul>
              <li className="nav-link"><a href="#about">Как это работает</a></li>
              <li className="nav-link"><a href="#service">Что снимаем</a></li>
              <li className="nav-link"><a href="#about_us">Кто мы</a></li>
              <li className="nav-link"><a href="#stats">Статистика</a></li>
              <li className="nav-link" onClick={ this.props.onClick }>Контакты</li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
