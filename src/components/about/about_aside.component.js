import React, { Component } from 'react';

export default class AboutAside extends Component{
  render() {
    return(
      <div className="about--aside-wrapper">
        <article id="about--aside" className="light">
          <h2 className="bebas-30 m-bebas-30">Потому-что продукт в кино:</h2>
          <div>
            <h3 className="bebas-30 m-bebas-25">В фокусе внимания</h3>
            <p className="helvetica-14-bold m-helvetica-12-bold">
              Зритель не переключается, в отличие от других видов рекламы:
              <br/>
              <br/>
              • ТВ — 55% времени рекламного блока аудитория занимается другими делами или переключает канал
              <span className="opacity-05"> (IPSOS, 2017)</span>
              <br/>
              <br/>
              • Интернет — 44% аудитории блокирует рекламу
              <span className="opacity-05"> (Deloitte, 2019)</span>
            </p>
          </div>
          <div>
            <h3 className="bebas-30 m-bebas-25">В свете звёзд</h3>
            <p className="helvetica-14-bold m-helvetica-12-bold">
              На бренд распространяется любовь зрителей  к героям фильма
            </p>
          </div>
          <div>
            <h3 className="bebas-30 m-bebas-25">Как образец поведения</h3>
            <p className="helvetica-14-bold m-helvetica-12-bold">
              Появление в кино создает связь бренда с определенной ситуацией
            </p>
          </div>
        </article>
      </div>
    )
  }
}
