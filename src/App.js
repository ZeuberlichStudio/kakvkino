import React, { Fragment } from 'react';
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

class App extends React.Component {

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ device: document.documentElement.clientWidth <= 768 ? 'mobile' : 'desktop' });
      let vh = document.documentElement.clientHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    window.dispatchEvent(new Event('resize'));

    window.addEventListener('scroll', () => {
      let aboutRect = document.getElementById('about').getBoundingClientRect();
      let aboutRect2 = document.getElementsByClassName('about--aside')[0].getBoundingClientRect();
      let serviceRect = document.getElementById('service').getBoundingClientRect();
      let headerRect =
      document.getElementById('header').getBoundingClientRect();
      let footerRect =
      document.getElementById('footer').getBoundingClientRect();
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
    this.contactsElement.current.changeActive()
  }

  state = {
    uiColor: 'dark',
    device: ''
  }

  render(){
    return (
      <Fragment>
        { this.props.device !== 'mobile' ? <Animation/> : null }
        { this.state.device === 'mobile' ?
        <MobileHeader color={ this.state.uiColor }/> :
        <Header onClick={ this.handleClick } color={ this.state.uiColor }/> }
        { this.state.device !== 'moile' ?
        <Counter count={ this.state.count }/> :
        null }
        <main id="content">
            <Title device={ this.state.device }/>
            <About/>
            <Stats/>
            <Service/>
            <AboutUs/>
        </main>
        <Footer/>
        { this.props.device !== 'mobile' ? <Contacts ref={ this.contactsElement } active=""/> : null }
      </Fragment>
    );
  }
}

export default App;
