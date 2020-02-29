import React, { Component, Fragment } from 'react';
import AboutArticle1 from './about/about_article_1.component';
import AboutArticle2 from './about/about_article_2.component';
import AboutArticle3 from './about/about_article_3.component';
import AboutAside from './about/about_aside.component';

export default class About extends Component{

  render() {
    return(
      <section id="about">
        <Slider arrows="false"/>
        <div className="about--aside-wrapper">
          <AboutAside/>
        </div>
      </section>
    )
  }
}

class Slider extends Component{

  state = {
    slide: 0
  };

  changeSlide = (newSlide, e) => {
    let sliderContent = document.getElementById('slider').getElementsByClassName('slider-content')[0];

    if( newSlide < 3 && newSlide >= 0 ){
      let slide = newSlide;
      this.setState({ slide });

      sliderContent.classList.add('hidden');
      setTimeout( () => sliderContent.style.transform = `translateX(${-100 * newSlide}vw)`, 250);
      setTimeout( () => sliderContent.classList.remove('hidden'), 750);
    }

    if( (newSlide === 2 || newSlide === 0) && e ){
      e.currentTarget.classList.add('inactive');
    }else if( e ){
      document.getElementById('slider').getElementsByClassName('inactive')[0].classList.remove('inactive');
    }
  }

  render() {

    const {
      slide
    } = this.state;

    return(
      <div id="slider">
        <div className="slider-content">
          <AboutArticle1 changeSlide={ this.changeSlide }/>
          <AboutArticle2 changeSlide={ this.changeSlide }/>
          <AboutArticle3 changeSlide={ this.changeSlide }/>
        </div>
        { this.props.arrow ?
        <Fragment>
          <button className="prev-slide inactive" onClick={ (e) => this.changeSlide(slide - 1, e) }></button>
          <button className="next-slide" onClick={ (e) => this.changeSlide(slide + 1, e) }></button>
        </Fragment> :
        null }
      </div>
    )
  }
}
