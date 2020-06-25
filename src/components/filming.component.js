import React from 'react'
import Reference from './filming/reference.component'
import Projects from './filming/projects.component'
import Table from './filming/table.component'

const Filming = () => {
  return(
    <section id="filming-section" className="filming-section">

      <h2>Что снимаем?</h2>
      <span>Кинокартины, которые уже можно выбрать для интеграции с вашим брендом</span>

      <Projects className="filming-section_projects"/>

      <Table/>

      <div className="filming-section_aside-wrapper">
        <article className="filming-section_aside">
          <Reference/>
          <h3>Что снимаем?</h3>
          <Projects className="filming-section_aside_projects"/>
        </article>
      </div>
    </section>
  );
}

export default Filming;
