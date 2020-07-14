import React from 'react';
//images
import finance_model from 'assets/images/finance_model.svg';
import m_finance_model from 'assets/images/mobile/finance_model.svg';
import stages from 'assets/images/stats_stages.svg';
//section
const HowItWorks = ({device}) => (
  <section id="how-it-works" className="section-how-it-works">
    <div className="section-how-it-works_text-left text-left-container">
      <h1 className="bebas-64 m-bebas-30">Как это работает?</h1>
      <p className="helvetica-14-bold m-helvetica-12-bold">
        Бюджеты рекламодателей формируют производственный
        бюджет фильма. По итогам кинопроката начисляется
        процент дохода согласно финансовой модели.
      </p>
      <img src={device === 'mobile' ? m_finance_model : finance_model} alt=""/>
    </div>
    <div className="section-how-it-works_text-right">
      <h2 className="bebas-30 m-bebas-30">Алгоритм действий:</h2>
      <img alt="Stages" src={stages}/>
    </div>
  </section>
)

export default HowItWorks;
