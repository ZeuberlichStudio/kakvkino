import React, { Component } from 'react';
import StatsArticle1 from './stats/stats_article_1.component';
import StatsArticle2 from './stats/stats_article_2.component';
import StatsArticle3 from './stats/stats_article_3.component';

import popcorn from '../assets/json/popcorn.json';

export default class Stats extends Component{

  render() {
    return(
      <section id="stats">
        <StatsArticle1 />
        <div id="stats--article-2-anchor"></div>
        <StatsArticle2 />
        <StatsArticle3 device={ this.props.device }/>
        <div id="stats--divider"></div>

        {
          this.props.device === 'desktop' ?
          <PopcornAnimation /> : <div id="popcorn-static"></div>
        }

      </section>
    )
  }
}

class PopcornAnimation extends Component{

  componentDidMount() {

    let container = document.getElementById('popcorn-container');

    let animation = window.lottie.loadAnimation({
      container: container,
      loop: false,
      autoplay: false,
      renderer: 'svg',
      animationData: popcorn
    });


    window.addEventListener( 'scroll', () => {
      let clientHeight = document.documentElement.clientHeight;
      let animation_rect = container.getBoundingClientRect();

      if( animation_rect.top < clientHeight/2 &&
          animation_rect.bottom > 0 ){
        animation.play();
      }
    });

  }

  render() {
    return(
      <div id="popcorn-container">
      </div>
    )
  }
}
