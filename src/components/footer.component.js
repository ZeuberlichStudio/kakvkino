import React, { Component, Fragment } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {Link} from 'react-router-dom';
//Images
import make_appointment from 'assets/images/make_appointment.svg';
import make_appointment_blink from 'assets/images/make_appointment_blink.svg';
import mapIcon from 'mapIcon.svg';

export default class Footer extends Component{

  mapIconOptions = {
    iconLayout: "default#image",
    iconImageHref: mapIcon,
  }

  mapIconProps = {
    hintContent: "Plan",
  }

  render() {
    return(
      <Fragment>
        <div id="pre-footer">
          <Link to="/make-appointment">
            <img src={make_appointment} alt=""/>
            <h2 className="bebas-64">
              Пришло время<br/> включить магию кино<br/>
              В свою рекламную кампанию
            </h2>
          </Link>
        </div>
        <footer id="footer" className="footer">
          <div className="footer_contact-info">
            <h2>Контакты:</h2>
            {/*stuff*/}
            <div className="footer_contact-info_block">
              <h2>Ирина ларцева</h2>
              <h3>Основатель проекта</h3>
              <span>+7 (903) 161 55-33</span>
              <span>IL<span>@Kakvkino.Group</span></span>
            </div>

            <div className="footer_contact-info_block">
              <h2>Юрий лешок</h2>
              <h3>Основатель проекта</h3>
              <span>+7 (926) 495 35-46</span>
              <span>UL<span>@Kakvkino.Group</span></span>
            </div>

            <div className="footer_contact-info_block">
              <h2>Отдел продаж</h2>
              <span>+7 (495) 147 47-75</span>
              <span>kakvkino<span>@planagency.ru</span></span>
            </div>

            <div className="footer_contact-info_buttons">
              <a href="tel: +7 (495) 147 47-75">Позвонить</a>
              <a href="mailto: kakvkino@planagency.ru">Написать</a>
            </div>
          </div>

          <div className="footer_map">
            {/*map*/}
            <div>
              <YMaps>
                <Map
                  width="100%" height="100%"
                  defaultState={{ center: [55.806525, 37.504681], zoom: 16 }}
                >
                  <Placemark geometry={[55.806525, 37.504681]} properties={this.mapIconProps} options={this.mapIconOptions} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                </Map>
              </YMaps>
            </div>
            {/*address*/}
            <span>
              <a href="https://yandex.ru/maps/-/CCQpaOWiDB" target="_blank">
                125080 Москва<br/> Волоколамское ш., д.1, стр.1, офис 709А
              </a>
            </span>
          </div>

          <div className="footer_site-map">
            <h2>Карта сайта:</h2>
            <ul>
              <h3>Главная</h3>
              <li><a href="#title">О проекте</a></li>
              <li><a href="#cinema-efficiency">Эффективность кино</a></li>
              <li><a href="#movie-lifecycle">Жизненный цикл кино</a></li>
              <li><a href="#how-it-works">Как это работает</a></li>
              <li><a href="#about-us">Кто мы</a></li>
              <li><a href="#statistics">Статистика</a></li>
            </ul>
            <ul>
              <h3>Что снимаем</h3>
              <li><a href="#filming">Фильмы в разработке</a></li>
            </ul>
          </div>

          <span id="copyright">
            <span>© коммуникационное агентство ПЛАН, 2020</span>
            <span>Использование материалов сайта допустимо только с разрешения правообладателя.</span>
          </span>
        </footer>
      </Fragment>
    )
  }
}
