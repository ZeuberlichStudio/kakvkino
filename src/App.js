import React, { Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import './App.scss';

import MainPage from 'pages/main'
import ProjectPage from 'pages/project'
import ModalWrapper from 'components/modal.component'
import Movies from 'pages/movies'

class App extends React.Component {

  render(){
    return (
      <Fragment>
        <Route exact path="/" children={<MainPage/>}/>
        <Route
          exact path="/projects/:title"
          children={<ModalWrapper children={<ProjectPage/>}/>}
        />
        <Route
          exact path="/movies"
          children={<ModalWrapper children={<Movies/>}/>}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
