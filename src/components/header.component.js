import React, { Component } from 'react';

export default class Header extends Component{

  goToAnchor = e => {
    e.preventDefault();
    let id = e.currentTarget.dataset.link;
    let anchor = document.getElementById(id).offsetTop + document.getElementById(id).parentElement.offsetTop;

    window.scrollTo(0, anchor);
  }

  render() {
    return(
      <header id="header" className={ this.props.color === 'light' ? 'light' : null }>
        <a href="#title" className="logo"></a>
        <div className="nav-wrapper">
          <nav>
            <ul>
              <li onClick={ e => this.goToAnchor(e) } data-link="how-it-works" className="nav-link">Как это работает</li>
              <li onClick={ e => this.goToAnchor(e) } data-link="filming-anchor" className="nav-link">Что снимаем</li>
              <li onClick={ e => this.goToAnchor(e) } data-link="about-us" className="nav-link">Кто мы</li>
              <li onClick={ e => this.goToAnchor(e) } data-link="statistics" className="nav-link">Статистика</li>
              <li onClick={ e => this.goToAnchor(e) } className="nav-link" onClick={ this.props.onClick }>Контакты</li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
