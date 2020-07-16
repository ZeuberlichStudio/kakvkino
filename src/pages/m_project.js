import React, {Fragment} from 'react'
import {useParams} from 'react-router-dom'
import DialogWindow from 'components/dialogWindow.component'
import Form from 'components/form.component'

import chocolate_with_sea_salt_poster from 'assets/images/chocolate_with_sea_salt_poster.png'
import status_love_poster from 'assets/images/status_love_poster.png'

const MobileProjectPage = () => {

  const params = useParams();

  return(
    <section id="project-section">
      {
        params.title === "status-love" ? <Project1/> :
        params.title === "sea-salt-chocolate" ? <Project2/> :
        <h1>404</h1>
      }
    </section>
  );
}

const Project1 = () => (
  <Fragment>
  <h1>Статус – любовь</h1>
  <div className="project-section_content">
    <div className="project-section_movie-info">
      <img src={status_love_poster} alt=""/>
      <ul>
        <li><span>Жанр:</span> Новогодняя комедия</li>
        <li><span>Хронометраж:</span> 90 мин</li>
        <li><span>Статус:</span> В подготовке</li>
        <li><span>Прогноз кинопроката:</span> 1.5 млн зрителей</li>
        <li><span>Дистрибьютор:</span> Стадия переговоров</li>
        <li><span>Целевая аудитория:</span> 20-45 лет, МЖ</li>
        <li>
          <span>Сценарист:&nbsp;</span>
          <DialogWindow text="Алиса Лунина">
            <h4>Алиса Лунина</h4>
            <p>современная российская писательница, сценарист и драматург</p>
          </DialogWindow>
        </li>
        <li>
          <span>Дримкаст:&nbsp;</span>
          <DialogWindow bottom={true} click={true} text="по запросу">
            <Form/>
          </DialogWindow>
        </li>
      </ul>
      <p>
        Жизнь тридцатилетнего биолога Игоря Белкина – работа в московском зоопарке и искренняя привязанность к животным, жизнь двадцатисемилетней популярной блогерши Насти Даниловой – погоня за славой и рекламными контрактами. Он живёт в мире настоящем, она – в эфемерном виртуальном. Невозможно представить двух более разных людей, чем звезда инстаграма Настя с ее девизом «все напоказ», и серьезный Игорь, в принципе не имеющий аккаунта в социальных сетях; общее у них только одно – взаимное притяжение друг к другу. Кажется, что весь мир против их любви, да и друзья Насти уверяют, что Игорь ей не пара, однако судьба вновь и вновь сводит наших героев.
        <br/><br/>
        По воле судьбы - ссориться, выяснять отношения, и искать точки соприкосновения таким разным Игорю и Насте, придется в декабре в Великом Устюге, среди сказочных новогодних декораций. Острые комедийные конфликты, испытания, интриги бывшего жениха Насти Стаса – отношения Насти и Игоря похожи на качели – от любви к ненависти. В итоге, не выдержав этой «войны миров», наши герои расстаются: Настя уезжает с бывшим женихом, Игорь собирается в долгую экспедицию на север. Кажется, что теперь только предстоящий Новый год и новогоднее чудо может соединить наших героев. И чудо случится, но Дед Мороз тут ни при чем! Настоящее чудо уже сотворили сами герои, потому что за время своего трагикомического противостояния, благодаря друг другу, они оба меняются - избалованная, эксцентричная Настя становится добрым, чутким человеком, а замкнутый, суровый Игорь смягчается. В финале нашей истории парень с девушкой «из разных миров» докажут себе и окружающим, что истинная любовь может быть той самой волшебной силой, которая побеждает все различия.
      </p>
    </div>
    <div className="project-section_development-schedule">
      <h2>График производства:</h2>
      <div>
        <span>Сентябрь 2020 – Январь 2021</span>
        <h3>СЦЕНАРНЫЙ ПРОЦЕСС</h3>
        <p>
          <span>Кино:</span>
          проработка эпизодов сценария,
          определение режисера и договоренности с актерами
        </p>
        <p>
          <span>Интеграция:</span>
          разработка идеи, подготовка сценария с
          раскадровками
        </p>
      </div>
      <div>
        <span>Февраль – Апрель 2021</span>
        <h3>Съемочный ПРОЦЕСС</h3>
        <p><span>Кино:</span>подготовка к съемке, съемка</p>
        <p>
          <span>Интеграция:</span>
          определение графика съемки и
          съемка по утвержденному сценарию с
          раскадровками
        </p>
      </div>
      <div>
        <span>Май – Сентябрь 2021</span>
        <h3>ПОСТ-ПРОДАКШН И ДАТА КИНОПРОКАТА</h3>
        <p>
          <span>Кино:</span>
          монтаж, переговоры с дистрибьюторами
        </p>
        <p>
          <span>Интеграция:</span>
          рассмотрение монтажной версии
        </p>
      </div>
      <div>
        <span>Декабрь 2021 <br/>(канун Нового года)</span>
        <h3>Кинопрокат</h3>
      </div>
    </div>
  </div>
  </Fragment>
)

const Project2 = () => (
  <Fragment>
  <h1>Шоколад с морской солью</h1>
  <div className="project-section_content">
    <div className="project-section_movie-info">
      <img src={chocolate_with_sea_salt_poster} alt=""/>
      <ul>
        <li><span>Жанр:</span> Лирическая комедия</li>
        <li><span>Хронометраж:</span> 100 мин</li>
        <li><span>Статус:</span> В подготовке</li>
        <li><span>Прогноз кинопроката:</span> 1.5 млн зрителей</li>
        <li><span>Дистрибьютор:</span> Стадия переговоров</li>
        <li><span>Целевая аудитория:</span> 20-45 лет, МЖ</li>
        <li>
          <span>Сценарист:&nbsp;</span>
          <DialogWindow text="Алиса Лунина">
            <h4>Алиса Лунина</h4>
            <p>современная российская писательница, сценарист и драматург</p>
          </DialogWindow>
        </li>
        <li>
          <span>Дримкаст:&nbsp;</span>
          <DialogWindow bottom={true} click={true} text="по запросу">
            <Form/>
          </DialogWindow>
        </li>
      </ul>
      <p>
        Благополучная жизнь талантливого московского кондитера Евгения Сяпкина, после развода с женой в одиночку воспитывающего десятилетнюю дочь Сашу, меняется после того как суровая директриса кондитерской фабрики Натэлла Климова - просит Евгения сыграть роль ее жениха, чтобы отвести от неё подозрения в возобновлении романа с её бывшим возлюбленным - Максом. 
        <br/><br/>
        Харизматичного бизнесмена с лихими замашками из 90 -х Владимира Бурцева, хозяин кондитерских и макаронных фабрик любит свою дочь Веру и не готов терпеть роман ветреного зятя и Натэлле. Чтобы развеять подозрения Бурцева две пары – Вера с Максом и Натэлла с Евгением отправляются в путешествие в Крым. Десятилетняя Саша увязывается в это путешествие вместе с отцом и его «невестой», чтобы устроить избраннице отца «веселое путешествие».
        <br/><br/>
        С первого же дня отношения героев сплетаются в неразрешимый узел конфликтов: Саша неутомимо изводит взрослых своими розыгрышами, Макс понимает, что его чувства к Натэлле гораздо серьезнее, чем он предполагал, а Евгений осознает, что ему нравится Вера Бурцева, в глазах которой он – чужой жених. Страсти кипят, и в финале каждому из героев придется сделать свой главный выбор, и сделать его взрослым во многом поможет Саша, от проделок которой они страдали все путешествие.
        <br/><br/>
        В итоге Евгений победит свою нерешительность, и покажет, что и чудаковатый кондитер может быть брутальным героем в борьбе за руку принцессы, Макс сделает выбор между любовью к Натэлле и карьерой, сухая, как кактус, Натэлла смягчится от любви Макса, и разрешит себе быть просто женщиной. 
        <br/><br/>
        В финале каждый из героев получит то, что хотел и что заслужил, потому что «море у каждого свое», а счастливыми хотят быть все. О чем и рассказывает наша простая, человеческая история.   
      </p>
    </div>
    <div className="project-section_development-schedule">
      <h2>График производства:</h2>
      <div>
        <span>Ноябрь 2020 – Март 2021</span>
        <h3>СЦЕНАРНЫЙ ПРОЦЕСС</h3>
        <p>
          <span>Кино:</span>
          проработка эпизодов сценария,
          определение режисера и договоренности с актерами
        </p>
        <p>
          <span>Интеграция:</span>
          разработка идеи, подготовка сценария с
          раскадровками
        </p>
      </div>
      <div>
        <span>Апрель – Май 2021</span>
        <h3>Съемочный ПРОЦЕСС</h3>
        <p><span>Кино:</span>подготовка к съемке, съемка</p>
        <p>
          <span>Интеграция:</span>
          определение графика съемки и
          съемка по утвержденному сценарию с
          раскадровками
        </p>
      </div>
      <div>
        <span>Июнь – Сентябрь 2021</span>
        <h3>ПОСТ-ПРОДАКШН И ДАТА КИНОПРОКАТА</h3>
        <p>
          <span>Кино:</span>
          монтаж, переговоры с дистрибьюторами
        </p>
        <p>
          <span>Интеграция:</span>
          рассмотрение монтажной версии
        </p>
      </div>
      <div>
        <span>Ноябрь 2021 <br/>(праздничный уикенд с 4-го ноября)</span>
        <h3>Кинопрокат</h3>
      </div>
    </div>
  </div>
  </Fragment>
)

export default MobileProjectPage;
