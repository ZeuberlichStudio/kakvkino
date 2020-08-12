import React, { Component } from 'react';

export default class Counter extends Component{

  componentDidMount() {
      this.generateCounts();
      window.addEventListener('scroll', this.moveParallax, { capture: true, passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.moveParallax, { capture: true, passive: true });
  }
 
  counts = [];

  generateCounts = () => {
    for(let i = 500000; i < 8000000; i+=25926){
      if( i < 7000000 ){
        this.counts.push(i);
      }else{
        this.counts.push('7 000 000 +');
        break;
      }
    }
  };

  changeCount = (counterOffset, counterScrollLength) => {
    let index = Math.round(counterOffset / counterScrollLength * (this.counts.length - 1))
    let newCount = index > 0 ? this.counts[index] : this.counts[0];
    let newCountWSpaces = newCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    if( this.state.count !== newCountWSpaces ){
      this.setState({ count: newCountWSpaces });
    }
  }

  moveParallax = () => {

    let footer = document.getElementById('pre-footer');
    let footerBound = footer.getBoundingClientRect();
    let parallax = document.getElementById('parallax');
    let clientHeight = document.documentElement.clientHeight;

    let scrollY = window.scrollY;

    let counter = document.getElementById('counter-wrapper');
    let timeline = document.getElementById('timeline');

    if( footerBound.top >= clientHeight){
      parallax.classList.remove('fixed');

      let counterOffset = (parallax.offsetHeight - counter.offsetWidth) * scrollY/(footer.offsetTop - clientHeight);
      let timelineOffset = (parallax.offsetHeight - timeline.offsetWidth) * scrollY/(footer.offsetTop - clientHeight);
      this.changeCount(counterOffset, (parallax.offsetHeight - counter.offsetWidth) );

        counter.style.transform =
        `translate3d(${ counterOffset }px, 0, 0)`;
        timeline.style.transform =
        `translate3d(${ timelineOffset }px, 0, 0)`;
    }else{
      let counterOffset = (parallax.offsetHeight - counter.offsetWidth);
      let timelineOffset = (parallax.offsetHeight - timeline.offsetWidth);

      counter.style.transform = `translate3d(${ counterOffset }px, 0, 0)`
      timeline.style.transform = `translate3d(${ timelineOffset }px, 0, 0)`

      parallax.classList.add('fixed');

      this.setState({ count: '7 000 000 +' })
    }
  };

  state = {
    count: '500 000'
  }

  render() {
    return(
      <div id="parallax">
        <div id="counter-container">
          <div id="counter-wrapper">
            <div id="counter">
              <span>{ this.state.count }</span>
            </div>
          </div>
        </div>

        <div id="timeline-container">
          <div id="timeline"></div>
          { /*<div id="light-timeline"></div>*/ }
        </div>
      </div>
    )
  }
}
