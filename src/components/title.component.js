import React, { Component } from 'react';

//images

import stats1 from '../assets/images/title/title_stats_1.svg';
import stats2 from '../assets/images/title/title_stats_2.svg';
import stats3 from '../assets/images/title/title_stats_3.svg';
import stats4 from '../assets/images/title/title_stats_4.svg';

export default class Title extends Component{
  render() {
    return(
      <section id="title">
        <article className="dark">
          <h1 className="bebas-64 m-bebas-30">Первая реклама в кино на правах инвестиций</h1>
          <p className="helvetica-14-bold m-helvetica-12-bold">Рекламодатели становятся соинвесторами фильма и
            получают доходность от будущего кинопроката</p>
          <h2 className="bebas-30 m-bebas-25">
            получите свыше <span className="marked">14 000 000</span> контактов<br/>
            с вашей рекламой в 1й год по<br/>
            цене <span className="marked">6 копеек</span> за контакт
          </h2>
          <div className="links-container bebas-20 m-bebas-14 light">
            <a href="#about">Почему в кино</a>
            <a href="#stats">Как это работает</a>
          </div>
        </article>
        <div className="title--aside-wrapper">
          <article className="title--aside">
            <h2 className="bebas-30 m-bebas-30">Чем Больше зрителей в кино, тем выше доходность</h2>
            <p className="helvetica-14-bold m-helvetica-12-bold">
              Принцип финансовой модели
              на примере кинокартин:
            </p>
            <ul>
              <li><img alt="" src={stats1}/></li>
              <li><img alt="" src={stats2}/></li>
              <li><img alt="" src={stats3}/></li>
              <li><img alt="" src={stats4}/></li>
            </ul>
            <span className="notice helvetica-12-bold m-helvetica-12-bold">
              *средний уровень кинопроката в
              России в 2018-2019гг.
            </span>
          </article>
        </div>
      </section>
    )
  }
}
