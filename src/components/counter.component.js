import React, { Component } from 'react';

export default class Counter extends Component{

  componentDidMount() {
        let counts = [];

        for(let i = 500000; i < 8000000; i+=51851){
          if( i < 7000000 ){
            counts.push(i);
          }else{
            counts.push('7 000 000 +');
            break;
          }
        }

        /*functions*/
        let changeCount;

        /*parallax animation*/

        changeCount = (counterOffset, counterScrollLength) => {
          let index = Math.round(counterOffset / counterScrollLength * (counts.length - 1))
          let newCount = index > 0 ? counts[index] : counts[0];
          let newCountWSpaces = newCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

          if( this.state.count !== newCountWSpaces ){
            this.setState({ count: newCountWSpaces });
          }
        }

        let moveParallax = () => {

          let footer = document.getElementById('footer');
          let footerBound = footer.getBoundingClientRect();
          let parallax = document.getElementById('parallax');
          let clientHeight = document.documentElement.clientHeight;

          let scrollY = window.scrollY;

          let counter = document.getElementById('counter-wrapper');
          let timeline = document.getElementById('timeline');

          if( footerBound.top >= clientHeight){
            parallax.classList.remove('fixed');

            let counterOffset = (parallax.offsetHeight - counter.offsetWidth) * scrollY/(footer.offsetTop - clientHeight);
            changeCount(counterOffset, (parallax.offsetHeight - counter.offsetWidth) );

            let timelineOffset = (parallax.offsetHeight - timeline.offsetWidth) * scrollY/(footer.offsetTop - clientHeight);
            changeCount(counterOffset, (parallax.offsetHeight - counter.offsetWidth) );

            counter.style.transform = `translate3d(${ counterOffset }px, 0, 0)`
            timeline.style.transform = `translate3d(${ timelineOffset }px, 0, 0)`
          }else{
            let counterOffset = (parallax.offsetHeight - counter.offsetWidth);
            let timelineOffset = (parallax.offsetHeight - timeline.offsetWidth);
            counter.style.transform = `translate3d(${ counterOffset }px, 0, 0)`
            timeline.style.transform = `translate3d(${ timelineOffset }px, 0, 0)`

            parallax.classList.add('fixed');

            this.setState({ count: '7 000 000 +' })
          }
        };

        /*scroll listener*/
        window.addEventListener('scroll', () => {
          moveParallax();
        },
        { capture: true, passive: true });
  }

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
        </div>
      </div>
    )
  }
}
