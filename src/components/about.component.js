import React, { Component } from 'react';
import AboutAside from './about/about_aside.component';
import AboutStaticContent from './about/about_static_content.component';

export default class About extends Component{

  componentDidMount() {
    /*listen for controls to appear in viewport*/

    let controls = document.getElementsByClassName('about--controls')[0];

    let animate = () => {
      let controlsBound = controls.getBoundingClientRect().top;
      let clientHeight = document.documentElement.clientHeight;

      if( controlsBound < clientHeight && controlsBound > 0  ){
        controls.classList.add('animated');
        document.removeEventListener('scroll', animate);
        setTimeout( () => {
          this.setState({finished: 1})
          controls.classList.remove('animated');
        } ,6500)
      }
    }

    if( !this.state.finished ){
      document.addEventListener('scroll', animate);
    }
  }

  state = {
    finished: 0
  }

  render() {
    return(
      <div id="about">
        <AboutStaticContent/>
        <AboutAside/>
      </div>
    )
  }
}
