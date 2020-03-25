import React, { Component } from 'react';

export default class Slider extends Component{

  componentDidMount() {
    let slides =
    document.getElementById(this.props.id + "--slides-container").
    getElementsByClassName('slide');

    this.setState({ slidesCount: slides.length - 1 });
    this.setState({ offset: this.props.visible ? 2 : 1 });

    if( this.props.visible ){
      let cloneFirst = slides[0].cloneNode(true),
          cloneLast = slides[slides.length - 1].cloneNode(true),
          cloneSecond = slides[1].cloneNode(true),
          cloneLastSecond = slides[slides.length - 2].cloneNode(true);

          document.getElementById(this.props.id + "--slides-container").
          appendChild(cloneFirst);
          document.getElementById(this.props.id + "--slides-container").
          appendChild(cloneSecond);
          document.getElementById(this.props.id + "--slides-container").
          insertBefore(cloneLastSecond, slides[0]);
          document.getElementById(this.props.id + "--slides-container").
          insertBefore(cloneLast, slides[0]);
    }else{
      let cloneFirst = slides[0].cloneNode(true),
          cloneLast = slides[slides.length - 1].cloneNode(true);

          document.getElementById(this.props.id + "--slides-container").
          appendChild(cloneFirst);
          document.getElementById(this.props.id + "--slides-container").
          insertBefore(cloneLast, slides[0]);
    }

    slides[0 + this.state.offset].classList.add('active');
  }

  state = {
    currentSlide: 0,
    slidesCount: 0,
    offset: 1,
  }

  changeSlide = e => {
    let slider = document.getElementById(this.props.id),
        slideWidth = this.props.slideWidthVw,
        slidesCount = this.state.slidesCount,
        currentSlide = this.state.currentSlide,
        goTo = parseInt(e.currentTarget.dataset.goto),
        sliderWrapper =
        document.getElementById(this.props.id + "--slides-container"),
        slides = sliderWrapper.getElementsByClassName('slide');

    //add transition class
    slider.classList.add('transition');
    sliderWrapper.classList.add('transition');
    //move slider
    sliderWrapper.style.transform =
    `translate3d(${ -slideWidth * goTo }vw, 0px, 0px )`;
    //remove scaling from the previous slide
    slides[currentSlide + this.state.offset].
    classList.remove('active');
    //add scaling to the next slide
    slides[goTo + this.state.offset].
    classList.add('active');

    if( goTo > this.state.slidesCount ){
      setTimeout( () => {
        slider.classList.remove('transition');
        sliderWrapper.classList.remove('transition');
        sliderWrapper.style.transform =
        `translate3d(0px, 0px, 0px )`;

        //remove scaling from the previous slide
        sliderWrapper.getElementsByClassName('active')[0].
        classList.remove('active');
        //add scaling to the next slide
        slides[0 + this.state.offset].
        classList.add('active');

        this.setState({ currentSlide: 0 });
      }, 300 )
    }else if( goTo < 0 ){
      setTimeout( () => {
        slider.classList.remove('transition');
        sliderWrapper.classList.remove('transition');
        sliderWrapper.style.transform =
        `translate3d(${ -slideWidth * slidesCount }vw, 0px, 0px )`;

        //remove scaling from the previous slide
        sliderWrapper.getElementsByClassName('active')[0].
        classList.remove('active');
        //add scaling to the next slide
        sliderWrapper.getElementsByClassName('slide')[slides.length - 3].
        classList.add('active');

        this.setState({ currentSlide: slidesCount });
      }, 300 )
    }
    else{
      setTimeout( () => {
        slider.classList.remove('transition');
        sliderWrapper.classList.remove('transition');
        this.setState({ currentSlide: goTo });
      }, 300 )
    }
  }

  render() {

    return(
      <div id={ this.props.id } className="slider">
        <div className="wrapper">
          <div id={ this.props.id + "--slides-container" } className="container">
            {
              this.props.content ?
              this.props.content.map(
                (slide, i) => <span key={ i } className="slide">{ slide }</span>
              ) :
              null
            }
          </div>
        </div>
        <button onClick={ this.changeSlide } data-goto={ this.state.currentSlide - 1 } className="prev"/>
        <button onClick={ this.changeSlide } data-goto={ this.state.currentSlide + 1 } className="next">
          {
            this.props.buttonText ?
            this.props.buttonText.map( (text, i) =>
              this.state.currentSlide === i ?
              <span key={i} className="m-helvetica-12-bold">{ text }</span> : null
            ) : null
          }
        </button>
      </div>
    )
  }
}
