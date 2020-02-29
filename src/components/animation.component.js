import React, { Component } from 'react';
import start from '../assets/json/start.json';

export default class Animation extends Component{

  componentDidMount() {
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

    animation.setSpeed(5);

    animation.addEventListener('enterFrame', () => {
      if( animation.currentFrame >= 240  && !container.classList.contains('dots')){
        window.scrollTo(0, 0)
        wrapper.style.backgroundColor = 'transparent';
        container.classList.add('dots');
        setTimeout( () => container.classList.add('scaled'), 0 );
        setTimeout( () => container.style.opacity = 0 , 2500 );
        setTimeout( () =>{
          document.documentElement.style.overflowY = 'scroll';
          wrapper.style.display = 'none';
        }, 4500 );
      }
    });
  }

  state = {
    device: this.props.device,
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
