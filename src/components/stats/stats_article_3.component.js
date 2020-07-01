import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../slider.component';

//images
import graph_1_1 from '../../assets/images/graph_1_1.svg';
import graph_1_2 from '../../assets/images/graph_1_2.svg';
import graph_2 from '../../assets/images/graph_2.svg';
import m_graph_1_1 from '../../assets/images/mobile/graph_1_1.svg';
import m_graph_1_2 from '../../assets/images/mobile/m_graph_1_2.svg';
import m_graph_2_1 from '../../assets/images/mobile/graph_2_1.svg';
import m_graph_2_2 from '../../assets/images/mobile/graph_2_2.svg';
import poll from '../../assets/images/poll.svg';
import m_poll from '../../assets/images/mobile/poll.svg';

import movie_0 from 'assets/images/movie_0.png'
import movie_1 from 'assets/images/movie_1.png'
import movie_2 from 'assets/images/movie_2.png'
import movie_4 from 'assets/images/movie_4.png'
import movie_5 from 'assets/images/movie_5.png'
import movie_6 from 'assets/images/movie_6.png'
import movie_7 from 'assets/images/movie_7.png'
import movie_8 from 'assets/images/movie_8.png'
import movie_9 from 'assets/images/movie_9.png'
import movie_10 from 'assets/images/movie_10.png'

import audience_2019 from 'assets/images/audience_2019.svg'
import audience_2020 from 'assets/images/audience_2020.svg'

export default class StatsArticle3 extends Component{

  render() {
    return(
      <article id="stats--article-3" className="stats--article-3 stats--article">
        <div className="text-left-container">
          <h1 className="bebas-64 m-bebas-30">Статистика</h1>
          {
            this.props.device === 'desktop' ?
            <DesktopGraphs/> :
            <MobileGraphs/>
          }
          <p className="helvetica-12-bold m-helvetica-12-bold">
            Кинозрители в возрасте 25-34 лет – самая многочисленная аудитория (31%).
            <br/><br/>
            На 2м месте – зритель в возрасте 18-24 лет (25%).
            <br/><br/>
            Доля зрителей 35-44 лет составляет 18%.
            <br/><br/><br/>
            Доля женщин в среднем составляет 56% и преобладает во всех возрастных группах.
            <br/><br/>
            В молодой аудитории соотношение полов практически выравнивается, а среди аудитории старше 35 лет, наоборот, доля женщин превышает 60%.
            <br/><br/><br/>
            Приходят в кино преимущественно с друзьями (33,1%).  И это основной состав посещения в аудитории до 25 лет.
            <br/><br/>
            Доля пар составляет 29,5%. Это прежде всего зрители в возрасте 25-34 лет (42% среди этого возраста), а также зрители в возрасте 18-24 лет (36%).
            <br/><br/>
            Доля семейной аудитории составляет в среднем 30,1%, в период школьных каникул достигает 42%. С детьми приходят преимущественно зрители старше 35-ти лет.
            <br/><br/>
            5% кинозрителей приходят на фильм вообще без спутников.
            <br/><br/><br/>
            <span className="helvetica-14-bold m-helvetica-14-bold">
              Источник: <a href="http://ekinobilet.fond-kino.ru/issledovanie-kinoauditorii/" target="_blank"><u>Фонд Кино</u></a>
            </span>
          </p>
        </div>
        <div className="text-right-container helvetica-12-bold m-helvetica-12-bold">
            <div>
              <h3 className="bebas-25 m-bebas-30">Все больше россиян</h3>
              <p>
                отмечают улучшение качества<br/>
                российского кино в течение последних лет
              </p>
              <img src={ this.props.device === 'desktop' ? poll : m_poll }/>
            </div>

            <div>
              <h3 className="bebas-25 m-bebas-25">
                Ежегодно с 2014 года более<br/>
                17 российских фильмов собирает<br/>
                аудиторию свыше 500 тыс. чел.
              </h3>
              {
                this.props.device === 'desktop' ?
                <Slider
                id="movie-slider"
                slideWidthVw={14.921875}
                visible="true"
                content={[
                  <img src={ movie_0 } />,
                  <img src={ movie_1 } />,
                  <img src={ movie_2 } />,
                  <img src={ movie_4 } />,
                  <img src={ movie_5 } />,
                  <img src={ movie_6 } />,
                  <img src={ movie_7 } />,
                  <img src={ movie_8 } />,
                  <img src={ movie_9 } />,
                  <img src={ movie_10 } />,
                ]}/> : null
              }
              <span>
                Российские фильмы, собравшие<br/>
              <Link to="/movies"><u>свыше 500 тыс. зрителей</u></Link>
              </span>
              <span className="helvetica-14-bold m-helvetica-14-bold">
                Источник:
                <u><a href="http://www.kinometro.ru/kino/analitika" target="_blank"> kinometro</a></u>
              </span>
            </div>
        </div>
      </article>
    )
  }
}

const DesktopGraphs = () => (
  <Fragment>
    <Slider
      id="desktop-stats-slider"
      slideWidthVw={39.453125}
      buttonText = {[
        '2020',
        '2019',
      ]}
    >
      <div>
        <h3>
          В 2019 год наблюдается рост зрителей. <br/>
          Средний возраст кинозрителя 29 лет.
        </h3>
        <img src={audience_2019}/>
      </div>
      <div>
        <h3>
          Начало 2020 года показывает растущий тренд зрителей <br/>
          до введения ограничительных мер в связи с COVID-19.
        </h3>
        <img src={audience_2020}/>
      </div>
    </Slider>
    <img src={ graph_2 }/>
  </Fragment>
);

const MobileGraphs = () => (
  <Fragment>

    <Slider
      id="mobile-stats-slider-1"
      slideWidthVw={88}
      buttonText = {[
        'Июль — Декабрь 2019',
        'Январь — Июнь 2020',
      ]}
    >
      <div>
        <p>
          В 2019 год наблюдается рост зрителей. <br/>
          Средний возраст кинозрителя 29 лет.
        </p>
        <h3>
          Аудитория кинотеатров в 2019 <br/>
          <span>(Зрители, млн. Чел.)</span>
        </h3>
        <img src={ m_graph_1_1 } />
      </div>
      <div>
        <p>
          Начало 2020 года показывает растущий тренд <br/>
          зрителей до введения ограничительных мер  <br/>
          в связи с COVID-19.
        </p>
        <h3>
          Аудитория кинотеатров в 2019 <br/>
          <span>(Зрители, млн. Чел.)</span>
        </h3>
        <img src={ m_graph_1_2 } />
      </div>
    </Slider>

    <h3 className="m-bebas-25">
      Портрет аудитории кинотеатров<br/> в 2019 году
    </h3>
    <Slider
    id="mobile-stats-slider-2"
    slideWidthVw={88}
    buttonText = {[
      'Состав посещения',
      'Возраст аудитории',
    ]}
    content={[
      <img src={ m_graph_2_1 } />,
      <img src={ m_graph_2_2 } />,
    ]}/>
  </Fragment>
);
