import React, { Component } from 'react';
import start from '../assets/json/start.json';

export default class Animation extends Component{

  componentDidMount() {
    console.log(this.props)
    document.documentElement.style.overflow = 'hidden';
    let wrapper = document.getElementById('animation-wrapper');
    let container = document.getElementById('animation');

    let animation = window.lottie.loadAnimation({
      container: container,
      loop: false,
      autoplay: true,
      renderer: 'svg',
      animationData: start
    });

    animation.addEventListener('enterFrame', () => {
      if( animation.currentFrame >= 240  && !container.classList.contains('dots')){
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
        wrapper.style.backgroundColor = 'transparent';
        container.classList.add('dots');
        setTimeout( () => container.classList.add('scaled'), 0 );
        setTimeout( () => container.style.opacity = 0 , 2500 );
        setTimeout( () =>{
          if( !this.props.location.pathname.includes('movies') ) document.documentElement.style.overflowY = "scroll";
          wrapper.style.display = 'none';
        }, 4500 );
      }
    });
  }

  render() {

    return(
      <div id="animation-wrapper">
        <div id="animation">
        </div>
      </div>
    )
  }
}
