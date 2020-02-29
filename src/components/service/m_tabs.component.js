import React, { Component } from 'react';

export default class MobileTabs extends Component{

  state = {
    tab: 0
  }

  onClick = (e) => {
    let tab = parseInt(e.currentTarget.dataset.tab);
    this.setState({ tab });
  }

  render() {
    const{
      tab
    } = this.state;

    const{
      onClick
    } = this;

    return(
      <div id="tabs-container">
        <ul id="tabs">
          <li className={ tab === 0 ? 'active' : null }>
            <a
            data-tab="0"
            onClick={ (e) => onClick(e) }
            className="m-bebas-20">
              Тарифные планы
            </a>
            <TabContent0 slide={ 0 }/>
          </li>
          <li className={ tab === 1 ? 'active' : null }>
            <a
            data-tab="1"
            onClick={ (e) => onClick(e) }
            className="m-bebas-20">
              Прогноз эффективности
            </a>
            <TabContent1/>
          </li>
          <li className={ tab === 2 ? 'active' : null }>
            <a
            data-tab="2"
            onClick={ (e) => onClick(e) }
            className="m-bebas-20">
              Прогноз доходности
            </a>
            <TabContent2/>
          </li>
          <li className={ tab === 3 ? 'active' : null }>
            <a
            data-tab="3"
            onClick={ (e) => onClick(e) }
            className="m-bebas-20">
              График производства
            </a>
            <TabContent3/>
          </li>
        </ul>
      </div>
    )
  }
}

class TabContent0 extends Component{

  state = {
    slide: 0,
  }

  handleClick = (nextSlide) => {
    if( nextSlide >= 0 && nextSlide < 3 ){
      let currentSlide = document.getElementsByClassName('slide-' + this.state.slide)[0];

      currentSlide.style.opacity = 0;
      setTimeout(() => {
        this.setState({ slide: nextSlide });
        currentSlide.style = null;
      }, 250);
    }

    if( nextSlide <= 0 ){
      document.getElementsByClassName('tab-0-wrapper')[0].getElementsByClassName('prev-slide')[0].style.opacity = 0;
    }else{
      document.getElementsByClassName('tab-0-wrapper')[0].getElementsByClassName('prev-slide')[0].style.opacity = 1;
    }

    if( nextSlide >= 2 ){
      document.getElementsByClassName('tab-0-wrapper')[0].getElementsByClassName('next-slide')[0].style.opacity = 0;
    }else{
      document.getElementsByClassName('tab-0-wrapper')[0].getElementsByClassName('next-slide')[0].style.opacity = 1;
    }
  }

  render() {

    const {
      slide
    } = this.state;

    return(
      <div className="tab-0-wrapper">
        <div  className="left-column m-helvetica-12-bold opacity-05">
          <span>Бюджет</span>
          <span>Демонстрация бренда</span>
          <span>Упоминание бренда</span>
          <span>Отражение преимуществ</span>
          <span>Участие главных героев</span>
          <span>Кол-во эпизодов с присутствием бренда</span>
          <span>Хронометраж эпизодов с присутствием бренда</span>
          <span>Бренд-трекинг</span>
          <span>VIP-приглашение на премьеру</span>
        </div>
        <div className="right-column m-bebas-20">
          <div className={ slide === 0 ? "active " + "slide-0 " + "slide" : "slide-0 " + "slide"}>
            <th className="m-bebas-20">Эпизодическая<br/>роль</th>
            <td className="opacity-05 m-helvetica-12-bold">3 500 000 руб</td>
            <td>ИЛИ</td>
            <td>ИЛИ</td>
            <td>Нет</td>
            <td>Нет*</td>
            <td>1</td>
            <td>30 сек</td>
            <td>НЕТ</td>
            <td>2</td>
          </div>
          <div className={ slide === 1 ? "active " + "slide-1 " + "slide" : "slide-1 " + "slide"}>
            <th className="m-bebas-20">Роль второго<br/>плана</th>
            <td className="m-helvetica-12-bold opacity-05">7 000 000 руб</td>
            <td>ДА</td>
            <td>ДА</td>
            <td>ДА</td>
            <td>≥50% сцен</td>
            <td>2</td>
            <td>60 сек</td>
            <td>ДА</td>
            <td>6</td>
          </div>
          <div className={ slide === 2 ? "active " + "slide-2 " + "slide" : "slide-2 " + "slide"}>
            <th className="m-bebas-20">Главная<br/>роль</th>
            <td className="m-helvetica-12-bold opacity-05">21 000 000 руб</td>
            <td>ДА</td>
            <td>ДА</td>
            <td>ДА</td>
            <td>≥50% сцен</td>
            <td>6</td>
            <td>180 сек</td>
            <td>ДА</td>
            <td>20</td>
          </div>
          <button
           className="prev-slide" style={{ opacity: 0 }}
           onClick={ () => this.handleClick(slide - 1) }></button>
          <button
           className="next-slide"
           onClick={ () => this.handleClick(slide + 1) }></button>
        </div>
      </div>
    )
  }
}

class TabContent1 extends Component{

  state = {
    slide: 0,
  }

  handleClick = (nextSlide) => {
    if( nextSlide >= 0 && nextSlide < 3 ){
      let currentSlide = document.getElementsByClassName('slide-' + this.state.slide)[0];

      currentSlide.style.opacity = 0;
      setTimeout(() => {
        this.setState({ slide: nextSlide });
        currentSlide.style = null;
      }, 250);
    }

    if( nextSlide <= 0 ){
      document.getElementsByClassName('tab-1-wrapper')[0].getElementsByClassName('prev-slide')[0].style.opacity = 0;
    }else{
      document.getElementsByClassName('tab-1-wrapper')[0].getElementsByClassName('prev-slide')[0].style.opacity = 1;
    }

    if( nextSlide >= 2 ){
      document.getElementsByClassName('tab-1-wrapper')[0].getElementsByClassName('next-slide')[0].style.opacity = 0;
    }else{
      document.getElementsByClassName('tab-1-wrapper')[0].getElementsByClassName('next-slide')[0].style.opacity = 1;
    }
  }

  render() {

    const {
      slide
    } = this.state;

    return(
      <div className="tab-1-wrapper">
        <div className="left-column m-bebas-20">
          <span className="m-helvetica-12-bold opacity-05">Бюджет</span>
          <span>500 000 <span className="opacity-05">(20%)</span></span>
          <span>1 000 000 <span className="opacity-05">(50%)</span></span>
          <span>1 500 000 <span className="opacity-05">(75%)</span></span>
          <span>2 000 000 <span className="opacity-05">(100%)</span></span>
          <span>2 500 000 <span className="opacity-05">(120%)</span></span>
          <span>3 000 000 <span className="opacity-05">(140%)</span></span>
          <span>4 000 000 <span className="opacity-05">(180%)</span></span>
          <span>5 000 000 <span className="opacity-05">(220%)</span></span>
          <span>6 000 000 <span className="opacity-05">(280%)</span></span>
          <span className="m-helvetica-12-bold">
            <i/><span className="opacity-075">Доход по тарифу, в со-
            ответствии с финансовой
            моделью (МЛН РУБ)</span>
          </span>
        </div>
        <div className="right-column m-bebas-20">
          <div className={ slide === 0 ? "active " + "slide-0 " + "slide" : "slide-0 " + "slide"}>
            <th className="m-bebas-20">Эпизодическая<br/>роль</th>
            <td className="opacity-05 m-helvetica-12-bold">3 500 000 руб</td>
            <span>0.84</span>
            <span>1.75</span>
            <span>2.63</span>
            <span>3.50</span>
            <span>4.02</span>
            <span>5.43</span>
            <span>6.30</span>
            <span>7.70</span>
            <span>9.80</span>
          </div>
          <div className={ slide === 1 ? "active " + "slide-1 " + "slide" : "slide-1 " + "slide"}>
            <th className="m-bebas-20">Роль второго<br/>плана</th>
            <td className="m-helvetica-12-bold opacity-05">7 000 000 руб</td>
            <span>1.68</span>
            <span>3.50</span>
            <span>5.52</span>
            <span>7.00</span>
            <span>8.05</span>
            <span>10.85</span>
            <span>12.60</span>
            <span>15.40</span>
            <span>19.60</span>
          </div>
          <div className={ slide === 2 ? "active " + "slide-2 " + "slide" : "slide-2 " + "slide"}>
            <th className="m-bebas-20">Главная<br/>роль</th>
            <td className="m-helvetica-12-bold opacity-05">21 000 000 руб</td>
            <span>5.04</span>
            <span>10.50</span>
            <span>15.75</span>
            <span>21.00</span>
            <span>24.15</span>
            <span>32.55</span>
            <span>37.80</span>
            <span>46.20</span>
            <span>58.80</span>
          </div>
          <button
           className="prev-slide" style={{ opacity: 0 }}
           onClick={ () => this.handleClick(slide - 1) }></button>
          <button
           className="next-slide"
           onClick={ () => this.handleClick(slide + 1) }></button>
        </div>
      </div>
    )
  }
}

class TabContent2 extends Component{

  state = {
    slide: 0,
  }

  handleClick = (nextSlide) => {
    if( nextSlide >= 0 && nextSlide < 3 ){
      let currentSlide = document.getElementsByClassName('slide-' + this.state.slide)[0];

      currentSlide.style.opacity = 0;
      setTimeout(() => {
        this.setState({ slide: nextSlide });
        currentSlide.style = null;
      }, 250);
    }

    if( nextSlide <= 0 ){
      document.getElementsByClassName('tab-2-wrapper')[0].getElementsByClassName('prev-slide')[0].style.opacity = 0;
    }else{
      document.getElementsByClassName('tab-2-wrapper')[0].getElementsByClassName('prev-slide')[0].style.opacity = 1;
    }

    if( nextSlide >= 2 ){
      document.getElementsByClassName('tab-2-wrapper')[0].getElementsByClassName('next-slide')[0].style.opacity = 0;
    }else{
      document.getElementsByClassName('tab-2-wrapper')[0].getElementsByClassName('next-slide')[0].style.opacity = 1;
    }
  }

  render() {

    const {
      slide
    } = this.state;

    return(
      <div className="tab-2-wrapper">
        <div className="left-column m-bebas-20">
          <span>Кол-во контактов<br/>с рекламой за<br/>первый год</span>
          <span className="m-helvetica-12-bold opacity-05">Бюджет</span>
          <span>
            Кинопрокат<br/>
            <span className="m-helvetica-12-bold opacity-05">(прогнозный уровень)</span>
          </span>
          <span>
            Онлайн<br/>
            <span className="m-helvetica-12-bold opacity-05">(Минимальный уровень)</span>
          </span>
          <span>1 эфир на тв<br/>
            <span className="m-helvetica-12-bold opacity-05">(Средний уровень, приведённый На 30 сек)</span>
          </span>
        </div>
        <div className="right-column m-bebas-20">
          <div className={ slide === 0 ? "active " + "slide-0 " + "slide" : "slide-0 " + "slide"}>
            <th className="m-bebas-20">Эпизодическая<br/>роль</th>
            <td className="opacity-05 m-helvetica-12-bold">3 500 000 руб</td>
            <span>1.5 млн</span>
            <span>12.5 МЛН</span>
            <span>7 Млн</span>
          </div>
          <div className={ slide === 1 ? "active " + "slide-1 " + "slide" : "slide-1 " + "slide"}>
            <th className="m-bebas-20">Роль второго<br/>плана</th>
            <td className="m-helvetica-12-bold opacity-05">7 000 000 руб</td>
            <span>3 МЛн</span>
            <span>14 млн</span>
            <span>25 млн</span>
          </div>
          <div className={ slide === 2 ? "active " + "slide-2 " + "slide" : "slide-2 " + "slide"}>
            <th className="m-bebas-20">Главная<br/>роль</th>
            <td className="m-helvetica-12-bold opacity-05">21 000 000 руб</td>
            <span>7.5 млн</span>
            <span>35 млн</span>
            <span>62.5 млн</span>
          </div>
          <button
           className="prev-slide" style={{ opacity: 0 }}
           onClick={ () => this.handleClick(slide - 1) }></button>
          <button
           className="next-slide"
           onClick={ () => this.handleClick(slide + 1) }></button>
        </div>
        <div className="bottom-row m-bebas-20">
          <span>Цена за 1 контакт <sup>1</sup></span>
          <span>
            Этап 1 – кино | <span className="opacity-05">58 коп</span>
          </span>
          <span>
            Этап 2 – кино + онлайн| <span className="opacity-05">6 коп</span>
          </span>
          <span>
            Этап 3 – кино + онлайн + тв|
            <span className="opacity-05">4 коп</span>
          </span>
          <sub  className="m-helvetica-12-bold opacity-075"><sup>1</sup> С учётом инвестиционной доходности</sub>
        </div>
      </div>
    )
  }
}

class TabContent3 extends Component{
  render() {
    return(
      <div className="tab-3-wrapper">
        <div className="m-helvetica-12-bold">
          <span className="m-bebas-20 opacity-05">Период</span>
          <span className="m-bebas-20 opacity-05">Стадия производства</span>
          <span className="m-bebas-20">
            Декабрь <span className="opacity-05">2019</span><br/>
            –<br/>
            Май <span className="opacity-05">2020</span>
          </span>
          <span>
            Сценарная стадия:
            проработка эпизодов сценария
          </span>
          <span className="m-bebas-20 opacity-05">Этап интеграции</span>
          <span>
            разработка сценарных идей интеграции, доработка выбранной идеи,подготовка раскадровки интеграциии диалогов героев
          </span>
        </div>
        <div className="m-helvetica-12-bold">
          <span className="m-bebas-20">
            Декабрь <span className="opacity-05">2019</span><br/>
            –<br/>
            Май <span className="opacity-05">2020</span>
          </span>
          <span>
            Сценарная стадия:
            проработка эпизодов сценария
          </span>
          <span>
            разработка сценарных идей интеграции, доработка выбранной идеи,подготовка раскадровки интеграциии диалогов героев
          </span>
        </div>
        <div className="m-helvetica-12-bold">
          <span className="m-bebas-20">
            Декабрь <span className="opacity-05">2019</span><br/>
            –<br/>
            Май <span className="opacity-05">2020</span>
          </span>
          <span>
            Сценарная стадия:
            проработка эпизодов сценария
          </span>
          <span>
            разработка сценарных идей интеграции, доработка выбранной идеи,подготовка раскадровки интеграциии диалогов героев
          </span>
        </div>
        <div className="m-helvetica-12-bold">
          <span className="m-bebas-20">
            Декабрь <span className="opacity-05">2019</span><br/>
            –<br/>
            Май <span className="opacity-05">2020</span>
          </span>
          <span>
            Сценарная стадия:
            проработка эпизодов сценария
          </span>
          <span>
            разработка сценарных идей интеграции, доработка выбранной идеи,подготовка раскадровки интеграциии диалогов героев
          </span>
        </div>
      </div>
    )
  }
}
