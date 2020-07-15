import React, { Component } from 'react';

//images

import origo from 'assets/images/origo.svg';
import plan from 'assets/images/plan.svg';
import eurasian_films from 'assets/images/eurasian_films.svg';
import paragraph from 'assets/images/paragraph.svg';
import clients from 'assets/images/clients.svg';

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

          <div className="text-left-container_blocks">
            <div className="text-left-container_blocks_block">
              <a href="http://origostudios.com/"><img src={origo} alt=""/></a>
              <h3>КРУПНЕЙШАЯ КИНОСТУДИЯ В ЕВРОПЕ</h3>
              <p>
                Партнер в киносъемках для мэйджоров мировой<br/>
                киноиндустрии: PARAMAUNT, DISNEY, UNIVERSAL,<br/>
                SONY/ COLUMBIA, LUCAS Film.
              </p>
              <div>
                <div>
                  <a href="http://eurasianfilms.com/"><img src={eurasian_films} alt=""/></a>
                  <p>Продакшн компания в холдинге Origo Studios.</p>
                </div>
                <div>
                  <a href="http://paragraphfilm.ru/"><img src={paragraph} alt=""/></a>
                  <p>
                    Дочерняя компания Origo Studios для работы на Территории
                    России и стран СНГ. Больше 10 лет производит
                    документальные и игровые сериалы, рекламные и
                    музыкальные клипы, музыкальные шоу.  Оказывает
                    помощь в организации съемок для компаний из Европы,
                    США, Китая, Индии.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left-container_blocks_block">
              <a href="https://planagency.ru/"><img src={plan} alt=""/></a>
              <h3>Российское КОММУНИКАЦИОННОЕ АГЕНТСТВО</h3>
              <p>
                Команда экспертов с опытом в маркетинге и рекламе
                свыше 15 лет разрабатывает стратегические и коммуникационные
                решения для развития бизнеса.
              </p>
              <div>
                <h3>осуществили свои планы с нами:</h3>
                <img src={clients} alt=""/>
              </div>
            </div>
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
