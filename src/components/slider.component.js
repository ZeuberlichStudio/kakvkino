import React, { Component } from 'react';

export default class Slider extends Component{

  componentDidMount() {
    this.initiateSlider();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
          prevState.currentSlide !== this.state.currentSlide &&
          this.props.onSlideChange
        ) this.props.onSlideChange(this.state.currentSlide);
    if ( prevState.slideCount || !this.state.slideCount ) return;
    this.changeSlide(0);
  }

  state = {
    currentSlide: 0,
    slideCount: 0,
    offset: 0,
  }

  initiateSlider = () => {
    const container =
    document.getElementById(this.props.id + "--slides-container");
    let slides = container.getElementsByClassName('slide');

    const offset = this.props.visible ? 2 : 1;

    this.setState({ slideCount: slides.length });
    this.setState({ offset });

    if( this.props.visible ){
      let cloneFirst = slides[0].cloneNode(true),
          cloneLast = slides[slides.length - 1].cloneNode(true),
          cloneSecond = slides[1].cloneNode(true),
          cloneSecondLast = slides[slides.length - 2].cloneNode(true);

          container.appendChild(cloneFirst);
          container.appendChild(cloneSecond);
          container.insertBefore(cloneLast, slides[0]);
          container.insertBefore(cloneSecondLast, slides[0]);
    }else{
      let cloneFirst = slides[0].cloneNode(true),
          cloneLast = slides[slides.length - 1].cloneNode(true);

          container.appendChild(cloneFirst);
          container.insertBefore(cloneLast, slides[0]);
    }
  }

  changeSlide = (goTo) => {
    let slider = document.getElementById(this.props.id),
        slideWidth = this.props.slideWidthVw,
        slideCount = this.state.slideCount,
        currentSlide = this.state.currentSlide,
        offset = this.state.offset,
        container =
        document.getElementById(this.props.id + "--slides-container"),
        slides = container.getElementsByClassName('slide');

    //add transition class
    slider.classList.add('transition');
    container.classList.add('transition');
    //move slider
    container.style.transform =
    `translate3d(${ -slideWidth * ( goTo + this.state.offset ) }vw, 0px, 0px )`;
    //remove scaling from the previous slide
    slides[currentSlide + this.state.offset].
    classList.remove('active');
    //add scaling to the next slide
    slides[goTo + this.state.offset].
    classList.add('active');

    if( this.props.finite ){
      if (goTo === 0) {
        slider.classList.add('prev-hide');
        slider.classList.remove('next-hide');
      }
      else if (goTo === slideCount - 1) {
        slider.classList.add('next-hide');
        slider.classList.remove('prev-hide');
      }
      else{
        slider.classList.remove('prev-hide');
        slider.classList.remove('next-hide');
      }
    }

    if( goTo > this.state.slideCount - 1 ){
      setTimeout( () => {
        slider.classList.remove('transition');
        container.classList.remove('transition');
        container.style.transform =
        `translate3d(
          ${this.props.visible ? -slideWidth * 2 : -slideWidth}vw,
         0px, 0px )`;

        //remove scaling from the previous slide
        container.getElementsByClassName('active')[0].
        classList.remove('active');
        //add scaling to the next slide
        slides[0 + this.state.offset].
        classList.add('active');

        this.setState({ currentSlide: 0 });
      }, 300 )
    }else if( goTo < 0 ){
      setTimeout( () => {
        slider.classList.remove('transition');
        container.classList.remove('transition');
        container.style.transform =
        `translate3d(${-slideWidth * (slideCount - 1 + offset)}vw, 0px, 0px )`;

        //remove scaling from the previous slide
        container.getElementsByClassName('active')[0].
        classList.remove('active');
        //add scaling to the next slide
        container.getElementsByClassName('slide')[slides.length - 1 - offset].
        classList.add('active');

        this.setState({ currentSlide: slideCount - 1 });
      }, 300 )
    }
    else{
      setTimeout( () => {
        slider.classList.remove('transition');
        container.classList.remove('transition');
        this.setState({ currentSlide: goTo });
      }, 300 )
    }
  }

  render() {

    const {
      slideCount,
      currentSlide,
    } = this.state;

    const {
      slideNames
    } = this.props;

    return(
      <div id={ this.props.id } className="slider">
        <div className="wrapper">
          <div id={ this.props.id + "--slides-container" } className="container">
            {
              this.props.content ?
              this.props.content.map(
                (slide, i) => <span key={ i } className={`slide slide-${i}`}>{ slide }</span>
              ) :
              this.props.children ?
              this.props.children.map(
                (slide, i) => <span key={ i } className={`slide slide-${i}`}>{ slide }</span>
              ) :
              null
            }
          </div>
        </div>
        <button
          onClick={ () => this.changeSlide(this.state.currentSlide - 1) }
          className="prev"
        >
          <span>
            {
              slideNames ?
              currentSlide > 0 ?
              slideNames[currentSlide + 1] :
              slideNames[slideCount - 1] :
              null
            }
          </span>
        </button>
        <button onClick={ () => this.changeSlide(this.state.currentSlide + 1) } className="next">
          <span>
            {
              slideNames ?
              currentSlide < slideCount - 1 ?
              slideNames[currentSlide + 1] :
              slideNames[0] :
              null
            }
          </span>
        </button>
      </div>
    )
  }
}
