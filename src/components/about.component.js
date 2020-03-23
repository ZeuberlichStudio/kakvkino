import React, { Component } from 'react';
import AboutAside from './about/about_aside.component';
import AboutStaticContent from './about/about_static_content.component';

export default class About extends Component{

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
