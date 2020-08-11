import React, { useEffect, useState } from 'react'
import DialogWindow from 'components/dialogWindow.component'
import Toggle from 'components/toggle.component'

import pricing_1 from 'assets/images/filming_table_pricing_1.svg'
import pricing_2 from 'assets/images/filming_table_pricing_2.svg'
import pricing_3 from 'assets/images/filming_table_pricing_3.svg'

const Table = () => {

  const [activeTab, setActiveTab] = useState(0);

  function changeTab(tab) {
    setActiveTab(tab);
  }

  return(
    <div className="filming-section_table">
      <TableControls
        tabsTitles={[
          "Тарифные планы",
          "Прогноз доходности",
          "Прогноз эффективности",
          "Дополнительно"
        ]}
        changeTab={changeTab}
        activeTab={activeTab}
      />
      <div className="filming-section_table_content">
        {
          activeTab === 0 ? <Tab0/> :
          activeTab === 1 ? <Tab1/> :
          activeTab === 2 ? <Tab2/> :
          activeTab === 3 ? <Tab3/> : null
        }
      </div>
    </div>
  );
}

const TableControls = ({changeTab, tabsTitles, activeTab}) => (
  <div className="filming-section_table_controls">
    {
      tabsTitles.map((title, i) => (
        <button
          onClick={ () => changeTab(i) }
          className={ activeTab === i ? "active" : null }
        >
          {title}
        </button>
      ))
    }
  </div>
)

const Tab0 = () => (
  <div className="filming-section_table_content_tab filming-section_table_content_tab-0">
    <div className="hightlight highlight-0">
      <span></span>
      <span></span>
    </div>
    <div className="hightlight highlight-1">
      <span></span>
      <span></span>
    </div>
    <div className="hightlight highlight-2">
      <span></span>
      <span></span>
    </div>
    <div className="lines">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <table>
      <tbody>
        <tr>
          <th>Тариф включает:</th>
          <th>Главная роль</th>
          <th>Роль второго плана</th>
          <th>Эпизодическая роль</th>
        </tr>
        <tr>
          <td>Демонстрация бренда</td>
          <td>Да</td>
          <td>Да</td>
          <td>Или</td>
        </tr>
        <tr>
          <td>Упоминание бренда</td>
          <td>Да</td>
          <td>Да</td>
          <td>Или</td>
        </tr>
        <tr>
          <td>Отражение преимуществ</td>
          <td>Да</td>
          <td>Да</td>
          <td>Нет</td>
        </tr>
        <tr>
          <td>Участие главных героев</td>
          <td>≥50% сцен</td>
          <td>≥50% сцен</td>
          <td>&nbsp;&nbsp;Нет*</td>
        </tr>
        <tr>
          <td>Кол-во эпизодов<br/>с присутствием бренда</td>
          <td>6</td>
          <td>2</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Хронометраж эпизодов<br/>с присутствием бренда</td>
          <td>180 сек</td>
          <td>60 сек</td>
          <td>30 сек</td>
        </tr>
        <tr>
          <td>
            <DialogWindow text="Бренд-трекинг">
              <h4>Бренд-трекинг</h4>
              <p>
                Мониторинг эмоциональной близости бренда,
                узнаваемость и запоминаемость рекламы, побуждение к
                действию до <br/>
                и в течение кинопроката
              </p>
            </DialogWindow>
          </td>
          <td>Да</td>
          <td>Да</td>
          <td>Нет</td>
        </tr>
        <tr>
          <td>VIP-приглашение<br/>на премьеру</td>
          <td>20</td>
          <td>6</td>
          <td>2</td>
        </tr>
        <tr>
          <th>Бюджет тарифа: <span>(В рублях, без НДС)</span></th>
          <th>34 980 000</th>
          <th>11 660 000</th>
          <th>5 830 000</th>
        </tr>
      </tbody>
    </table>
    <span className="notice">* Возможно обсуждение при наценке от 50%</span>
  </div>
)

const Tab1 = () => {

  const [mode, setMode] = React.useState(0);

  function toggleFunction(option) {
    if( option !== undefined && option !== mode ) setMode(option);
    else if( option === undefined ) setMode( mode === 0 ? 1 : 0 );
  }

  return(
  <div
    className={`filming-section_table_content_tab filming-section_table_content_tab-1 ${!mode ? "mode-0" : "mode-1"}`}
  >
    <div className="hightlight highlight-0">
      <span></span>
      <span></span>
    </div>
    <div className="hightlight highlight-1">
      <span></span>
      <span></span>
    </div>
    <div className="hightlight highlight-2">
      <span></span>
      <span></span>
    </div>
    <div className="lines">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <table>
      <tbody>
        <tr>
          <th>Зрители  в кинотеатре /<br/><span>{ !mode ? "(Доход в процентах)" : "(Бюджет в процентах)" }</span></th>
          <th>Главная роль</th>
          <th>Роль второго плана</th>
          <th>Эпизодическая роль</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;500 000 <span>{ !mode ? "(15%)" : "(85%)" }</span></td>

          <td>{ !mode ? "5 247 000" : "29 733 000"}</td>
          <td>{ !mode ? "1 749 000" : "9 911 000"}</td>
          <td>{ !mode ? "  874 500" : "4 955 000"}</td>
        </tr>
        <tr>
          <td>1 000 000 <span>{ !mode ? "(30%)" : "(70%)" }</span></td>

          <td>{ !mode ? "10 494 000" : "24 486 000"}</td>
          <td>{ !mode ? "3 498 000" : "8 162 000"}</td>
          <td>{ !mode ? "1 749 000" : "4 081 000"}</td>
        </tr>
        <tr>
          <td>1 500 000 <span>{ !mode ? "(50%)" : "(50%)" }</span></td>

          <td>{ !mode ? "17 490 000" : "17 490 000"}</td>
          <td>{ !mode ? "5 830 000" : "5 830 000"}</td>
          <td>{ !mode ? "2 915 000" : "2 915 000"}</td>
        </tr>
        <tr>
          <td>2 000 000 <span>{ !mode ? "(70%)" : "(30%)" }</span></td>

          <td>{ !mode ? "24 486 000" : "10 494 000"}</td>
          <td>{ !mode ? "8 162 000" : "3 498 000"}</td>
          <td>{ !mode ? "4 081 000" : "1 749 000"}</td>
        </tr>
        <tr>
          <td>2 500 000 <span>{ !mode ? "(85%)" : "(15%)" }</span></td>

          <td>{ !mode ? "29 733 000" : "5 247 000"}</td>
          <td>{ !mode ? "9 911 000" : "1 749 000"}</td>
          <td>{ !mode ? "4 955 500" : "874 500"}</td>
        </tr>
        <tr>
          <td>3 000 000 <span>{ !mode ? "(100%)" : "(0%)" }</span></td>

          <td>{ !mode ? "34 980 000" : "0"}</td>
          <td>{ !mode ? "11 660 000" : "0"}</td>
          <td>{ !mode ? "5 830 000" : "0"}</td>
        </tr>
        <tr>
          <td>4 000 000 <span>{ !mode ? "(120%)" : "(0%)" }</span></td>

          <td>{ !mode ? "41 976 000" : "0"}</td>
          <td>{ !mode ? "13 992 000" : "0"}</td>
          <td>{ !mode ? "6 996 000" : "0"}</td>
        </tr>
        <tr>
          <td>5 000 000 <span>{ !mode ? "(140%)" : "(0%)" }</span></td>

          <td>{ !mode ? "48 972 000" : "0"}</td>
          <td>{ !mode ? "16 324 000" : "0"}</td>
          <td>{ !mode ? "8 162 000" : "0"}</td>
        </tr>
        <tr>
          <td>6 000 000 <span>{ !mode ? "(160%)" : "(0%)" }</span></td>

          <td>{ !mode ? "55 968 000" : "0"}</td>
          <td>{ !mode ? "18 656 000" : "0"}</td>
          <td>{ !mode ? "9 328 000" : "0"}</td>
        </tr>
        <tr>
          <th>Бюджет тарифа: <br/><span>(В рублях, без НДС)</span></th>

          <th>34 980 000</th>
          <th>11 660 000</th>
          <th>5 830 000</th>
        </tr>
      </tbody>
    </table>
      {
        !mode ?
        <span className="notice">
          Доход по тарифу, в соответствии с <a href="#how-it-works"><u>финансовой моделью</u></a>
        </span> :
        <span className="notice">
          Бюджет по тарифу, в соответствии с <a href="#how-it-works"><u>финансовой моделью</u></a>
        </span>
      }
    <Toggle toggleFunction={toggleFunction} options={["Доход", "Рекламный бюджет"]}/>
  </div>)
}

const Tab2 = () => (
  <div className="filming-section_table_content_tab filming-section_table_content_tab-2">
    <div className="hightlight highlight-0">
      <span></span>
      <span></span>
    </div>
    <div className="hightlight highlight-1">
      <span></span>
      <span></span>
    </div>
    <div className="hightlight highlight-2">
      <span></span>
      <span></span>
    </div>
    <div className="lines">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <span className="notice">
      <sup>1</sup> С учётом инвестиционной доходности
    </span>
    <table>
      <tbody>
        <tr><th>Количество контактов с рекламой за первый год</th></tr>
        <tr>
          <th>По медиа каналам:</th>
          <th>Главная роль</th>
          <th>Роль второго плана</th>
          <th>Эпизодическая роль</th>
        </tr>
        <tr>
          <th>кинотеатры<span>(прогнозный уровень)</span></th>

          <td>7.5 млн</td>
          <td>3 МЛн</td>
          <td>1.5 млн</td>
        </tr>
        <tr>
          <th>Интернет<span>(минимальный уровень)</span></th>

          <td>62.5 МЛН</td>
          <td>25 МЛН</td>
          <td>12.5 МЛН</td>
        </tr>
        <tr>
          <th>
            тв (Один выход)
            <span>(средний уровень,<br/> приведённый на 30 сек)</span>
          </th>

          <td>35 МЛН</td>
          <td>14 МЛН</td>
          <td>7 МЛН</td>
        </tr>
        <tr>
          <th>Бюджет тарифа: <span>(В рублях, без НДС)</span></th>

          <th>34 980 000</th>
          <th>11 660 000</th>
          <th>5 830 000</th>
        </tr>
        <tr>
          <th>
            Цена за 1 контакт &nbsp;
            <span className="opacity">(по этапам трансляции)<sup>1</sup></span>
          </th>
        </tr>

        <tr>
          <td><img src={pricing_1} alt=""/></td>
          <td><img src={pricing_2} alt=""/></td>
          <td><img src={pricing_3} alt=""/></td>
        </tr>
      </tbody>
    </table>
  </div>
)

const Tab3 = () => (
  <div className="filming-section_table_content_tab filming-section_table_content_tab-3">
    <h2>Возможности расширения Рекламной интеграции:</h2>
    <div>
      <h3>Трейлер к фильму</h3>
      <p>
        включение эпизода с присутствием бренда существенно увеличивает охват – 55% кинозрителей смотрят трейлеры к фильмам
        <span> (Фонд кино, Кинозритель 2017-2018)</span>
      </p>
    </div>
    <div>
      <h3>Спонсорство премьеры</h3>
      <p>
        присутствие бренда на мероприятии (прессволл, бренд-корнер) и последующее упоминание бренда в СМИ (от 30)
      </p>
    </div>
    <div>
      <h3>Рекламная кампания</h3>
      <p>
        Проведение рекламной кампании бренда в момент выхода фильма в кинотеатрах с участием одного из героев фильма
      </p>
    </div>
    <div>
      <h3>Социальные сети</h3>
      <p>
        Поддержка бренда в социальных сетях актерами в момент выхода фильма в  кинотеатрах
      </p>
    </div>
  </div>
)

export default Table;
