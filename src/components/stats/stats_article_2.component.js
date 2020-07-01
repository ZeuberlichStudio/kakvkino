import React, { Component } from 'react';

//images

import graph from 'assets/images/stats_graph.svg';
import m_graph from 'assets/images/mobile/graph.svg';
import stages from '../../assets/images/stats_stages.svg';

const StatsArticle2 = ({device}) => {

    return(
      <article id="stats--article-2" className="stats--article-2 stats--article">
        <div className="text-left-container">
          <h1 className="bebas-64 m-bebas-30">Как это работает?</h1>
          <p className="helvetica-14-bold m-helvetica-12-bold">
            Бюджеты рекламодателей формируют производственный
            бюджет фильма. По итогам кинопроката начисляется
            процент дохода согласно финансовой модели.
          </p>
          <h2 className="helvetica-14-bold m-bebas-25">Финансовая модель</h2>
          <img src={device === 'mobile' ? m_graph : graph} alt=""/>
        </div>
        <div className="text-right-wrapper">
          <div className="text-right-container">
            <h2 className="bebas-30 m-bebas-30">Алгоритм действий:</h2>
            <img alt="Stages" src={stages}/>
          </div>
        </div>
      </article>
    );
}

export default StatsArticle2;
