import React, { Component } from 'react';

//images

import planLogo from '../assets/images/planLogo.svg';
import paragraphLogo from '../assets/images/paragraphLogo.svg';
import origoLogo from '../assets/images/origoLogo.svg';
import eurasianLogo from '../assets/images/eurasianLogo.svg';

export default class AboutUs extends Component{
  render() {
    return(
      <section id="about-us">
        <div className="text-left-container">
          <div>
            <h1 className="bebas-64 m-bebas-30">Кто мы?</h1>
            <p className="helvetica-14-bold m-helvetica-12-bold">
              Группа компаний «КАК В КИНО» объединила профессионалов кино и медиа индустрий
            </p>
          </div>

          <div>
            <a href="https://planagency.ru" rel="noopener noreferrer" target="_blank"><img alt="" src={planLogo}/></a>
            <h2 className="bebas-20 m-bebas-20">Коммуникационное агентство</h2>
            <p className="helvetica-12-bold m-helvetica-12-bold">
              Команда экспертов с опытом в маркетинге и рекламе свыше 15 лет разрабатывает стратегические решения по развитию бизнеса и реализует комплекс коммуникационных решений.
            </p>
          </div>
          <div>
            <a href="http://paragraphfilm.ru" rel="noopener noreferrer" target="_blank">
              <img alt="" src={paragraphLogo}/>
            </a>
            <h2 className="bebas-20 m-bebas-20">Кинокомпания</h2>
            <p className="helvetica-12-bold m-helvetica-12-bold">
              Больше 10 лет производит  документальные и игровые сериалы, рекламные и музыкальные клипы, музыкальные шоу.  Оказывает помощь в организации съемок для компаний из Европы, США, Китая, Индии.
            </p>
          </div>
          <div>
            <a href="http://origostudios.com" rel="noopener noreferrer" target="_blank">
              <img alt="" src={origoLogo}/>
            </a>
            <a href="http://eurasianfilms.com" rel="noopener noreferrer" target="_blank">
              <img alt="" src={eurasianLogo}/>
            </a>
            <h2 className="bebas-20 m-bebas-20">Кинокомпания</h2>
            <p className="helvetica-12-bold m-helvetica-12-bold">
              Origo Studios — крупнейшая  киностудия в Европе, партнер в киносъемках для мэйджоров мировой киноиндустрии: PARAMAUNT, DISNEY, UNIVERSAL, SONY/COLUMBIA, LUCAS Film.<br/>
              Eurasion Films — продакшн компания в холдинге Origo Studios.
            </p>
          </div>
        </div>

        <div className="text-right-wrapper">
          <div className="text-right-container">
            <div>
              <h2 className="bebas-30 m-bebas-30">цель группы «КАК В КИНО» :
              </h2>
              <p className="m-helvetica-12-bold">
                создание успешного коммерческого <br/>
                кино для массового просмотра и <br/>
                долгосрочное сотрудничество с <br/>
                брендами в разных кинокартинах.
              </p>
            </div>

            <div>
              <h2 className="bebas-30 m-bebas-30">Принципы работы: </h2>
              <h3 className="bebas-20 m-bebas-20">
                Честные и понятные правила<br/> Интеграции брендов в кинопроекты
              </h3>
              <p className="m-helvetica-12-bold">
                - естественные и ненавязчивые способы включения
                продукции брендов в готовящиеся фильмы, не
                противоречащие сохранению художественной
                ценности кинокартин
                <br/><br/>
                - стремление к сохранению утвержденного
                дримкастинга актеров при запуске съемок
                фильма и внесение изменений по согласованию <br/>
                с брендами
                <br/><br/>
                - сохранение преемственности режиссерского
                сценария фильмов к синопсису и подписанному
                договору
              </p>
              <h3 className="bebas-20 m-bebas-20">Производственный контроль</h3>
              <p className="m-helvetica-12-bold">
              - соблюдение графика реализации проекта
              <br/><br/>
              - открытость с партнерами на каждом этапе кинопроизводства и кинопроката
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
