import React, { Component } from 'react';
import AboutAside from './about/about_aside.component';
import AboutStaticContent from './about/about_static_content.component';

//animataion
import lottie from 'lottie-web';
import subtitlesPc from 'assets/json/subtitles-pc.json';
import subtitlesMobile from 'assets/json/subtitles-mobile.json';

export default class About extends Component{

  state = {
    finished: 0
  }

  render() {
    return(
      <section className="cinema-efficiency-section">
        <div id="about-wrapper">
          <div id="cinema-efficiency" className="cinema-efficiency-anchor"></div>
          <div id="about">
            <AboutStaticContent/>
            <AboutAside/>
          </div>
        </div>
        <Subtitles isMobile={ this.props.isMobile }/>
      </section>
    )
  }
}

class Subtitles extends React.Component {

  componentDidMount() {
    this.init();
  }

  init() {
    const container = document.getElementById('subtitles-animation');

    const anim = lottie.loadAnimation({
      container: container,
      loop: false,
      autoplay: false,
      animationData: !this.props.isMobile ? subtitlesPc : subtitlesMobile,
    });

    window.addEventListener("scroll", animate);

    function animate() {
      const wrapper = document.getElementById('subtitles-wrapper');
      const wrapperRect = wrapper.getBoundingClientRect();
      const playLength = wrapper.offsetHeight - document.documentElement.clientHeight * 1.5;
      const totalFrames = anim.totalFrames;
      
      if ( wrapperRect.top >= 0 ) anim.goToAndStop(0, true);
      else if ( wrapperRect.bottom <= 0 ) anim.goToAndStop(totalFrames, true);
      else {
        const percPlayed =  -wrapperRect.top / playLength;
        anim.goToAndStop(totalFrames * percPlayed, true);
      }
    }
  }

  render() {
    return(
      <div style={{height: "800vh"}} id="subtitles-wrapper">
        <div id="subtitles-animation"></div>
      </div>
    );
  }
}