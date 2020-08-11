import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import mapIcon from 'mapIcon.svg';

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

  mapIconOptions = {
    iconLayout: "default#image",
    iconImageHref: mapIcon,
  }

  mapIconProps = {
    hintContent: "Plan",
  }

  render() {
    return(
      <aside id="contacts" className={ this.state.active ? 'active' : '' }>
        <button id="close-contacts" onClick={ this.changeActive }></button>
        <div className="contacts-content">
          <h2 className="vh-bebas-30">Контакты:</h2>

          <div className="person">
            <h2 className="vh-bebas-30">Ирина ларцева</h2>
            <h3 className="vh-helvetica-14-bold opacity-075">Основатель проекта</h3>
            <span className="vh-bebas-20">+7 (903) 161 55-33</span>
            <span className="vh-bebas-20">IL<span className="opacity-05">@Kakvkino.Group</span></span>
          </div>

          <div className="person">
            <h2 className="vh-bebas-30">Юрий лешок</h2>
            <h3 className="vh-helvetica-14-bold opacity-075">Основатель проекта</h3>
            <span className="vh-bebas-20">+7 (926) 495 35-46</span>
            <span className="vh-bebas-20">UL<span className="opacity-05">@Kakvkino.Group</span></span>
          </div>

          <div className="person">
            <h2 className="vh-bebas-30">Отдел продаж</h2>
            <h3 className="vh-helvetica-14-bold opacity-075">руководитель отдела продаж</h3>
            <span className="vh-bebas-20">+7 (909) 323 44-43</span>
            <span className="vh-bebas-20">Sales<span className="opacity-05">@Kakvkino.Group</span></span>
          </div>

          <div className="buttons">
            <a href="tel: +7 (909) 323 44-43" className="vh-bebas-20">
              Позвонить
            </a>
            <a href="mailto: SalesManager@Kakvkino.Group" className="vh-bebas-20">
              Написать
            </a>
          </div>

          <span className="vh-bebas-20 address">
            <a href="https://yandex.ru/maps/-/CCQpaOWiDB" target="_blank">
              125080 Москва<br/> Волоколамское ш., д.1, стр.1, офис 709А
            </a>
          </span>

          <div className="map">
            <YMaps>
              <Map
                width="100%" height="100%"
                defaultState={{ center: [55.806525, 37.504681], zoom: 16 }}
              >
                <Placemark geometry={[55.806525, 37.504681]} properties={this.mapIconProps} options={this.mapIconOptions} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
              </Map>
            </YMaps>
          </div>
        </div>
      </aside>
    )
  }
}
