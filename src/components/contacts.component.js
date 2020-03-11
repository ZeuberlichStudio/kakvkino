import React, { Component } from 'react';

export default class Contacts extends Component{

  state = {
    active: 0
  }

  openContacts = () => {
    this.setState({active: 1});

    document.addEventListener('click', this.closeContacts);
  }

  closeContacts = e => {
    if( e.target.closest('#close-contacts'));
    else if( e.target.closest('#contacts')) return;

    this.setState({active: 0});
    document.removeEventListener('click', this.closeContacts);
  };

  render() {
    return(
      <aside id="contacts" className={ this.state.active ? 'active' : '' }>
        <button id="close-contacts" onClick={ this.changeActive }></button>
        <div className="contacts-content">
          <h2 className="vh-bebas-30">Контакты:</h2>

          <div className="person">
            <h2 className="vh-bebas-30">Ирина ларцева</h2>
            <h3 className="vh-helvetica-14-bold opacity-075">Основатель проекта</h3>
            <a href="/" className="vh-bebas-20">+7 (903) 161 55-33</a>
            <a href="/" className="vh-bebas-20">IL<span className="opacity-05">@Kakvkino.Group</span></a>
          </div>

          <div className="person">
            <h2 className="vh-bebas-30">Юрий лешок</h2>
            <h3 className="vh-helvetica-14-bold opacity-075">Основатель проекта</h3>
            <a href="/" className="vh-bebas-20">+7 (926) 495 35-46</a>
            <a href="/" className="vh-bebas-20">UL<span className="opacity-05">@Kakvkino.Group</span></a>
          </div>

          <div className="person">
            <h2 className="vh-bebas-30">Николай Кравченко</h2>
            <h3 className="vh-helvetica-14-bold opacity-075">Руководитель отдела продаж</h3>
            <a href="/" className="vh-bebas-20">+7 (909) 323 44-43</a>
            <a href="/" className="vh-bebas-20">SalesManager<span className="opacity-05">@Kakvkino.Group</span></a>
          </div>

          <div className="person">
            <h2 className="vh-bebas-30">Мария Шестакович</h2>
            <h3 className="vh-helvetica-14-bold opacity-075">Специалист отдела продаж</h3>
            <a href="/" className="vh-bebas-20">+7 (965) 330 54-93</a>
            <a href="/" className="vh-bebas-20">SALES<span className="opacity-05">@Kakvkino.Group</span></a>
          </div>

          <a href="/" className="vh-bebas-20">125080 Москва<br/> Волоколамское ш., д.1., стр.1, офис 709А</a>

          <div className="social-links">
            <a href="/"></a><a href="/"></a><a href="/"></a>
          </div>
        </div>
      </aside>
    )
  }
}
