import React, { Component } from 'react';
import StatsArticle1 from './stats/stats_article_1.component';
import StatsArticle2 from './stats/stats_article_2.component';

export default class Stats extends Component{
  render() {
    return(
      <section id="stats">
        <StatsArticle1 />
        <StatsArticle2 />
        {/* animation - STATIC YET */}
        <div id="popcorn-container">
        </div>
      </section>
    )
  }
}
