import React, { Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import './App.scss';

//animation
import Counter from 'components/counter.component';
import Animation from 'components/animation.component';

//pages
import MainPage from 'pages/main';
import ModalWrapper from 'components/modal.component';
import ProjectPage from 'pages/project';
import MobileProjectPage from 'pages/m_project';
import Movies from 'pages/movies';
import MobileMovies from 'pages/m_movies';
import MakeAppointment from 'pages/make_appointment';
import Policy from 'pages/policy';

class App extends React.Component {

  componentDidMount() {
    window.addEventListener('resize', this.getDevice);
  }

  componentDidUpdate() {
    if (this.props.location.pathname === '/'){
      document.documentElement.style.overflow = null;
    }
  }

  includesAnchor = () => {
    if( typeof window === "undefined" ) return;
    return !!window.location.hash;
  }

  getDevice = () => {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    return window.innerWidth <= 1024 ? 'mobile' : 'desktop';
  }

  state = {
    device: this.getDevice(),
    pathIncludesAnchor: this.includesAnchor(),
  }

  render(){

    const { device, pathIncludesAnchor } = this.state;

    return (
      <Fragment>
        { device !== 'mobile' && <Counter/> }
        { device !== 'mobile' && !pathIncludesAnchor && <Animation/> }

        <Route path="/">
          <MainPage device={device}/>
        </Route>

        <Route exact path="/projects/:title">
          <ModalWrapper device={device}>
            { device === 'mobile' ? <MobileProjectPage/> : <ProjectPage/> }
          </ModalWrapper>
        </Route>

        <Route exact path="/movies">
          <ModalWrapper device={device}>
            { device === 'mobile' ? <MobileMovies/> : <Movies/> }
          </ModalWrapper>
        </Route>

        <Route exact path="/make-appointment">
          <ModalWrapper>
            <MakeAppointment/>
          </ModalWrapper>
        </Route>

        <Route exact path="/privacy-policy">
          <ModalWrapper>
            <Policy/>
          </ModalWrapper>
        </Route>
      </Fragment>
    );
  }
}

export default withRouter(App);
