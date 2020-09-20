import React from 'react';
//Images
import online_pricing from 'assets/images/online_pricing.svg';
//Animation data
import lottie from 'lottie-web';
import popcorn from 'assets/json/popcorn.json';

//Section
const Popcorn = ({device}) => (
  <section id="movie-lifecycle" className="popcorn-section">
    <h1>Жизненный цикл кино в 1й год</h1>
    <div className="popcorn-section_text-left">
      <h2>
        ЭФФЕКТИВНОСТЬ КИНО 
        <span>
          длительный охват <br className="m-br"/>
          и оптимизация стоимости <br className="pc-br"/>
          контакта <br className="m-br"/>
          по сравнению с аналогами
        </span>
      </h2>

      <div className="popcorn-section_text-left_block">
        <h3>
          Цена одного киноконтакта <br className="pc-br"/>
          в интернете <br className="m-br"/>
          на <span>53% выгоднее</span>, <br/>
          чем в видео на Youtube
        </h3>
        <img src={online_pricing} alt=""/>
      </div>

      <div className="popcorn-section_text-left_block">
        <h3>
          Цена одного киноконтакта <br className="pc-br"/>
          в кинотеатре на <span>20% выгоднее</span>, <br/>
          чем в ролике перед сеансом
        </h3>
        <div><span>Реклама в кино</span><span></span><span>3.89 руб.<sup>2</sup></span></div>
        <div><span>Ролик перед сеансом</span><span></span><span>4.83 руб.</span></div>
      </div>

      <div className="popcorn-section_text-left_notice">
        <span><sup>2</sup>Без учета возврата от кинопроката</span>
        <span><sup>4</sup>С учетом возврата от кинопроката</span>
      </div>
    </div>

    <div className="popcorn-section_text-right">
      <div className="popcorn-section_text-right_block stage">
        <h3>этап 3|тв<sup>6</sup></h3>
        <p>
          48% россиян используют ТВ для <br className="pc-br"/>
          просмотра кино <span>(Mediascope, 2019)</span>
      </p>
        <span>
          <sup>5</sup>Сред. доля телесмотрения одного <br className="pc-br"/>
          &nbsp;&nbsp;выхода российских РомКомов <br className="pc-br"/>
          &nbsp;&nbsp;составляет 7,4%
        </span>
        <span>
          <sup>6</sup>Для сохранения рекламы в ТВ версии <br className="pc-br"/>
          &nbsp;&nbsp;требуются отдельные договорённости
        </span>
      </div>

      <div className="popcorn-section_text-right_block stage">
        <h3>этап 2|интернет</h3>
        <p>
          72% россиян смотрят фильмы в <br className="pc-br"/>
          Интернете <span>(Mediascope, 2019)</span>
        </p>
        <span>
          <sup>3</sup>Средняя аудитория российского фильма <br className="pc-br"/>
          &nbsp;&nbsp;состовляет 12.5 - 20 млн. чел.
        </span>
      </div>

      <div className="popcorn-section_text-right_block stage">
        <h3>Этап 1|кинотеатры</h3>
        <span>
          <sup>1</sup>Средний уровень кинопроката в<br/>
          &nbsp;&nbsp;России в 2018-2019 году
        </span>
      </div>
    </div>
    {
      device === 'desktop' ?
      <PopcornAnimation /> : <div id="popcorn-static"></div>
    }
  </section>
)

const PopcornAnimation = ({device}) => {

  React.useEffect(() => {
    const container = document.getElementById('popcorn-container');
    const animation = lottie.loadAnimation({
      container: container,
      loop: false,
      autoplay: false,
      renderer: 'canvas',
      animationData: popcorn,
    });

    const play = () => scrollHandler(animation, container, play);
    const animateBlocks = () => frameHandler(animation);

    window.addEventListener('scroll', play);
    animation.addEventListener('enterFrame', animateBlocks);
  }, []);

  function scrollHandler(animation, container, handler) {
    let clientHeight = document.documentElement.clientHeight;
    let animation_rect = container.getBoundingClientRect();

    if( animation_rect.top < clientHeight/2 &&
        animation_rect.bottom > 0 ){
        animation.play();
        window.removeEventListener('scroll', handler);
    }
  }

  function frameHandler(animation, scrollHandler) {
    let stages = document.getElementsByClassName('stage');

    if( animation.currentFrame >= 80 ){
      stages[2].style.opacity = 1;
    }
    if( animation.currentFrame >= 255 ){
      stages[1].style.opacity = 1;
    }
    if( animation.currentFrame >= 450 ){
      stages[0].style.opacity = 1;
    }
  }

  return(
    <div id="popcorn-container">
    </div>
  );
}

export default Popcorn;
