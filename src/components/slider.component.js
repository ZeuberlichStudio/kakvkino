import React, { Component } from 'react';

export default class Carousel extends Component{

  componentDidMount() {
    let slides =
    document.getElementById(this.props.id + "--slides-conteainer").
    getElementsByClassName('slide');

    this.setState({ slidesCount: slides.length - 1 });

    let cloneFirst = slides[0].cloneNode(true),
        cloneSecond = slides[1].cloneNode(true),
        cloneLast = slides[slides.length - 1].cloneNode(true),
        cloneLastSecond = slides[slides.length - 2].cloneNode(true);

    document.getElementById(this.props.id + "--slides-conteainer").
    appendChild(cloneFirst);
    document.getElementById(this.props.id + "--slides-conteainer").
    appendChild(cloneSecond);
    document.getElementById(this.props.id + "--slides-conteainer").
    insertBefore(cloneLastSecond, slides[0]);
    document.getElementById(this.props.id + "--slides-conteainer").
    insertBefore(cloneLast, slides[0]);

    slides[0 + 2].classList.add('active');
  }

  state = {
    currentSlide: 0,
    slidesCount: 0,
  }

  changeSlide = e => {
    let slideWidth = this.props.slideWidthVw,
        slidesCount = this.state.slidesCount,
        currentSlide = this.state.currentSlide,
        goTo = parseInt(e.currentTarget.dataset.goto),
        sliderWrapper =
        document.getElementById(this.props.id + "--slides-conteainer"),
        slides = sliderWrapper.getElementsByClassName('slide');

    //add transition class
    sliderWrapper.classList.add('transition');
    //move slider
    sliderWrapper.style.transform =
    `translate3d(${ -slideWidth * goTo }vw, 0px, 0px )`;
    //remove scaling from the previous slide
    slides[currentSlide + 2].
    classList.remove('active');
    //add scaling to the next slide
    slides[goTo + 2].
    classList.add('active');

    if( goTo > this.state.slidesCount ){
      setTimeout( () => {
        sliderWrapper.classList.remove('transition');
        sliderWrapper.style.transform =
        `translate3d(0px, 0px, 0px )`;

        //remove scaling from the previous slide
        sliderWrapper.getElementsByClassName('active')[0].
        classList.remove('active');
        //add scaling to the next slide
        slides[0 + 2].
        classList.add('active');

        this.setState({ currentSlide: 0 });
      }, 300 )
    }else if( goTo < 0 ){
      setTimeout( () => {
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
        sliderWrapper.classList.remove('transition');
        this.setState({ currentSlide: goTo });
      }, 300 )
    }
  }

  render() {

    return(
      <div id={ this.props.id }>
        <div id={ this.props.id + "--slides-conteainer" } className="wrapper">
          {
            this.props.content ?
            this.props.content.map(
              (slide, i) => <span key={ i } className="slide">{ slide }</span>
            ) :
            null
          }
        </div>
        <button onClick={ this.changeSlide } data-goto={ this.state.currentSlide - 1 } className="prev"/>
        <button onClick={ this.changeSlide } data-goto={ this.state.currentSlide + 1 } className="next"/>
      </div>
    )
  }
}
