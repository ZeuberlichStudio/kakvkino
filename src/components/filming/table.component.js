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
          <td>Вид интеграции бренда</td>
          <td>Демонстрация <span>и</span> упоминание</td>
          <td>Демонстрация <span>и</span> упоминание</td>
          <td>Демонстрация <span>или</span> упоминание</td>
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
          <th>21 000 000</th>
          <th>7 000 000</th>
          <th>3 500 000</th>
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
          <th>Зрители  в кинотеатре: <br/><span>(Доход в процентах)</span></th>
          <th>Главная роль</th>
          <th>Роль второго плана</th>
          <th>Эпизодическая роль</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;500 000 <span>(20%)</span></td>

          <td>{ !mode ? "4 200 000" : "16 800 000"}</td>
          <td>{ !mode ? "1 400 000" : "5 600 000"}</td>
          <td>{ !mode ? "  700 000" : "2 800 000"}</td>
        </tr>
        <tr>
          <td>1 000 000 <span>(50%)</span></td>

          <td>{ !mode ? "10 500 000" : "10 500 000"}</td>
          <td>{ !mode ? "3 500 000" : "3 500 000"}</td>
          <td>{ !mode ? "1 750 000" : "1 750 000"}</td>
        </tr>
        <tr>
          <td>1 500 000 <span>(75%)</span></td>

          <td>{ !mode ? "15 750 000" : "5 250 000"}</td>
          <td>{ !mode ? "5 250 000" : "1 750 000"}</td>
          <td>{ !mode ? "2 625 000" : "  875 000"}</td>
        </tr>
        <tr>
          <td>2 000 000 <span>(100%)</span></td>

          <td>{ !mode ? "21 000 000" : "0"}</td>
          <td>{ !mode ? "7 000 000" : "0"}</td>
          <td>{ !mode ? "3 500 000" : "0"}</td>
        </tr>
        <tr>
          <td>2 500 000 <span>(120%)</span></td>

          <td>{ !mode ? "25 200 000" : "0"}</td>
          <td>{ !mode ? "8 400 000" : "0"}</td>
          <td>{ !mode ? "4 200 000" : "0"}</td>
        </tr>
        <tr>
          <td>3 000 000 <span>(140%)</span></td>

          <td>{ !mode ? "29 400 000" : "0"}</td>
          <td>{ !mode ? "9 800 000" : "0"}</td>
          <td>{ !mode ? "5 900 000" : "0"}</td>
        </tr>
        <tr>
          <td>4 000 000 <span>(180%)</span></td>

          <td>{ !mode ? "37 800 000" : "0"}</td>
          <td>{ !mode ? "12 600 000" : "0"}</td>
          <td>{ !mode ? "6 300 000" : "0"}</td>
        </tr>
        <tr>
          <td>5 000 000 <span>(220%)</span></td>

          <td>{ !mode ? "46 200 000" : "0"}</td>
          <td>{ !mode ? "15 400 000" : "0"}</td>
          <td>{ !mode ? "7 700 000" : "0"}</td>
        </tr>
        <tr>
          <td>6 000 000 <span>(260%)</span></td>

          <td>{ !mode ? "54 600 000" : "0"}</td>
          <td>{ !mode ? "18 200 000" : "0"}</td>
          <td>{ !mode ? "9 100 000" : "0"}</td>
        </tr>
        <tr>
          <th>Бюджет тарифа: <br/><span>(В рублях, без НДС)</span></th>

          <th>21 000 000 </th>
          <th>7 000 000</th>
          <th>3 500 000</th>
        </tr>
      </tbody>
    </table>
      {
        !mode ?
        <span className="notice">
          Доход по тарифу, в соответствии с <a href="#stats"><u>финансовой моделью</u></a>
        </span> :
        <span className="notice">
          Бюджет по тарифу, в соответствии с <a href="#stats"><u>финансовой моделью</u></a>
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
        <tr>
          <th>Тариф включает:</th>
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

          <th>21 000 000</th>
          <th>7 000 000</th>
          <th>3 500 000 </th>
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
