import React, { Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import './App.scss';

/*animation*/
import Animation from './components/animation.component';

/*universal elements*/
import Header from './components/header.component';
import MobileHeader from './components/m_header.component';
import Contacts from './components/contacts.component';
import Counter from './components/counter.component';
import Footer from './components/footer.component';

/*content sections*/
import Title from './components/title.component';
import About from './components/about.component';
import AboutUs from './components/about_us.component';
import Stats from './components/stats.component';
import Service from './components/service.component';
import Movies from './components/movies.component';
import MobileMovies from './components/m_movies.component';

class App extends React.Component {

  componentDidUpdate() {
    this.blockScroll();
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ device: document.documentElement.clientWidth <= 1024 ? 'mobile' : 'desktop' });
      let vh = document.documentElement.clientHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    window.dispatchEvent(new Event('resize'));

    window.addEventListener('scroll', () => {
      let aboutRect = document.getElementById('about').getBoundingClientRect();
      let aboutRect2 = document.getElementById('about--aside').getBoundingClientRect();
      let serviceRect = document.getElementById('service').getBoundingClientRect();
      let headerRect =
      document.getElementById('header').getBoundingClientRect();
      let footerRect =
      document.getElementById('pre-footer').getBoundingClientRect();
      let uiColor;

      if( aboutRect.top <= headerRect.bottom/2 && aboutRect.bottom > headerRect.bottom/2 && aboutRect2.top > headerRect.bottom/2 ){
        uiColor = 'light';
        this.setState({ uiColor });
      }
      else if( aboutRect.top <= headerRect.bottom/2 && aboutRect.bottom > headerRect.bottom/2 && this.state.device !== 'mobile' ){
        uiColor = 'light';
        this.setState({ uiColor });
      }
      else if( serviceRect.top <= headerRect.bottom/2 && serviceRect.bottom > headerRect.bottom/2 ){
        uiColor = 'light';
        this.setState({ uiColor });
      }
      else if( footerRect.top <= headerRect.bottom/2 && footerRect.bottom > headerRect.bottom/2 ){
        uiColor = 'light';
        this.setState({ uiColor });
      }
      else{
        uiColor = 'dark';
        this.setState({ uiColor });
      }
    });
  }

  constructor(props){
    super(props)
    this.contactsElement = React.createRef();
  }

  handleClick = () => {
    this.contactsElement.current.openContacts()
  }

  blockScroll = () => {
    if( this.props.location.pathname === '/movies' ){
      document.documentElement.style.overflowY = "hidden";
      document.getElementById('header').style.backgroundColor = 'rgb(255, 250, 236)';
    }else{
      document.documentElement.style.overflowY = "scroll";
        document.getElementById('header').style = null;
    }
  }

  state = {
    uiColor: 'dark',
    device: 'mobile'
  }

  render(){
    return (
      <Fragment>

        { this.state.device !== 'mobile' ?
        <Animation/> : null }

        { this.state.device === 'mobile' ?
        <MobileHeader color={ this.state.uiColor }/> :
        <Header onClick={ this.handleClick } color={ this.state.uiColor }/> }

        { this.state.device !== 'mobile' ? <Counter/> : null }

        <main id="content">
            <Title device={ this.state.device }/>
            <About/>
            <Stats device={ this.state.device }/>
            <Service/>
            <AboutUs/>
            <Route path="/movies" render={ () => this.state.device === 'desktop' ? <Movies/> : <MobileMovies/> } />
        </main>

        <Footer/>

        { this.state.device !== 'mobile' ?
        <Contacts ref={ this.contactsElement } active=""/> : null }

      </Fragment>
    );
  }
}

export default withRouter(App);
