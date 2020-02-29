import React, { Component } from 'react';
import Tabs from './service/tabs.component';
import MobileTabs from './service/m_tabs.component';

import Form from './service/form.component';

export default class Service extends Component{

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ device: document.documentElement.clientWidth <= 768 ? 'mobile' : 'desktop' });
    });
    window.dispatchEvent(new Event('resize'));
  }

  state = {
    device: '',
    tab: 0,
    form: 0,
    referance: 0
  }

  handleClick = e => {
    let tab = parseInt(e.currentTarget.dataset.tab);
    let tab_content = document.getElementById('tab-content');

    tab_content.style.opacity = 0;

    setTimeout( () => { this.setState({tab}) }, 100 );
    setTimeout( () => { tab_content.style.opacity = 1 }, 500 );
  }

  handleClickForm = () => {
    let form_wrapper = document.getElementsByClassName('form-wrapper')[0];
    let form = this.state.form ? 0 : 1;
    if( form ){
      this.setState({form});
      form_wrapper.style.display = 'block';
      setTimeout( () => form_wrapper.style.opacity = 1, 100 );
    }else{
      this.setState({form});
      form_wrapper.style.opacity = 0;
      setTimeout( () => form_wrapper.style.display = 'none', 100 );
    }
  }

  handleClickReferance = () => {
    let referance_wrapper = document.getElementsByClassName('service--aside-1')[0];
    let referance = this.state.referance ? 0 : 1;
    if( referance ){
      this.setState({referance});
      referance_wrapper.style.display = 'grid';
      setTimeout( () => referance_wrapper.style.opacity = 1, 100 );
    }else{
      this.setState({referance});
      referance_wrapper.style.opacity = 0;
      setTimeout( () => referance_wrapper.style.display = 'none', 100 );
    }
  }

  render() {
    return(
      <section id="service">
        <Form/>
        <ServiceArticle1
        onClick={ this.handleClick } onClickForm={ this.handleClickForm }
        onClickReferance={ this.handleClickReferance }
        device={this.state.device} tab={this.state.tab}/>
        <div className="aside-container">
          <ServiceAside1/>
          <ServiceAside2/>
        </div>
      </section>
    )
  }
}

class ServiceArticle1 extends Component{
  render(){
    const{
      device,
      tab,
      onClick,
      onClickForm,
      onClickReferance
    } = this.props;

    return(
      <article className="service--article service--article-1">
        <h2 className="bebas-64 m-bebas-30">Любовь в большом городе</h2>
        <ul className="helvetica-14-bold m-helvetica-12-bold">
          <li><span className="opacity-05">Жанр:</span> Комедия, мелодрама</li>
          <li><span className="opacity-05">Статус:</span> В подготовке</li>
          <li><span className="opacity-05">Прогноз кинопроката:</span> 1.5 млн зрителей</li>
          <li className="opacity-05"><span>Дистрибьютор:</span> Стадия переговоров</li>
        </ul>
        <p className="helvetica-14-bold m-helvetica-12-bold">
          <span className="opacity-05">Синопсис:</span> В ЗАГС города N приезжает съемочная группа телеканала НТВ сделать сюжет о юбилее дворца бракосочетаний. Уже десять лет, благодаря стараниям главного регистратора Екатерины Михайловны, этот ЗАГС считается не только идеально работающим гос. учреждением, но и самым СЧАСТЛИВЫМ ЗАГСом в городе. Свадьбы тут проходят исключительно красиво и торжественно. Разводящихся почти всегда удается примирить и спасти их семьи. Но именно сегодня всё идет наперекосяк – 3 пары
        </p>
        <ul className="helvetica-14-bold m-helvetica-12-bold">
          <li>
            <span className="opacity-05">Целевая аудитория:</span> 20-45 лет, мужчины и женщины
            { this.props.device === 'mobile' ?
              <span className="referance">
                <u onClick={ () => onClickReferance() }>
                  фильмы-референсы и их аудитория
                </u>
              </span> :
              null
            }
          </li>
          <li><span className="opacity-05">Дримкаст:</span> <u onClick={ () => onClickForm() }>По запросу</u></li>
        </ul>

        {
          device !== 'mobile' ?
          <Tabs tab={ tab } onClick={ onClick }/> :
          <MobileTabs tab={ tab } onClick={ onClick }/>
        }
      </article>
    )
  }
}

class ServiceAside1 extends Component{
  render(){
    return(
      <article className="service--aside service--aside-1">
        <h2 className="bebas-30 m-bebas-30">Фильмы - референсы<br/>и их аудитория:</h2>
        <ul className="bebas-20 m-bebas-20">
          <h3>Ёлки последние</h3>
          <li><span>12-17</span>8%</li>
          <li><span>18-24</span>21%</li>
          <li><span>25-34</span>37%</li>
          <li><span>35-44</span>20%</li>
          <li><span>44+</span>14%</li>
        </ul>
        <ul className="bebas-20 m-bebas-20">
          <h3>Громкая связь</h3>
          <li><span>12-17</span>10%</li>
          <li><span>18-24</span>25%</li>
          <li><span>25-34</span>32%</li>
          <li><span>35-44</span>19%</li>
          <li><span>44+</span>14%</li>
        </ul>
        <ul className="bebas-20 m-bebas-20">
          <h3>Любовница</h3>
          <li><span>12-17</span>19%</li>
          <li><span>18-24</span>22%</li>
          <li><span>25-34</span>23%</li>
          <li><span>35-44</span>22%</li>
          <li><span>44+</span>14%</li>
        </ul>
      </article>
    )
  }
}

class ServiceAside2 extends Component{
  render() {
    return(
      <article className="service--aside service--aside-2">
        <h2 className="bebas-30 m-bebas-30">Возможности расширения Рекламной интеграции:</h2>
        <div>
          <h3 className="bebas-20 m-bebas-20">Трейлер к фильму</h3>
          <p className="helvetica-12-bold m-helvetica-12-bold">
          включение эпизода с присутствием бренда.
          существенно увеличивает охват – 55% ки-нозрителей смотрят трейлеры к фильмам
          <span className="opacity-05">(Фонд кино, Кинозритель 2017-2018)</span>
          </p>
        </div>
        <div>
          <h3 className="bebas-20 m-bebas-20">Спонсорство премьеры</h3>
          <p className="helvetica-12-bold m-helvetica-12-bold">
          присутствие бренда на мероприятии (пресс-волл, бренд-корнер) и последующее упоминание бренда в СМИ (от 30)
          </p>
        </div>
        <div>
          <h3 className="bebas-20 m-bebas-20">Рекламная кампания</h3>
          <p className="helvetica-12-bold m-helvetica-12-bold">
          проведение рекламной кампании бренда в момент выхода фильма в кинотеатрах с участием одного из героев фильма
          </p>
        </div>
        <div>
          <h3 className="bebas-20 m-bebas-20">Социальные сети</h3>
          <p className="helvetica-12-bold m-helvetica-12-bold">
          поддержка бренда в социальных сетях актерами в момент выхода фильма в кинотеатрах
          </p>
        </div>
      </article>
    )
  }
}
