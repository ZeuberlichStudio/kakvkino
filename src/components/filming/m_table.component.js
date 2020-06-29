import React, {useEffect, useState} from 'react'
import Slider from 'components/slider.component'
import Reference from 'components/filming/reference.component'

const MobileTable = () => {
  return(
    <Spoilers>
      <Spoiler checked={true} title="Фильмы – реФеренсы"><Tab1/></Spoiler>
      <Spoiler title="Тарифные планы"><Tab2/></Spoiler>
      <Spoiler title="Прогноз доходности"><Tab3/></Spoiler>
      <Spoiler title="Прогноз эффективности"><Tab4/></Spoiler>
      <Spoiler title="Дополнительно"><Tab5/></Spoiler>
    </Spoilers>
  );
}

const Spoilers = ({children}) => {

  const updateChildren = React.Children.map(
    children,
    (child, i) => React.cloneElement(child, {buttonId: `spoiler-${i}`})
  );

  return(
    <div className="filming-section_table">
      { updateChildren }
    </div>
  );
}

const Spoiler = ({checked ,title, buttonId, children}) => {

  useEffect(() => {
    if (!checked) return;
    document.getElementById(buttonId).checked = true;
  }, []);

  return(
    <div className="filming-section_table_spoiler">
      <input id={buttonId} type="checkbox"/>
      <label for={buttonId} className="filming-section_table_spoiler_button">
        {title}
      </label>

      <div className="filming-section_table_spoiler_content">
        {children}
      </div>
    </div>
  );
}

const Tab1 = () => (
  <div className="filming-section_table_reference">
    <h3>Фильмы – Референсы <br/> и их Аудитория:</h3>
    <div className="filming-section_table_reference_movies">
      <div className="filming-section_table_reference_movies_block">
        <span>Холоп</span>
        <ul>
          <li>12-17</li>
          <li>18-24</li>
          <li>25-34</li>
          <li>35-44</li>
          <li>44+</li>
        </ul>
        <ul>
          <li>8%</li>
          <li>28%</li>
          <li>29%</li>
          <li>16%</li>
          <li>19%</li>
        </ul>
      </div>

      <div className="filming-section_table_reference_movies_block">
        <span>Ёлки последние</span>
        <ul>
          <li>12-17</li>
          <li>18-24</li>
          <li>25-34</li>
          <li>35-44</li>
          <li>44+</li>
        </ul>
        <ul>
          <li>8%</li>
          <li>21%</li>
          <li>37%</li>
          <li>20%</li>
          <li>14%</li>
        </ul>
      </div>

      <div className="filming-section_table_reference_movies_block">
        <span>Громкая связь</span>
        <ul>
          <li>12-17</li>
          <li>18-24</li>
          <li>25-34</li>
          <li>35-44</li>
          <li>44+</li>
        </ul>
        <ul>
          <li>10%</li>
          <li>25%</li>
          <li>32%</li>
          <li>19%</li>
          <li>14%</li>
        </ul>
      </div>

      <div className="filming-section_table_reference_movies_block">
        <span>Любовницы</span>
        <ul>
          <li>12-17</li>
          <li>18-24</li>
          <li>25-34</li>
          <li>35-44</li>
          <li>44+</li>
        </ul>
        <ul>
          <li>19%</li>
          <li>22%</li>
          <li>23%</li>
          <li>22%</li>
          <li>14%</li>
        </ul>
      </div>
    </div>
  </div>
)

const Tab2 = () => (
  <div className="filming-section_table_tariff-plan">
    <div className="filming-section_table_tariff-plan_left">
      <table>
        <tbody>
          <tr><td>Бюджет</td></tr>
          <tr><td>Демонстрация бренда</td></tr>
          <tr><td>Упоминание бренда</td></tr>
          <tr><td>Отражение преимуществ</td></tr>
          <tr><td>Участие главных героев</td></tr>
          <tr><td>Кол-во эпизодов с присутствием бренда</td></tr>
          <tr><td>Хронометраж эпизодов с присутствием бренда</td></tr>
          <tr><td>Бренд-трекинг</td></tr>
          <tr><td>VIP-приглашение на премьеру</td></tr>
        </tbody>
      </table>
    </div>
    <div className="filming-section_table_tariff-plan_right">
      <Slider id="filming-section_table_tariff-plan" slideWidthVw="44.26667">
        <table>
          <tbody>
            <tr><th>Эпизодическая <br/> роль</th></tr>
            <tr><td><span>3 500 000 руб</span></td></tr>
            <tr><td>Или</td></tr>
            <tr><td>Или</td></tr>
            <tr><td>Нет</td></tr>
            <tr><td>Нет*</td></tr>
            <tr><td>1</td></tr>
            <tr><td>30 сек</td></tr>
            <tr><td>Нет</td></tr>
            <tr><td>2</td></tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr><th>Роль второго <br/> плана</th></tr>
            <tr><td><span>7 000 000 руб</span></td></tr>
            <tr><td>Да</td></tr>
            <tr><td>Да</td></tr>
            <tr><td>Да</td></tr>
            <tr><td>≥50% сцен</td></tr>
            <tr><td>2</td></tr>
            <tr><td>60 сек</td></tr>
            <tr><td>Да</td></tr>
            <tr><td>6</td></tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr><th>Главная <br/> роль</th></tr>
            <tr><td><span>21 000 000 руб</span></td></tr>
            <tr><td>Да</td></tr>
            <tr><td>Да</td></tr>
            <tr><td>Да</td></tr>
            <tr><td>≥50% сцен</td></tr>
            <tr><td>6</td></tr>
            <tr><td>180 сек</td></tr>
            <tr><td>Да</td></tr>
            <tr><td>20</td></tr>
          </tbody>
        </table>
      </Slider>
    </div>
  </div>
)

const Tab3 = () => (
  <div className="filming-section_table_profit-forecast">
    <span className="notice">
      Доход по тарифу, <br/>
      в соответствии с финансовой моделью (МЛН РУБ)
    </span>
    <div className="filming-section_table_profit-forecast_left">
      <table>
        <tbody>
          <tr><td>Бюджет</td></tr>
          <tr><td>500 000&nbsp;&nbsp;&nbsp; <span>(20%)</span></td></tr>
          <tr><td>1 000 000 <span>(50%)</span></td></tr>
          <tr><td>1 500 000 <span>(75%)</span></td></tr>
          <tr><td>2 000 000 <span>(100%)</span></td></tr>
          <tr><td>2 500 000 <span>(120%)</span></td></tr>
          <tr><td>3 000 000 <span>(140%)</span></td></tr>
          <tr><td>4 000 000 <span>(180%)</span></td></tr>
          <tr><td>5 000 000 <span>(220%)</span></td></tr>
          <tr><td>6 000 000 <span>(280%)</span></td></tr>
        </tbody>
      </table>
    </div>
    <div className="filming-section_table_profit-forecast_right">
      <Slider id="filming-section_table_profit-forecast" slideWidthVw="44.26667">
        <table>
          <tbody>
            <tr><th>Эпизодическая <br/> роль</th></tr>
            <tr><td><span>3 500 000 руб</span></td></tr>
            <tr><td>0.84</td></tr>
            <tr><td>1.75</td></tr>
            <tr><td>2.63</td></tr>
            <tr><td>3.50</td></tr>
            <tr><td>4.02</td></tr>
            <tr><td>5.43</td></tr>
            <tr><td>6.30</td></tr>
            <tr><td>7.70</td></tr>
            <tr><td>9.80</td></tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr><th>Эпизодическая <br/> роль</th></tr>
            <tr><td><span>7 000 000 руб</span></td></tr>
            <tr><td>0.84</td></tr>
            <tr><td>1.75</td></tr>
            <tr><td>2.63</td></tr>
            <tr><td>3.50</td></tr>
            <tr><td>4.02</td></tr>
            <tr><td>5.43</td></tr>
            <tr><td>6.30</td></tr>
            <tr><td>7.70</td></tr>
            <tr><td>9.80</td></tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr><th>Эпизодическая <br/> роль</th></tr>
            <tr><td><span>21 000 000 руб</span></td></tr>
            <tr><td>0.84</td></tr>
            <tr><td>1.75</td></tr>
            <tr><td>2.63</td></tr>
            <tr><td>3.50</td></tr>
            <tr><td>4.02</td></tr>
            <tr><td>5.43</td></tr>
            <tr><td>6.30</td></tr>
            <tr><td>7.70</td></tr>
            <tr><td>9.80</td></tr>
          </tbody>
        </table>
      </Slider>
    </div>
  </div>
)

const Tab4 = () => (
  <div className="filming-section_table_efficiency-forecast">
    <span className="notice">
      <sup>1</sup>
       С учётом инвестиционной доходности
    </span>
    <div className="filming-section_table_efficiency-forecast_left">
      <table>
        <tbody>
          <tr><th>Кол-во контактов <br/> с рекламой за первый год</th></tr>
          <tr><td><span>Бюджет</span></td></tr>
          <tr><td>Кинопрокат<span>(прогнозный уровень)</span></td></tr>
          <tr><td>Онлайн<span>(Минимальный уровень)</span></td></tr>
          <tr>
            <td>
              1 эфир на тв
              <span>
                (Средний уровень, приведённый На 30 сек)
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="filming-section_table_efficiency-forecast_right">
      <Slider id="filming-section_table_efficiency-forecast" slideWidthVw="44.26667">
        <table>
          <tbody>
            <tr><th>Эпизодическая <br/> роль</th></tr>
            <tr><td><span>3 500 000 руб</span></td></tr>
            <tr><td>1.5 млн</td></tr>
            <tr><td>12.5 млн</td></tr>
            <tr><td>7 млн</td></tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr><th>Роль второго <br/> плана</th></tr>
            <tr><td><span>7 000 000 руб</span></td></tr>
            <tr><td>3 млн</td></tr>
            <tr><td>25 млн</td></tr>
            <tr><td>14 млн</td></tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr><th>Главная <br/> роль</th></tr>
            <tr><td><span>21 000 000 руб</span></td></tr>
            <tr><td>7.5 млн</td></tr>
            <tr><td>62.5 млн</td></tr>
            <tr><td>35 млн</td></tr>
          </tbody>
        </table>
      </Slider>
    </div>
    <div className="filming-section_table_efficiency-forecast_bottom">
      <table>
        <tbody>
          <tr><th>Цена за 1 контакт <sup>1</sup></th></tr>
          <tr><td>Этап 1 – кино | 58 коп</td></tr>
          <tr><td>Этап 2 – кино + онлайн| 6 коп</td></tr>
          <tr><td>Этап 3 – кино + онлайн + тв| 4 коп</td></tr>
        </tbody>
      </table>
    </div>
  </div>
)

const Tab5 = () => (
  <div className="filming-section_table_additional">
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

export default MobileTable;
