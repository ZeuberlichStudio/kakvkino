import React, {Component, Fragment} from 'react'

/*animation*/
import Animation from 'components/animation.component';
import Counter from 'components/counter.component';

/*universal elements*/
import Header from 'components/header.component';
import MobileHeader from 'components/m_header.component';
import Contacts from 'components/contacts.component';
import Footer from 'components/footer.component';

/*content sections*/
import Title from 'components/title.component';
import About from 'components/about.component';
import AboutUs from 'components/about_us.component';
import Stats from 'components/stats.component';
import Filming from 'components/filming.component';

class MainPage extends Component {

  componentDidMount() {
    this.getDevice();
    window.addEventListener('resize', this.getDevice);
    window.addEventListener('scroll', this.getUIColor);
  }

  state = {
    uiColor: 'dark',
    device: 'mobile'
  }

  contactsElement = React.createRef();

  openContacts = () => {
    this.contactsElement.current.openContacts()
  }

  getDevice = () => {
    this.setState({ device: document.documentElement.clientWidth <= 1024 ? 'mobile' : 'desktop' });
    let vh = document.documentElement.clientHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  getUIColor = () => {
    let aboutRect = document.getElementById('about').getBoundingClientRect();
    let aboutRect2 = document.getElementById('about--aside').getBoundingClientRect();
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
    else if( footerRect.top <= headerRect.bottom/2 && footerRect.bottom > headerRect.bottom/2 ){
      uiColor = 'light';
      this.setState({ uiColor });
    }
    else{
      uiColor = 'dark';
      this.setState({ uiColor });
    }
  }

  render() {
    return(
      <Fragment>
        { /*this.state.device !== 'mobile' ? <Animation/> : null*/ }
        { this.state.device !== 'mobile' ? <Counter/> : null }
        {
          this.state.device === 'mobile' ?
          <MobileHeader color={ this.state.uiColor }/> :
          <Header onClick={ this.openContacts } color={ this.state.uiColor }/>
        }
        <main id="content">
          <Title device={ this.state.device }/>
          <About/>
          <Stats device={ this.state.device }/>
          <Filming/>
          <AboutUs/>
        </main>
        <Footer/>
        {
          this.state.device !== 'mobile' ?
          <Contacts ref={ this.contactsElement } active=""/> : null
        }
      </Fragment>
    );
  }
}

export default MainPage;
