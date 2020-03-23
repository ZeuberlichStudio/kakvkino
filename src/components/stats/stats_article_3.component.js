import React, { Component, Fragment } from 'react';
import Slider from '../slider.component';

//images
import graph from '../../assets/images/graph_1.svg';
import m_graph_1_1 from '../../assets/images/mobile/graph_1_1.svg';
import m_graph_1_2 from '../../assets/images/mobile/graph_1_2.svg';
import m_graph_2_1 from '../../assets/images/mobile/graph_2_1.svg';
import m_graph_2_2 from '../../assets/images/mobile/graph_2_2.svg';
import poll from '../../assets/images/poll.svg';
import m_poll from '../../assets/images/mobile/poll.svg';
import movie_1 from '../../assets/images/movie-slider/movie_1.svg';

export default class StatsArticle3 extends Component{

  render() {
    return(
      <article id="stats--article-3" className="stats--article-3 stats--article">
        <div className="text-left-container">
          <h1 className="bebas-64 m-bebas-30">Статистика</h1>
          <h3 className="helvetica-14-bold  m-helvetica-12-bold">
            В 2019 год наблюдается рост зрителей. Средний возраст кинозрителя 29 лет.
          </h3>
          {
            this.props.device === 'desktop' ?
            <img src={ graph }/> :
            <Fragment>
              <GraphSlider id="GraphSlider-1"
              header="Аудитория кинотеатров в сравнении с прошлым годом"
              slides={[ m_graph_1_1, m_graph_1_2 ]}/>
              <GraphSlider id="GraphSlider-2"
              header="Портрет аудитории кинотеатров в 2019 году"
              slides={[ m_graph_2_1, m_graph_2_2 ]}/>
            </Fragment>
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
          </p>
        </div>
        <div className="text-right-wrapper">
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
                content={[
                  <img src={ movie_1 } />,
                  <img src={ movie_1 } />,
                  <img src={ movie_1 } />,
                  <img src={ movie_1 } />,
                ]}/> : null
              }
              <span>
                Российские фильмы, собравшие<br/>
                <u>свыше 500 тыс. зритлей</u>
              </span>
              <span className="helvetica-14-bold m-helvetica-14-bold">
                Источник:
                <u><a href>kinometro</a></u>
              </span>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

class GraphSlider extends Component{

  state = {
    slide: 0,
    slides: this.props.slides,
  }

  changeSlide = e => {
    let slideWrapper =
    document.getElementById( this.props.id ).
    getElementsByClassName( 'slide-wrapper' )[0];
    let button = e.currentTarget;
    let slide =
    this.state.slide ? 0 : 1;

    slideWrapper.style.opacity = 0;
    button.style.opacity = 0;
    setTimeout( () => this.setState({ slide }), 300 );
    setTimeout( () => {
      slideWrapper.style.opacity = 1;
      button.style.opacity = 1;
    } , 400 );
  }

  render() {
    return(
      <div id={ this.props.id } className="GraphSlider">
        <h3 className="m-bebas-25">{ this.props.header }</h3>
        <div className="slide-wrapper">
          <img className="slide"
          src=
          { this.state.slides ?
            (this.state.slide ?
            this.state.slides[1] :
            this.state.slides[0]) : null
          } />
        </div>
        <button onClick={ this.changeSlide }
        className={
          this.state.slide ?
          'bg-1' :
          'bg-2'
        }/>
      </div>
    )
  }
}
