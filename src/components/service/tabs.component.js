import React, { Component } from 'react';

//images
import tabs1 from '../../assets/images/tabs_1.svg';
import tabs2 from '../../assets/images/tabs_2.svg';
import tabs3 from '../../assets/images/tabs_3.svg';

export default class Tabs extends Component{

  render() {
    const{
      tab,
      changeTab
    } = this.props;

    return(
      <div id="tabs-container">
        <ul id="tabs-navigation" className="bebas-20">
          <li data-tab="0"
           onClick={ (e) => changeTab(e) }
           className={ tab === 0 ? 'active tab-nav' : 'tab-nav' }>
            Тарифные планы
          </li>
          <li  data-tab="1"
          onClick={ (e) => changeTab(e) }
          className={ tab === 1 ? 'active  tab-nav' : 'tab-nav' }>
            Прогноз эффективности
          </li>
          <li  data-tab="2"
          onClick={ (e) => changeTab(e) }
          className={ tab === 2 ? 'active tab-nav' : 'tab-nav' }>
            Прогноз доходности
          </li>
          <li  data-tab="3"
          onClick={ (e) => changeTab(e) }
          className={ tab === 3 ? 'active tab-nav' : 'tab-nav' }>
            График производства
          </li>
        </ul>
        <div id="tab-content" className="active">
          { tab === 0 ? <TabContent0/> : null }
          { tab === 1 ? <TabContent1/> : null }
          { tab === 2 ? <TabContent2/> : null }
          { tab === 3 ? <TabContent3/> : null }
        </div>
      </div>
    )
  }
}

class TabContent0 extends Component{
  render() {
    return(
      <div className="tab-0-container">
        <div  className="helvetica-14-bold opacity-05">
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

        <div className="bebas-20">
          <span className="bebas-30">Эпизодическая<br/>роль</span>
          <span className="opacity-05">3 500 000 руб</span>
          <span>ИЛИ</span>
          <span>ИЛИ</span>
          <span>Нет</span>
          <span>Нет*</span>
          <span>1</span>
          <span>30 сек</span>
          <span>НЕТ</span>
          <span>2</span>
        </div>

        <div className="bebas-20">
          <span className="bebas-30">Роль второго<br/>плана</span>
          <span className="opacity-05">7 000 000 руб</span>
          <span>ДА</span>
          <span>ДА</span>
          <span>ДА</span>
          <span>≥50% сцен</span>
          <span>2</span>
          <span>60 сек</span>
          <span>ДА</span>
          <span>6</span>
        </div>

        <div className="bebas-20">
          <span className="bebas-30">Главная<br/>роль</span>
          <span className="opacity-05">21 000 000 руб</span>
          <span>ДА</span>
          <span>ДА</span>
          <span>ДА</span>
          <span>≥50% сцен</span>
          <span>6</span>
          <span>180 сек</span>
          <span>ДА</span>
          <span>20</span>
        </div>
      </div>
    )
  }
}

class TabContent1 extends Component{
  render() {
    return(
      <div className="tab-1-container">
          <div>
              <h2 className="bebas-25">
                Количество контактов с рекламой за первый год
              </h2>
          </div>

          <div className="bebas-20 columns">
            <div className="bebas-20">
              <span className="opacity-05">Бюджет</span>
              <span>
                Кинопрокат<br/>
                <span className="helvetica-12-bold opacity-05">
                  (прогнозный уровень)
                </span>
              </span>
              <span>
                Онлайн<br/>
                <span className="helvetica-12-bold opacity-05">
                  (Минимальный уровень)
                </span>
              </span>
              <span>1 эфир на тв<br/>
                <span className="helvetica-12-bold opacity-05">
                  (Средний уровень, приведённый На 30 сек)
                </span>
              </span>
            </div>
            <div className="">
              <span className="bebas-25">Эпизодическая<br/>роль</span>
              <span className="opacity-05">3 500 000 руб</span>
              <span>1.5 млн</span>
              <span>12.5 МЛН</span>
              <span>7 Млн</span>
            </div>
            <div className="">
              <span className="bebas-25">Роль второго<br/>плана</span>
              <span className="opacity-05">7 000 000 руб</span>
              <span>3 МЛн</span>
              <span>25 млн</span>
              <span>14 млн</span>
            </div>
            <div className="">
              <span className="bebas-25">Главная<br/>роль</span>
              <span className="opacity-05">21 000 000 руб</span>
              <span>7.5 млн</span>
              <span>35 млн</span>
              <span>62.5 млн</span>
            </div>
          </div>

          <div>
            <h2 className="bebas-25">Цена за 1 контакт
            <span className="opacity-05"> (по этапам трансляции)</span><sup>1</sup></h2>
          </div>

          <div className="illustrations">
            <img alt="" src={tabs1}/>
            <img alt="" src={tabs2}/>
            <img alt="" src={tabs3}/>
          </div>

          <div className="helvetica-12-bold notice">
            <span className="opacity small">
              <sup>1</sup> С учётом инвестиционной доходности
            </span>
          </div>
      </div>
    )
  }
}

class TabContent2 extends Component{
  render() {
    return(
      <div className="tab-2-container">
        <div className="bebas-20">
          <span>
            Зрители  в кинотеатре:
            <span className="opacity-05">(Доход в процентах)</span>
          </span>
          <span className="opacity-05">Бюджет</span>
          <span>500 000
            <span className="opacity-05">&nbsp;&nbsp;&nbsp;&nbsp;(20%)</span>
          </span>
          <span>1 000 000 <span className="opacity-05"> (50%)</span></span>
          <span>1 500 000 <span className="opacity-05"> (75%)</span></span>
          <span>2 000 000 <span className="opacity-05"> (100%)</span></span>
          <span>2 500 000 <span className="opacity-05"> (120%)</span></span>
          <span>3 000 000 <span className="opacity-05"> (140%)</span></span>
          <span>4 000 000 <span className="opacity-05"> (180%)</span></span>
          <span>5 000 000 <span className="opacity-05"> (220%)</span></span>
          <span>6 000 000 <span className="opacity-05"> (280%)</span></span>
        </div>
        <div className="bebas-20">
          <span className="bebas-30">Эпизодическая<br/>роль</span>
          <span className="opacity-05">3 500 000 руб</span>
          <span>840 000</span>
          <span>1 750 000</span>
          <span>2 630 000</span>
          <span>3 500 000</span>
          <span>4 020 000</span>
          <span>5 430 000</span>
          <span>6 300 000</span>
          <span>7 700 000</span>
          <span>9 800 000</span>
        </div>
          <div className="bebas-20">
            <span className="bebas-30">Роль второго<br/>плана</span>
            <span className="opacity-05">7 000 000 руб</span>
            <span>1 680 000</span>
            <span>3 500 000</span>
            <span>5 520 000</span>
            <span>7 000 000</span>
            <span>8 050 000</span>
            <span>10 850 000</span>
            <span>12 600 000</span>
            <span>15 400 000</span>
            <span>19 600 000</span>
          </div>
          <div className="bebas-20">
            <span className="bebas-30">Главная<br/>роль</span>
            <span className="opacity-05">21 000 000 руб</span>
            <span>5 040 000</span>
            <span>10 500 000</span>
            <span>15 750 000</span>
            <span>21 000 000</span>
            <span>24 150 000</span>
            <span>32 550 000</span>
            <span>37 800 000</span>
            <span>46 200 000</span>
            <span>58 800 000</span>
          </div>

          <span className="bebas-20">
            <i/>Доход по тарифу, в соответствии с &nbsp;
            <a href="#stats--article-2"><u>финансовой моделью</u></a>
            <span className="opacity-075"> (МЛН ₽)</span>
          </span>
      </div>
    )
  }
}

class TabContent3 extends Component{
  render() {
    return(
      <div className="tab-3-container">
          <div className="bebas-20 opacity-05">
            <span>Период</span>
            <span>Стадия производства</span>
            <span>Этап интеграции</span>
          </div>
          <div>
            <span className="bebas-20">
            Декабрь <span className="opacity-05">2019</span><br/>–<br/>Май <span className="opacity-05">2020</span>
            </span>
            <span className="helvetica-12-bold">Сценарная стадия: проработка эпизодов сценария</span>
            <span className="helvetica-12-bold">разработка сценарных идей интеграции, доработка выбранной идеи, подготовка раскадровки интеграции и диалогов героев</span>
          </div>
          <div>
            <span className="bebas-20">
            Июнь <span className="opacity-05">2020</span><br/>–<br/>Август <span className="opacity-05">2020</span>
            </span>
            <span className="helvetica-12-bold">Производственная стадия 1:
            подготовка к съемкам,
            Съемка</span>
            <span className="helvetica-12-bold">определение графика съемки сцен интеграций, съемка по утвержденным раскадровкам и диалогам</span>
          </div>
          <div>
            <span className="bebas-20">
            Сентябрь <span className="opacity-05">2020</span><br/>–<br/>Ноябрь <span className="opacity-05">2020</span>
            </span>
            <span className="helvetica-12-bold">Производственная стадия 2:
            пост-продакшн, итоговые
            переговоры с прокатчиками</span>
            <span className="helvetica-12-bold"></span>
          </div>
          <div>
            <span className="bebas-20">
            Март <span className="opacity-05">2021</span><br/>–<br/>Май <span className="opacity-05">2021</span>
            </span>
            <span className="helvetica-12-bold">Стадия кинопроката.</span>
            <span className="helvetica-12-bold"></span>
          </div>
      </div>
    )
  }
}
