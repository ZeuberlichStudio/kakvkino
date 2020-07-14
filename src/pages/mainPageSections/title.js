import React, { Component } from 'react';

//images

import stats1 from 'assets/images/title/title_stats_1.svg';
import stats2 from 'assets/images/title/title_stats_2.svg';
import stats3 from 'assets/images/title/title_stats_3.svg';
import stats4 from 'assets/images/title/title_stats_4.svg';

export default class Title extends Component{

  goToAnchor = e => {
    e.preventDefault();
    let id = e.currentTarget.dataset.link;
    let anchor = document.getElementById(id).offsetTop + document.getElementById(id).parentElement.offsetTop;

    window.scrollTo(0, anchor);
  }

  render() {
    return(
      <section id="title">
        <article className="dark">
          <h1 className="bebas-64 m-bebas-30">Первая реклама в кино на правах инвестиций</h1>
          <p className="helvetica-14-bold m-helvetica-12-bold">Рекламодатели становятся соинвесторами фильма и
            получают доход от будущего кинопроката</p>
          <h2 className="bebas-30 m-bebas-25">
            <a href="#cinema-lifespan">
              получите свыше <span className="marked">14 000 000</span> контактов<br/>
              с вашей рекламой в 1й год по<br/>
              цене <span className="marked">6 копеек</span> за контакт
            </a>
          </h2>
          <div className="links-container bebas-20 m-bebas-20 light">
            <div onClick={ e => this.goToAnchor(e) } data-link="about">Почему в кино</div>
            <div onClick={ e => this.goToAnchor(e) } data-link="how-it-works">Как это работает</div>
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
            <span className="notice helvetica-10-medium m-helvetica-10-medium">
              *средний уровень кинопроката в
              России в 2018-2019гг.
            </span>
          </article>
        </div>
        <Forbes/>
      </section>
    )
  }
}

class Forbes extends Component{
  render() {
    return(
      <div id="forbes">
        <span className="helvetica-14-bold m-helvetica-12-bold">О нас пишут: </span>
        <a href="https://www.forbes.ru/biznes/374651-vzrosloe-kino-kak-zarabotat-na-rossiyskih-filmah" rel="noopener noreferrer" target="_blank" className="forbes"></a>
      </div>
    )
  }
}
