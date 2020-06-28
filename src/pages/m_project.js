import React, {Fragment} from 'react'
import {useParams} from 'react-router-dom'
import poster_1 from 'assets/images/poster_1.svg'
import poster_2 from 'assets/images/poster_2.svg'

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
    <div className="project-section_movie-info">
      <img src={poster_1} alt=""/>
      <ul>
        <li><span>Жанр:</span> Лирическая комедия</li>
        <li><span>Хронометраж:</span> 100 мин</li>
        <li><span>Статус:</span> В подготовке</li>
        <li><span>Прогноз кинопроката:</span> 1.5 млн зрителей</li>
        <li><span>Дистрибьютор:</span> Стадия переговоров</li>
        <li><span>Целевая аудитория:</span> 20-45 лет, МЖ</li>
        <li><span>Сценарист:</span> Алиса Лунина</li>
        <li><span>Дримкаст:</span> по запросу</li>
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
        <h3>Декабрь 2019 – Май 2020</h3>
        <p><span>Сценарная стадия:</span>проработка эпизодов сценария</p>
        <h3>Этап интеграции:</h3>
        <p>
          разработка сценарных идей интеграции, доработка
          выбранной идеи, подготовка раскадровки
          интеграции и диалогов героев
        </p>
      </div>
      <div>
        <h3>Декабрь 2019 – Май 2020</h3>
        <p><span>Сценарная стадия:</span>проработка эпизодов сценария</p>
        <h3>Этап интеграции:</h3>
        <p>
          разработка сценарных идей интеграции, доработка
          выбранной идеи, подготовка раскадровки
          интеграции и диалогов героев
        </p>
      </div>
      <div>
        <h3>Декабрь 2019 – Май 2020</h3>
        <p><span>Сценарная стадия:</span>проработка эпизодов сценария</p>
        <h3>Этап интеграции:</h3>
        <p>
          разработка сценарных идей интеграции, доработка
          выбранной идеи, подготовка раскадровки
          интеграции и диалогов героев
        </p>
      </div>
      <div>
        <h3>Март 2021 – Май 2021</h3>
        <p><span>Стадия кинопроката.</span></p>
      </div>
    </div>
  </Fragment>
)

const Project2 = () => (
  <Fragment>
    <h1>Шоколад с морской солью</h1>
    <div className="project-section_movie-info">
      <img src={poster_2} alt=""/>
      <ul>
        <li><span>Жанр:</span> Лирическая комедия</li>
        <li><span>Хронометраж:</span> 100 мин</li>
        <li><span>Статус:</span> В подготовке</li>
        <li><span>Прогноз кинопроката:</span> 1.5 млн зрителей</li>
        <li><span>Дистрибьютор:</span> Стадия переговоров</li>
        <li><span>Целевая аудитория:</span> 20-45 лет, МЖ</li>
        <li><span>Сценарист:</span> Алиса Лунина</li>
        <li><span>Дримкаст:</span> по запросу</li>
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
        <h3>Декабрь 2019 – Май 2020</h3>
        <p><span>Сценарная стадия:</span>проработка эпизодов сценария</p>
        <h3>Этап интеграции:</h3>
        <p>
          разработка сценарных идей интеграции, доработка
          выбранной идеи, подготовка раскадровки
          интеграции и диалогов героев
        </p>
      </div>
      <div>
        <h3>Декабрь 2019 – Май 2020</h3>
        <p><span>Сценарная стадия:</span>проработка эпизодов сценария</p>
        <h3>Этап интеграции:</h3>
        <p>
          разработка сценарных идей интеграции, доработка
          выбранной идеи, подготовка раскадровки
          интеграции и диалогов героев
        </p>
      </div>
      <div>
        <h3>Декабрь 2019 – Май 2020</h3>
        <p><span>Сценарная стадия:</span>проработка эпизодов сценария</p>
        <h3>Этап интеграции:</h3>
        <p>
          разработка сценарных идей интеграции, доработка
          выбранной идеи, подготовка раскадровки
          интеграции и диалогов героев
        </p>
      </div>
      <div>
        <h3>Март 2021 – Май 2021</h3>
        <p><span>Стадия кинопроката.</span></p>
      </div>
    </div>
  </Fragment>
)

export default MobileProjectPage;
