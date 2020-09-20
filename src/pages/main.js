import React, {Component, Fragment} from 'react'

/*universal elements*/
import Header from 'components/header.component';
import MobileHeader from 'components/m_header.component';
import Contacts from 'components/contacts.component';
import Footer from 'components/footer.component';

/*sections*/
import Title from 'pages/mainPageSections/title';
import About from 'pages/mainPageSections/about';
import AboutUs from 'pages/mainPageSections/about_us';
import Popcorn from 'pages/mainPageSections/popcorn';
import HowItWorks from 'pages/mainPageSections/how_it_works';
import Filming from 'pages/mainPageSections/filming';
import Statistics from 'pages/mainPageSections/statistics';

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
    let cinemaEfficiency = document.getElementById('cinema-efficiency');
    let aboutRect = document.getElementById('about--article').getBoundingClientRect();
    let aboutRect2 = document.getElementById('about--aside').getBoundingClientRect();
    let headerRect =
    document.getElementById('header').getBoundingClientRect();
    let footerRect =
    document.getElementById('pre-footer').getBoundingClientRect();
    let uiColor;

    if( 
      aboutRect.top <= 0 &&
      aboutRect.bottom > headerRect.bottom/2
    ){
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
        {
          //Header
          this.props.device === 'mobile' ?
          <MobileHeader color={ this.state.uiColor }/> :
          <Header onClick={ this.openContacts } color={ this.state.uiColor }/>
        }
        <main id="content">
          <Title device={ this.props.device }/>
          <About isMobile={ this.props.device === 'mobile' ? true : false }/>
          <Popcorn device={ this.props.device }/>
          <HowItWorks device={ this.props.device }/>
          <Filming device={ this.props.device }/>
          <AboutUs/>
          <Statistics device={ this.props.device }/>
          <div id="divider"></div>
        </main>
        {
          //Contacts
          this.props.device !== 'mobile' ?
          <Contacts ref={ this.contactsElement } active=""/> : null
        }
        <Footer/>
      </Fragment>
    );
  }
}

export default MainPage;
