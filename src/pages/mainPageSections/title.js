import React, { Component } from 'react';

//images

import stats1 from 'assets/images/example_0.svg';
import stats2 from 'assets/images/example_1.svg';
import stats3 from 'assets/images/example_2.svg';
import stats4 from 'assets/images/example_3.svg';

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
          <h2>
            ПЕРВАЯ В МИРЕ РЕКЛАМА <br/>
            С ВОЗВРАТОМ БЮДЖЕТА
          </h2>
          <h1>Реклама в КИНО на правах инвестиций</h1>

          <p>
            Рекламодатели становятся соинвесторами фильма и <br/>
            получают возврат рекламного бюджета
          </p>

          <p>
            <a href="#movie-lifecycle">
              Влюбляйте в свой бренд <br className="br-m"/>
              <span className="marked">14 000 000+</span> зрителей одного фильма <br/>
              по цене за 1 контакт <span className="marked">0.26 руб. и менее</span>
            </a>
          </p>

          <div className="links-container bebas-20 m-bebas-20 light">
            <a href="#cinema-efficiency">эффективность кино</a>
            <a href="#how-it-works">Как это работает</a>
          </div>

          <Forbes/>
        </article>
        <div className="title--aside-wrapper">
          <article className="title--aside">
            <h2 className="bebas-30 m-bebas-30">Чем Больше зрителей в кино, <br/> Тем выше возврат бюджета</h2>
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
