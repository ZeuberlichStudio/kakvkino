import React, { Component } from 'react';

//images

import stages from '../../assets/images/stats_stages.svg';

export default class StatsArticle2 extends Component{

  render() {
    return(
      <article id="stats--article-2" className="stats--article-2 stats--article">
        <div id="stats--article-2-anchor"></div>
        <div className="text-left-container">
          <h1 className="bebas-64 m-bebas-30">Как это работает?</h1>
          <p className="helvetica-14-bold m-helvetica-12-bold">
            Бюджеты рекламодателей формируют производственный
            бюджет фильма. По итогам кинопроката начисляется
            процент дохода согласно финансовой модели.
          </p>
          <h2 className="helvetica-14-bold m-bebas-25">Финансовая модель</h2>
          <div className="graph"></div>
        </div>
        <div className="text-right-wrapper">
          <div className="text-right-container">
            <h2 className="bebas-30 m-bebas-30">Алгоритм действий:</h2>
            <img alt="Stages" src={stages}/>
          </div>
        </div>
      </article>
    )
  }
}
