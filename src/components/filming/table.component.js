import React, { useEffect, useState } from 'react'
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
    <table>
      <tbody>
        <tr>
          <th>Тариф включает:</th>
          <td></td>
          <th>Эпизодическая роль</th>
          <td></td>
          <th>Роль второго плана</th>
          <td></td>
          <th>Главная роль</th>
        </tr>
        <tr>
          <td>Вид интеграции бренда</td>
          <td></td>
          <td>Демонстрация <span>или</span> упоминание</td>
          <td></td>
          <td>Демонстрация <span>и</span> упоминание</td>
          <td></td>
          <td>Демонстрация <span>и</span> упоминание</td>
        </tr>
        <tr>
          <td>Отражение преимуществ</td>
          <td className="line"></td>
          <td>Нет</td>
          <td className="line"></td>
          <td>Да</td>
          <td className="line"></td>
          <td>Да</td>
        </tr>
        <tr>
          <td>Участие главных героев</td>
          <td className="line"></td>
          <td>Нет*</td>
          <td className="line"></td>
          <td> ≥50% сцен</td>
          <td className="line"></td>
          <td> ≥50% сцен</td>
        </tr>
        <tr>
          <td>Кол-во эпизодов<br/>с присутствием бренда</td>
          <td className="line"></td>
          <td>1</td>
          <td className="line"></td>
          <td>2</td>
          <td className="line"></td>
          <td>6</td>
        </tr>
        <tr>
          <td>Хронометраж эпизодов<br/>с присутствием бренда</td>
          <td className="line"></td>
          <td>30 сек</td>
          <td className="line"></td>
          <td>60 сек</td>
          <td className="line"></td>
          <td>180 сек</td>
        </tr>
        <tr>
          <td>Бренд-трекинг</td>
          <td className="line"></td>
          <td>Нет</td>
          <td className="line"></td>
          <td>Да</td>
          <td className="line"></td>
          <td>Да</td>
        </tr>
        <tr>
          <td>VIP-приглашение<br/>на премьеру</td>
          <td className="line"></td>
          <td>2</td>
          <td className="line"></td>
          <td>6</td>
          <td className="line"></td>
          <td>20</td>
        </tr>
        <tr>
          <th>Бюджет тарифа: <span>(В рублях, без НДС)</span></th>
          <td></td>
          <th>3 500 000</th>
          <td></td>
          <th>7 000 000</th>
          <td></td>
          <th>21 000 000</th>
        </tr>
      </tbody>
    </table>
    <span className="notice">* Возможно обсуждение при наценке от 50%</span>
  </div>
)

const Tab1 = () => (
  <div className="filming-section_table_content_tab filming-section_table_content_tab-1">
    <table>
      <tbody>
        <tr>
          <th>Зрители  в кинотеатре: <br/><span>(Доход в процентах)</span></th>
          <td></td>
          <th>Эпизодическая роль</th>
          <td></td>
          <th>Роль второго плана</th>
          <td></td>
          <th>Главная роль</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;500 000 <span>(20%)</span></td>
          <td className="line"></td>
          <td>700 000</td>
          <td className="line"></td>
          <td>1 400 000</td>
          <td className="line"></td>
          <td>4 200 000</td>
        </tr>
        <tr>
          <td>1 000 000 <span>(50%)</span></td>
          <td className="line"></td>
          <td>1 750 000</td>
          <td className="line"></td>
          <td>3 500 000</td>
          <td className="line"></td>
          <td>10 500 000</td>
        </tr>
        <tr>
          <td>1 500 000 <span>(75%)</span></td>
          <td className="line"></td>
          <td>2 625 000</td>
          <td className="line"></td>
          <td>5 250 000</td>
          <td className="line"></td>
          <td>15 750 000</td>
        </tr>
        <tr>
          <td>2 000 000 <span>(100%)</span></td>
          <td className="line"></td>
          <td>3 500 000</td>
          <td className="line"></td>
          <td>7 000 000</td>
          <td className="line"></td>
          <td>21 000 000</td>
        </tr>
        <tr>
          <td>2 500 000 <span>(120%)</span></td>
          <td className="line"></td>
          <td>4 200 000</td>
          <td className="line"></td>
          <td>8 400 000</td>
          <td className="line"></td>
          <td>25 200 000</td>
        </tr>
        <tr>
          <td>3 000 000 <span>(140%)</span></td>
          <td className="line"></td>
          <td>5 900 000</td>
          <td className="line"></td>
          <td>9 800 000</td>
          <td className="line"></td>
          <td>29 400 000</td>
        </tr>
        <tr>
          <td>4 000 000 <span>(180%)</span></td>
          <td className="line"></td>
          <td>6 300 000</td>
          <td className="line"></td>
          <td>12 600 000</td>
          <td className="line"></td>
          <td>37 800 000</td>
        </tr>
        <tr>
          <td>5 000 000 <span>(220%)</span></td>
          <td className="line"></td>
          <td>7 700 000</td>
          <td className="line"></td>
          <td>15 400 000</td>
          <td className="line"></td>
          <td>46 200 000</td>
        </tr>
        <tr>
          <td>6 000 000 <span>(260%)</span></td>
          <td className="line"></td>
          <td>9 100 000</td>
          <td className="line"></td>
          <td>18 200 000</td>
          <td className="line"></td>
          <td>54 600 000</td>
        </tr>
        <tr>
          <th>Бюджет тарифа: <br/><span>(В рублях, без НДС)</span></th>
          <th></th>
          <th>3 500 000</th>
          <th></th>
          <th>7 000 000</th>
          <th></th>
          <th>21 000 000 </th>
        </tr>
      </tbody>
    </table>
    <span className="notice">
      Доход по тарифу, в соответствии с финансовой моделью
    </span>
  </div>
)

const Tab2 = () => (
  <div className="filming-section_table_content_tab filming-section_table_content_tab-2">
    <span className="notice">
      <sup>1</sup> С учётом инвестиционной доходности
    </span>
    <table>
      <tbody>
        <tr>
          <th>Количество контактов с рекламой за первый год</th>
        </tr>
        <tr>
          <th>Эпизодическая роль</th>
          <td></td>
          <th>Роль второго плана</th>
          <td></td>
          <th>Главная роль</th>
        </tr>
        <tr>
          <td>кинотеатры<span>(прогнозный уровень)</span></td>
          <td className="line"></td>
          <td>1.5 млн</td>
          <td className="line"></td>
          <td>3 МЛн</td>
          <td className="line"></td>
          <td>7.5 млн</td>
        </tr>
        <tr>
          <td>Интернет<span>(минимальный уровень)</span></td>
          <td className="line"></td>
          <td>12.5 МЛН</td>
          <td className="line"></td>
          <td>25 МЛН</td>
          <td className="line"></td>
          <td>62.5 МЛН</td>
        </tr>
        <tr>
          <td>
            тв (Один выход)
            <span>(средний уровень,<br/> приведённый на 30 сек)</span>
          </td>
          <td className="line"></td>
          <td>7 МЛН</td>
          <td className="line"></td>
          <td>14 МЛН</td>
          <td className="line"></td>
          <td>35 МЛН</td>
        </tr>
        <tr>
          <th>Бюджет тарифа: <span>(В рублях, без НДС)<sup>1</sup></span></th>
          <td></td>
          <th>3 500 000</th>
          <td></td>
          <th>7 000 000</th>
          <td></td>
          <th>21 000 000 </th>
        </tr>
        <tr>
          <th>
            Цена за 1 контакт &nbsp;
            <span className="opacity">(по этапам трансляции)</span>
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
