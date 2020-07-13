import React from 'react'
import StatsArticle3 from './stats/stats_article_3.component'

const Statistics = ({device}) => (
  <section id="statistics">
    <span id="stats--anchor"></span>
    <StatsArticle3 device={device}/>
    <div className="divider"></div>
  </section>
)

export default Statistics;
