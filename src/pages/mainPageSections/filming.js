import React from 'react'
import Reference from './filming/reference.component'
import Projects from './filming/projects.component'
import Table from './filming/table.component'
import MobileTable from './filming/m_table.component'

const Filming = ({device}) => {
  return(
    <section id="filming" className="filming-section">
      <span id="filming-anchor"></span>
      <h2>Что снимаем?</h2>
      <p>Кинокартины, которые уже можно выбрать для интеграции с вашим брендом</p>

      <Projects className="filming-section_projects"/>

      { device === 'mobile' ? <MobileTable/> : <Table/> }

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
