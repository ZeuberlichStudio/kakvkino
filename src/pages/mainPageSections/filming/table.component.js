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
          "Прогноз возврата",
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
          <th>Зрители  в кинотеатре /<br/><span>{ !mode ? "(Возврат в процентах)" : "(Бюджет в процентах)" }</span></th>
          <th>Главная роль</th>
          <th>Роль второго плана</th>
          <th>Эпизодическая роль</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;500 000 <span>{ !mode ? "(12.5%)" : "(87.5%)" }</span></td>

          <td>{ !mode ? "4 372 500" : "30 607 500"}</td>
          <td>{ !mode ? "1 457 500" : "10 202 500"}</td>
          <td>{ !mode ? "  728 750" : "5 101 250"}</td>
        </tr>
        <tr>
          <td>1 000 000 <span>{ !mode ? "(25.0%)" : "(75.0%)" }</span></td>

          <td>{ !mode ? "8 745 000" : "26 235 000"}</td>
          <td>{ !mode ? "2 915 000" : "8 745 000"}</td>
          <td>{ !mode ? "1 457 500" : "4 372 500"}</td>
        </tr>
        <tr>
          <td>1 500 000 <span>{ !mode ? "(37.5%)" : "(62.5%)" }</span></td>

          <td>{ !mode ? "13 117 500" : "21 862 500"}</td>
          <td>{ !mode ? "4 372 500" : "7 287 500"}</td>
          <td>{ !mode ? "2 186 250" : "3 643 750"}</td>
        </tr>
        <tr>
          <td>2 000 000 <span>{ !mode ? "(50.0%)" : "(50.0%)" }</span></td>

          <td>{ !mode ? "17 490 000" : "17 490 000"}</td>
          <td>{ !mode ? "5 830 000" : "5 830 000"}</td>
          <td>{ !mode ? "2 915 000" : "2 915 000"}</td>
        </tr>
        <tr>
          <td>2 500 000 <span>{ !mode ? "(62.5%)" : "(37.5%)" }</span></td>

          <td>{ !mode ? "21 862 500" : "13 117 500"}</td>
          <td>{ !mode ? "7 287 500" : "4 372 500"}</td>
          <td>{ !mode ? "3 643 750" : "2 186 250"}</td>
        </tr>
        <tr>
          <td>3 000 000 <span>{ !mode ? "(75.0%)" : "(25.0%)" }</span></td>

          <td>{ !mode ? "26 235 000" : "8 745 000"}</td>
          <td>{ !mode ? "8 745 000" : "2 915 000"}</td>
          <td>{ !mode ? "4 372 500" : "1 457 500"}</td>
        </tr>
        <tr>
          <td>4 000 000 <span>{ !mode ? "(100.0%)" : "(0.0%)" }</span></td>

          <td>{ !mode ? "34 980 000" : "0"}</td>
          <td>{ !mode ? "11 660 000" : "0"}</td>
          <td>{ !mode ? "5 830 000" : "0"}</td>
        </tr>
        <tr>
          <td>5 000 000 <span>{ !mode ? "(125.0%)" : "(0.0%)" }</span></td>

          <td>{ !mode ? "43 725 000" : "0"}</td>
          <td>{ !mode ? "14 575 000" : "0"}</td>
          <td>{ !mode ? "7 287 500" : "0"}</td>
        </tr>
        <tr>
          <td>6 000 000 <span>{ !mode ? "(150.0%)" : "(0.0%)" }</span></td>

          <td>{ !mode ? "52 470 000" : "0"}</td>
          <td>{ !mode ? "17 490 000" : "0"}</td>
          <td>{ !mode ? "8 745 000" : "0"}</td>
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
          Возврат по тарифу, в соответствии с <a href="#how-it-works"><u>финансовой моделью</u></a>
        </span> :
        <span className="notice">
          Бюджет по тарифу, в соответствии с <a href="#how-it-works"><u>финансовой моделью</u></a>
        </span>
      }
    <Toggle toggleFunction={toggleFunction} options={["Возврат", "Рекламный бюджет"]}/>
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
