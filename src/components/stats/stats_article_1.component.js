import React, { Component } from 'react';

//images

import stats1 from '../../assets/images/stats_pic_1.svg';
import stats2 from '../../assets/images/stats_pic_2.svg';

export default class StatsArticle1 extends Component{
  render() {
    return(
      <article id="stats--article-1" className="stats--article-1 stats--article">
        <div className="text-left-container">
          <h2 className="bebas-64 m-bebas-30">
            <span>Кино  обеспечивает</span> <br/>
            <span>Длительный  охват</span> <br/>
            <span>в<span className="orange marked"> 3х </span>медиа каналах</span>
          </h2>
          <h1 className="helvetica-14-bold m-helvetica-12-bold opacity-075">Жизненный цикл кино за 1й год</h1>
          <div className="profit">
            <h3 className="no-before bebas-30 m-bebas-30">
              <span className="marked">14 000 000 </span>
              <span className="marked">14 млн </span>
              контактов<br/> По
              <span className="orange marked"> 6 копеек</span>
            </h3>
            <p className="helvetica-12-bold m-helvetica-12-bold">Кинотеатры + интернет с учётом<br/> инвестиционной доходности</p>
          </div>
          <div id="stats--stage-2" className="stage-2 stage">
            <h3 className="bebas-30 m-bebas-25 orange-before">Этап 2|интернет</h3>
            <p className="helvetica-14-bold m-helvetica-12-bold">
              <span className="opacity-075">
              72% россиян смотрят фильмы в Интернете (Mediascope, 2019)
              </span>
            </p>
            <p className="helvetica-10-medium m-helvetica-10-medium">
              <sup>2</sup> Средняя аудитория российского фильма состовляет 12.5 - 20 млн. чел.
            </p>
          </div>
          <div id="stats--stage-1" className="stage-1 stage">
            <h3 className="bebas-30 m-bebas-25 blue-before">Этап 1|кинотеатры</h3>
            <p className="helvetica-10-medium m-helvetica-10-medium">
              <sup>1</sup> Средний уровень кинопроката в России<br/> в 2018-2019 году
            </p>
          </div>
        </div>

        <div className="text-right-container">
          <div id="stats--stage-3" className="stage-3 stage">
            <h3 className="bebas-30 m-bebas-25 red-before">Этап 3|тв <sup>4</sup></h3>
            <p className="helvetica-14-bold m-helvetica-12-bold opacity-075">
            48% россиян используют ТВ для просмотра кино (Mediascope, 2019)
            </p>
            <p className="helvetica-10-medium m-helvetica-10-medium">
            <sup>3</sup> Средняя доля телесмотрения одного выхода российских РомКомов составляет
            7,4%
            </p>
            <p className="helvetica-10-medium m-helvetica-10-medium">
            <sup>4</sup> Для сохранения рекламы в ТВ версии требуются отдельные договорённости
            </p>
          </div>
          <p className="helvetica-14-bold m-bebas-25">
          Цена 1 киноконтакта в интернете<br/>
          в 3 раза ниже, чем в видео на Youtube
          </p>
          <div className="comparison">
            <img alt="OnLine stats" src={stats1} />
            <img alt="YouTube stats" src={stats2} />
          </div>
          <p className="helvetica-10-medium m-helvetica-10-medium comparison-notice">
          <sup>5</sup> До вычета инвестиционной доходности
          </p>
        </div>
      </article>
    )
  }
}
