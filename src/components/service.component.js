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
    note: 0
  }

  changeTab = e => {
    let tab = parseInt(e.currentTarget.dataset.tab);
    let tab_content = document.getElementById('tab-content');

    tab_content.style.opacity = 0;

    setTimeout( () => { this.setState({tab}) }, 100 );
    setTimeout( () => { tab_content.style.opacity = 1 }, 500 );
  }

  openForm = () => {
    if( this.state.form ) return;

    let form = document.getElementsByClassName('form-wrapper')[0];

    form.style.display = 'block';
    setTimeout( form => form.style.opacity = 1, 50, form);

    this.setState({form: 1});

    document.addEventListener('click', this.closeForm);
  }

  closeForm = e => {
    if( e.target.closest('#close-form'));
    else if( e.target.closest('.form-wrapper')){ return; }

    let form = document.getElementsByClassName('form-wrapper')[0];

    form.style.opacity = 0;
    setTimeout( form => form.style.display = 'none', 100, form);

    this.setState({form: 0});

    document.removeEventListener('click', this.closeForm);
  }

  openNote = () => {
    if( this.state.note ) return;

    let note = document.getElementsByClassName('service--aside-1')[0];

    note.style.display = 'grid';
    setTimeout( note => note.style.opacity = 1, 50, note);

    this.setState({note: 1});

    document.addEventListener('click', this.closeNote);
  }

  closeNote = e => {
    if( e.target.closest('#close-note') );
    else if( e.target.closest('.service--aside-1')) return;

    let note = document.getElementsByClassName('service--aside-1')[0];

    note.style.opacity = 0;
    setTimeout( note => note.style.display = 'none', 100, note);

    this.setState({note: 0});

    document.removeEventListener('click', this.closeNote);
  }

  render() {
    return(
      <section id="service">
        <Form closeForm={ this.closeForm }/>
        <ServiceArticle1
        changeTab={ this.changeTab }
        openForm={ this.openForm }
        openNote={ this.openNote }
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
      changeTab,
      openForm,
      openNote
    } = this.props;

    return(
      <article className="service--article service--article-1">
        <div id="empty-blocks"></div>
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
              <span className="note">
                <u onClick={ () => openNote() }>
                  фильмы-референсы и их аудитория
                </u>
              </span> :
              null
            }
          </li>
          <li><span className="opacity-05">Дримкаст:</span> <u onClick={ e => openForm(e) }>По запросу</u></li>
        </ul>

        {
          device !== 'mobile' ?
          <Tabs tab={ tab } changeTab={ changeTab }/> :
          <MobileTabs tab={ tab } changeTab={ changeTab }/>
        }
      </article>
    )
  }
}

class ServiceAside1 extends Component{
  render(){
    return(
      <article className="service--aside service--aside-1">
        <button onClick={ this.props.closeNote } id="close-note"></button>
        <h2 className="bebas-30 m-bebas-30">Фильмы - референсы<br/>и их аудитория:</h2>
        <ul className="bebas-20 m-bebas-20">
          <h3>Холоп</h3>
          <li><span>12-17</span>8%</li>
          <li><span>18-24</span>28%</li>
          <li><span>25-34</span>29%</li>
          <li><span>35-44</span>16%</li>
          <li><span>44+</span>19%</li>
        </ul>
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
          существенно увеличивает охват – 55% кинозрителей смотрят трейлеры к фильмам
          <span className="opacity-05"> (Фонд кино, Кинозритель 2017-2018)</span>
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
