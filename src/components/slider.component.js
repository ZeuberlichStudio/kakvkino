import React from 'react';

const Slider = ({children}) => {

  const [activeSlide, _setActiveSlide] = React.useState(0);
  const [slideCount, setSlideCount] = React.useState(0);
  const [slideWidth, setSlideWidth] = React.useState(0);
  const [offset, setOffset] = React.useState(1);
  const activeSlideRef = React.useRef(activeSlide);
  const setActiveSlide = data => {
    activeSlideRef.current = data;
    _setActiveSlide(data);
  };

  React.useEffect( () => {
    if( !slideCount ) {
      initSlider();
      return;
    }

    initTouchListener();
  }, [slideCount]);

  function returnSlide(child, i) {
    return(
      <div className={`slider_slide slider_slide-${i}`}>
        {child}
      </div>
    );
  }

  function initSlider() {
    const container = document.getElementById('slider_content');
    const slides = document.getElementsByClassName('slider_slide');
    const slideCount = slides.length - 1;
    const slideWidth = slides[0].offsetWidth;

    const cloneFirst = slides[0].cloneNode(true);
    const cloneLast = slides[slideCount].cloneNode(true);

    cloneFirst.classList.add('clone');
    cloneLast.classList.add('clone');
    container.appendChild(cloneFirst);
    container.insertBefore(cloneLast, slides[0]);
    container.style.transform =
    `translateX(${-slideWidth * offset}px)`;

    setSlideCount(slideCount);
    setSlideWidth(slideWidth);
  }

  function initTouchListener() {
    const container = document.getElementById('slider_content');
    var startX, endX;

    function touchStartHandler(e) {
      startX = e.touches[0].clientX;
    }

    function touchEndHandler(e){
      endX = e.changedTouches[0].clientX;
      const deltaX = startX - endX;

      if( deltaX === 0 ) return;

      switch (true) {
        case (deltaX > 0):
          changeSlide(activeSlideRef.current + 1);
          break;
        case (deltaX < 0):
          changeSlide(activeSlideRef.current - 1);
          break;
        default:
          break;
      }
    }

    container.addEventListener('touchstart', touchStartHandler);
    container.addEventListener('touchend', touchEndHandler);
  }

  function changeSlide(goTo) {
    const content = document.getElementById('slider_content');
    const duration = 300;

    content.classList.add('transition');
    content.style.transform =
    `translateX(${-slideWidth * (goTo + offset)}px)`;

    setTimeout(() => {
      content.classList.remove('transition');

      if( goTo > slideCount ){
        content.style.transform =
        `translateX(${-slideWidth * (0 + offset)}px)`;
      }
      else if( goTo < 0 ){
        content.style.transform =
        `translateX(${-slideWidth * (slideCount + offset)}px)`;
      }
    }, duration);

    setActiveSlide(
      goTo > slideCount ? 0 :
      goTo < 0 ? slideCount :
      goTo
    );
  }

  return(
    <div className="slider">
      <button
        onClick={() => changeSlide(activeSlide - 1)}
        className="slider_prev"
      />
      <div className="slider_content-wrapper">
        <div id="slider_content" className="slider_content">
          { children.map((child, i) => returnSlide(child, i)) }
        </div>
      </div>
      <button
        onClick={() => changeSlide(activeSlide + 1)}
        className="slider_next"
      />
    </div>
  );
}

export default Slider;
