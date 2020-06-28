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
    window.addEventListener('scroll', this.getUIColor);
  }

  state = {
    uiColor: 'dark',
  }

  contactsElement = React.createRef();

  openContacts = () => {
    this.contactsElement.current.openContacts()
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
    else if( aboutRect.top <= headerRect.bottom/2 && aboutRect.bottom > headerRect.bottom/2 && this.props.device !== 'mobile' ){
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
        { /*this.props.device !== 'mobile' ? <Animation/> : null*/ }
        { this.props.device !== 'mobile' ? <Counter/> : null }
        {
          this.props.device === 'mobile' ?
          <MobileHeader color={ this.state.uiColor }/> :
          <Header onClick={ this.openContacts } color={ this.state.uiColor }/>
        }
        <main id="content">
          <Title device={ this.props.device }/>
          <About/>
          <Stats device={ this.props.device }/>
          <Filming device={ this.props.device }/>
          <AboutUs/>
        </main>
        <Footer/>
        {
          this.props.device !== 'mobile' ?
          <Contacts ref={ this.contactsElement } active=""/> : null
        }
      </Fragment>
    );
  }
}

export default MainPage;
