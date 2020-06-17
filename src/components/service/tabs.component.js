import React, { Component } from 'react';

//images
import tabs1 from '../../assets/images/tabs_1.svg';
import tabs2 from '../../assets/images/tabs_2.svg';
import tabs3 from '../../assets/images/tabs_3.svg';

export default class Tabs extends Component{

  componentDidMount() {
    let brand_tracking = document.getElementsByClassName('brand-tracking')[0];
    let brand_tracking_notice = document.getElementsByClassName('brand-tracking--notice')[0];

    brand_tracking.addEventListener('mouseover', () => {
      brand_tracking_notice.style.opacity = 1;
    });
    brand_tracking.addEventListener('mouseout', () => {
      brand_tracking_notice.style.opacity = 0;
    });
  }

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
        <div className="brand-tracking--notice">
          <h3 className="bebas-30">Бренд-­трекинг</h3>
          <p className="helvetica-14-bold">
            Мониторинг эмоциональной близости бренда, узнаваемость и запоминаемость рекламы, побуждение к действию до и в течение кинопроката.
          </p>
        </div>
      </div>
    )
  }
}

class TabContent0 extends Component{
  render() {
    return(
      <div className="tab-0-container">
        <div  className="helvetica-14-bold">
          <span>
            Бюджет, ₽ (без НДС)
          </span>
          <span>Вид интеграции бренда</span>
          <span>Отражение преимуществ</span>
          <span>Участие главных героев</span>
          <span>Кол-во эпизодов с присутствием бренда</span>
          <span>Хронометраж эпизодов с присутствием бренда</span>
          <span className="brand-tracking">
            <u>Бренд-трекинг</u>
          </span>
          <span>VIP-приглашение на премьеру</span>
        </div>

        <div>
          <span className="bebas-30">Эпизодическая<br/>роль</span>
          <span className="bebas-20">3 500 000</span>
          <span className="bebas-14">
            Демонстрация
            <span className="bebas-20"> или </span>
            упоминание
          </span>
          <span className="bebas-20">Нет</span>
          <span className="bebas-20">&nbsp;&nbsp;Нет*</span>
          <span className="bebas-20">1</span>
          <span className="bebas-20">30 сек</span>
          <span className="bebas-20">НЕТ</span>
          <span className="bebas-20">2</span>
        </div>

        <div>
          <span className="bebas-30">Роль второго<br/>плана</span>
          <span className="bebas-20">7 000 000</span>
          <span className="bebas-14">
            Демонстрация
            <span className="bebas-20"> и </span>
             упоминание
          </span>
          <span className="bebas-20">ДА</span>
          <span className="bebas-20">≥ 50% сцен</span>
          <span className="bebas-20">2</span>
          <span className="bebas-20">60 сек</span>
          <span className="bebas-20">ДА</span>
          <span className="bebas-20">6</span>
        </div>

        <div>
          <span className="bebas-30">Главная<br/>роль</span>
          <span className="bebas-20">21 000 000</span>
          <span className="bebas-14">
            Демонстрация
            <span className="bebas-20"> и </span>
            упоминание
          </span>
          <span className="bebas-20">ДА</span>
          <span className="bebas-20">≥ 50% сцен</span>
          <span className="bebas-20">6</span>
          <span className="bebas-20">180 сек</span>
          <span className="bebas-20">ДА</span>
          <span className="bebas-20">20</span>
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
              <span className="opacity-075 helvetica-14-bold">
                  Бюджет,<span className="helvetica-16-bold"> ₽ </span>
                 (без НДС)
              </span>
              <span>
                Кинотеатры<br/>
                <span className="helvetica-12-bold opacity-075">
                  (прогнозный уровень)
                </span>
              </span>
              <span>
                Интернет<br/>
                <span className="helvetica-12-bold opacity-075">
                  (минимальный уровень)
                </span>
              </span>
              <span>ТВ (Один выход)<br/>
                <span className="helvetica-12-bold opacity-075">
                  (средний уровень, приведённый на 30 сек)
                </span>
              </span>
            </div>
            <div className="">
              <span className="bebas-25">Эпизодическая<br/>роль</span>
              <span className="opacity-075">3 500 000</span>
              <span>1.5 млн</span>
              <span>12.5 МЛН</span>
              <span>7 Млн</span>
            </div>
            <div className="">
              <span className="bebas-25">Роль второго<br/>плана</span>
              <span className="opacity-075">7 000 000</span>
              <span>3 МЛн</span>
              <span>25 млн</span>
              <span>14 млн</span>
            </div>
            <div className="">
              <span className="bebas-25">Главная<br/>роль</span>
              <span className="opacity-075">21 000 000</span>
              <span>7.5 млн</span>
              <span>62.5 млн</span>
              <span>35 млн</span>
            </div>
          </div>

          <div>
            <h2 className="bebas-25">Цена за 1 контакт
            <span className="opacity-075"> (по этапам трансляции)</span><sup>1</sup></h2>
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
            <span className="opacity-075">(Доход в процентах)</span>
          </span>
          <span className="opacity-075 helvetica-14-bold">
            Бюджет,<span className="helvetica-16-bold"> ₽ </span>
           (без НДС)
          </span>
          <span>500 000
            <span className="opacity-075">&nbsp;&nbsp;&nbsp;&nbsp;(20%)</span>
          </span>
          <span>1 000 000 <span className="opacity-075"> (50%)</span></span>
          <span>1 500 000 <span className="opacity-075"> (75%)</span></span>
          <span>2 000 000 <span className="opacity-075"> (100%)</span></span>
          <span>2 500 000 <span className="opacity-075"> (120%)</span></span>
          <span>3 000 000 <span className="opacity-075"> (140%)</span></span>
          <span>4 000 000 <span className="opacity-075"> (180%)</span></span>
          <span>5 000 000 <span className="opacity-075"> (220%)</span></span>
          <span>6 000 000 <span className="opacity-075"> (260%)</span></span>
        </div>
        <div className="bebas-20">
          <span className="bebas-30">Эпизодическая<br/>роль</span>
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
          <div className="bebas-20">
            <span className="bebas-30">Роль второго<br/>плана</span>
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
          <div className="bebas-20">
            <span className="bebas-30">Главная<br/>роль</span>
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

          <span className="bebas-20">
            <i/>Доход по тарифу, в соответствии с &nbsp;
            <a href="#stats--article-2"><u>финансовой моделью</u></a>
          </span>
      </div>
    )
  }
}

class TabContent3 extends Component{
  render() {
    return(
      <div className="tab-3-container">
          <div className="bebas-20 opacity-075">
            <span>Период</span>
            <span>Стадия производства</span>
            <span>Этап интеграции</span>
          </div>
          <div>
            <span className="bebas-20">
            Декабрь <span className="opacity-075">2019</span><br/>–<br/>Май <span className="opacity-075">2020</span>
            </span>
            <span className="helvetica-12-bold">Сценарная стадия: проработка эпизодов сценария</span>
            <span className="helvetica-12-bold">разработка сценарных идей интеграции, доработка выбранной идеи, подготовка раскадровки интеграции и диалогов героев</span>
          </div>
          <div>
            <span className="bebas-20">
            Июнь <span className="opacity-075">2020</span><br/>–<br/>Август <span className="opacity-075">2020</span>
            </span>
            <span className="helvetica-12-bold">Производственная стадия 1:
            подготовка к съемкам,<br/>
            съемка</span>
            <span className="helvetica-12-bold">определение графика съемки сцен интеграций, съемка по утвержденным раскадровкам и диалогам</span>
          </div>
          <div>
            <span className="bebas-20">
            Сентябрь <span className="opacity-075">2020</span><br/>–<br/>Ноябрь <span className="opacity-075">2020</span>
            </span>
            <span className="helvetica-12-bold">Производственная стадия 2:
            пост-продакшн, итоговые
            переговоры с прокатчиками</span>
            <span className="helvetica-12-bold"></span>
          </div>
          <div>
            <span className="bebas-20">
            Март <span className="opacity-075">2021</span><br/>–<br/>Май <span className="opacity-075">2021</span>
            </span>
            <span className="helvetica-12-bold">Стадия кинопроката.</span>
            <span className="helvetica-12-bold"></span>
          </div>
      </div>
    )
  }
}
