import React, { Component } from 'react';

export default class MobileTabs extends Component{

  componenspanidMount() {
    let brand_tracking = document.getElementsByClassName('brand-tracking')[0];
    let brand_tracking_notice = document.getElementsByClassName('brand-tracking--notice')[0];

    brand_tracking.addEventListener('mouseover', () => {
      brand_tracking_notice.style.opacity =
      brand_tracking_notice.style.getPropertyValue('opacity') ?
      1 : 0;
    });
    brand_tracking.addEventListener('mouseout', () => {
      brand_tracking_notice.style.opacity = 0;
    });
  }

  state = {
    tab: 0
  }

  isSamsungBrowser = navigator.userAgent.match(/SamsungBrowser/i);

  onClick = (e) => {
    let tab = parseInt(e.currentTarget.dataset.tab);
    this.setState({ tab });
  }

  brandTrackingClose = () => {
    let brand_tracking_notice = document.getElementsByClassName('brand-tracking--notice')[0];
    brand_tracking_notice.style.opacity = 0;
  }

  render() {
    const{
      tab
    } = this.state;

    const{
      onClick,
      brandTrackingClose
    } = this;

    return(
      <div id="tabs-container" className={ this.isSamsungBrowser ? 'samsung' : null }>
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
              Прогноз доходности
            </a>
            <TabContent1/>
          </li>
          <li className={ tab === 2 ? 'active' : null }>
            <a
            data-tab="2"
            onClick={ (e) => onClick(e) }
            className="m-bebas-20">
              Прогноз эффективности
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
        <div className="brand-tracking--notice">
          <div onClick={brandTrackingClose} id="brand-tracking--notice-close"></div>
          <h3 className="bebas-30 m-bebas-20">Бренд-­трекинг</h3>
          <p className="helvetica-14-bold m-helvetica-12-bold">
            длительное маркетинговое исследование, применяемое для получения в динамике информации о состоянии бренда на рынке (известность, использование, имидж, характерис-тика потребителей бренда, здоровье бренда и т.п.).
          </p>
        </div>
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
        <div  className="left-column m-helvetica-12-bold opacity-075">
          <span>Бюджет, ₽ (без НДС)</span>
          <span>Вид интеграции бренда</span>
          <span>Отражение преимуществ</span>
          <span>Участие главных героев</span>
          <span>Кол-во эпизодов с присутствием бренда</span>
          <span>Хронометраж эпизодов с присутствием бренда</span>
          <span className="brand-tracking"><u>Бренд-трекинг</u></span>
          <span>VIP-приглашение на премьеру</span>
        </div>
        <div className="right-column m-bebas-20">
          <div className={ slide === 0 ? "active " + "slide-0 " + "slide" : "slide-0 " + "slide"}>
            <h3 className="m-bebas-20">Эпизодическая<br/>роль</h3>
            <span>3 500 000</span>
            <span className="m-bebas-14">
              Демонстрация <span className="m-bebas-20">или</span> упоминание
            </span>
            <span>Нет</span>
            <span>&nbsp;&nbsp;Нет*</span>
            <span>1</span>
            <span>30 сек</span>
            <span>НЕТ</span>
            <span>2</span>
          </div>
          <div className={ slide === 1 ? "active " + "slide-1 " + "slide" : "slide-1 " + "slide"}>
            <h3 className="m-bebas-20">Роль второго<br/>плана</h3>
            <span>7 000 000</span>
            <span className="m-bebas-14">
              Демонстрация <span className="m-bebas-20">и</span> упоминание
            </span>
            <span>ДА</span>
            <span>≥ 50% сцен</span>
            <span>2</span>
            <span>60 сек</span>
            <span>ДА</span>
            <span>6</span>
          </div>
          <div className={ slide === 2 ? "active " + "slide-2 " + "slide" : "slide-2 " + "slide"}>
            <h3 className="m-bebas-20">Главная<br/>роль</h3>
            <span>21 000 000</span>
            <span className="m-bebas-14">
              Демонстрация <span className="m-bebas-20">и</span> упоминание
            </span>
            <span>ДА</span>
            <span>≥ 50% сцен</span>
            <span>6</span>
            <span>180 сек</span>
            <span>ДА</span>
            <span>20</span>
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
          <span className="opacity-075">
            Бюджет, <span className="m-helvetica-16-bold">₽</span> (без НДС)
          </span>
          <span>500 000
            <span className="opacity-075">&nbsp;&nbsp;&nbsp;&nbsp;(20%)</span>
          </span>
          <span>1 000 000 <span className="opacity-075">(50%)</span></span>
          <span>1 500 000 <span className="opacity-075">(75%)</span></span>
          <span>2 000 000 <span className="opacity-075">(100%)</span></span>
          <span>2 500 000 <span className="opacity-075">(120%)</span></span>
          <span>3 000 000 <span className="opacity-075">(140%)</span></span>
          <span>4 000 000 <span className="opacity-075">(180%)</span></span>
          <span>5 000 000 <span className="opacity-075">(220%)</span></span>
          <span>6 000 000 <span className="opacity-075">(260%)</span></span>
          <span className="m-helvetica-12-bold">
            <i/>
            <span className="opacity-075">
              доход по тарифу,<br/> в соответствии<br/>
              с <a href="#stats--article-2"><u>финансовой моделью</u></a>
            </span>
          </span>
        </div>
        <div className="right-column m-bebas-20">
          <div className={ slide === 0 ? "active " + "slide-0 " + "slide" : "slide-0 " + "slide"}>
            <h3 className="m-bebas-20">Эпизодическая<br/>роль</h3>
            <span className="opacity-075">3 500 000</span>
            <span>700 000</span>
            <span>1 750 000</span>
            <span>2 625 000</span>
            <span>3 500 000</span>
            <span>4 200 000</span>
            <span>5 900 000</span>
            <span>6 300 000</span>
            <span>7 700 000</span>
            <span>9 100 000</span>
          </div>
          <div className={ slide === 1 ? "active " + "slide-1 " + "slide" : "slide-1 " + "slide"}>
            <h3 className="m-bebas-20">Роль второго<br/>плана</h3>
            <span className="opacity-075">7 000 000</span>
            <span>1 400 000</span>
            <span>3 500 000</span>
            <span>5 250 000</span>
            <span>7 000 000</span>
            <span>8 400 000</span>
            <span>9 800 000</span>
            <span>12 600 000</span>
            <span>15 400 000</span>
            <span>18 200 000</span>
          </div>
          <div className={ slide === 2 ? "active " + "slide-2 " + "slide" : "slide-2 " + "slide"}>
            <h3 className="m-bebas-20">Главная<br/>роль</h3>
            <span className="opacity-075">21 000 000</span>
            <span>4 200 000</span>
            <span>10 500 000</span>
            <span>15 750 000</span>
            <span>21 000 000</span>
            <span>25 200 000</span>
            <span>29 400 000</span>
            <span>37 800 000</span>
            <span>46 200 000</span>
            <span>54 600 000</span>
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
          <span className="opacity-075">
            Бюджет, <span className="m-helvetica-16-bold">₽</span> (без НДС)
          </span>
          <span>
            Кинотеатры<br/>
            <span className="m-helvetica-12-bold opacity-075">(прогнозный уровень)</span>
          </span>
          <span>
            Интернет<br/>
            <span className="m-helvetica-12-bold opacity-075">(минимальный уровень)</span>
          </span>
          <span>тв (Один выход)<br/>
            <span className="m-helvetica-12-bold opacity-075">(средний уровень,
              приведённый на 30 сек)</span>
          </span>
        </div>
        <div className="right-column m-bebas-20">
          <div className={ slide === 0 ? "active " + "slide-0 " + "slide" : "slide-0 " + "slide"}>
            <h3 className="m-bebas-20">Эпизодическая<br/>роль</h3>
            <span className="opacity-075">3 500 000</span>
            <span>1.5 млн</span>
            <span>12.5 МЛН</span>
            <span>7 Млн</span>
          </div>
          <div className={ slide === 1 ? "active " + "slide-1 " + "slide" : "slide-1 " + "slide"}>
            <h3 className="m-bebas-20">Роль второго<br/>плана</h3>
            <span className="opacity-075">7 000 000</span>
            <span>3 МЛн</span>
            <span>25 млн</span>
            <span>14 млн</span>
          </div>
          <div className={ slide === 2 ? "active " + "slide-2 " + "slide" : "slide-2 " + "slide"}>
            <h3 className="m-bebas-20">Главная<br/>роль</h3>
            <span className="opacity-075">21 000 000</span>
            <span>7.5 млн</span>
            <span>62.5 млн</span>
            <span>35 млн</span>
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
            Этап 1 – кинотеатры | <span className="opacity-075">58 коп</span>
          </span>
          <span>
            Этап 2 – кинотеатры + интернет| <span className="opacity-075">6 коп</span>
          </span>
          <span>
            Этап 3 – кинотеатры + интернет + тв|
            <span className="opacity-075">4 коп</span>
          </span>
          <sub  className="m-helvetica-12-bold opacity-075"><sup>1</sup> с учётом инвестиционной доходности</sub>
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
          <span className="m-bebas-20 opacity-075">Период</span>
          <span className="m-bebas-20 opacity-075">Стадия производства</span>
          <span className="m-bebas-20">
            Декабрь <span className="opacity-075">2019</span><br/>
            –<br/>
            Май <span className="opacity-075">2020</span>
          </span>
          <span>
            Сценарная стадия:
            проработка эпизодов сценария
          </span>
          <span className="m-bebas-20 opacity-075">Этап интеграции</span>
          <span>
            разработка сценарных идей интеграции, доработка выбранной идеи,подготовка раскадровки интеграциии диалогов героев
          </span>
        </div>
        <div className="m-helvetica-12-bold">
          <span className="m-bebas-20">
            Июнь <span className="opacity-075">2020</span><br/>
            –<br/>
            Август <span className="opacity-075">2020</span>
          </span>
          <span>
            Производственная стадия 1:
            подготовка к съемкам,<br/>
            съемка
          </span>
          <span>
            определение графика съемки сцен интеграций, съемка по утвержденным раскадровкам и диалогам
          </span>
        </div>
        <div className="m-helvetica-12-bold">
          <span className="m-bebas-20">
            Сентябрь <span className="opacity-075">2020</span><br/>
            –<br/>
            Ноябрь <span className="opacity-075">2020</span>
          </span>
          <span>
            Производственная стадия 2:
            пост-продакшн, итоговые
            переговоры с прокатчиками
          </span>
          <span>
            рассмотрение монтажной версии
          </span>
        </div>
        <div className="m-helvetica-12-bold">
          <span className="m-bebas-20">
            Март <span className="opacity-075">2021</span><br/>
            –<br/>
            Май <span className="opacity-075">2021</span>
          </span>
          <span>
            Стадия кинопроката.
          </span>
        </div>
      </div>
    )
  }
}
