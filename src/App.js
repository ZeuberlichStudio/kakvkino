import React, { Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import './App.scss';

//animation
import Counter from 'components/counter.component';
import Animation from 'components/animation.component';

//pages
import MainPage from 'pages/main'
import ModalWrapper from 'components/modal.component'
import ProjectPage from 'pages/project'
import MobileProjectPage from 'pages/m_project'
import Movies from 'pages/movies'
import MobileMovies from 'pages/m_movies'

class App extends React.Component {

  componentDidMount() {
    this.getDevice();
    window.addEventListener('resize', this.getDevice);
  }

  componentDidUpdate() {
    if (this.props.location.pathname === '/'){
      document.documentElement.style.overflow = null;
    }
  }

  state = {
    device: 'mobile'
  }

  getDevice = () => {
    this.setState({ device: document.documentElement.clientWidth <= 1024 ? 'mobile' : 'desktop' });
    let vh = document.documentElement.clientHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render(){

    const {
      device
    } = this.state;

    return (
      <Fragment>
        { device !== 'mobile' ? <Counter/> : null }
        { device !== 'mobile' ? <Animation/> : null }

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
      </Fragment>
    );
  }
}

export default withRouter(App);
