import React, { Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import './App.scss';

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
        <Route
          exact
          path="/"
          children={<MainPage device={device}/>}
        />
        <Route
          exact path="/projects/:title"
          children={
            <ModalWrapper
              device={device}
              children={
                device === 'mobile' ?
                <MobileProjectPage/> : <ProjectPage/>
              }
            />
          }
        />
        <Route
          exact path="/movies"
          children={
            <ModalWrapper
              device={device}
              children={ device === 'mobile' ? <MobileMovies/> : <Movies/> }
            />
          }
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
