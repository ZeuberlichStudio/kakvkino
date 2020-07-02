import React from 'react'
import {Link} from 'react-router-dom'
import DialogWindow from 'components/dialogWindow.component'

import poster_1 from 'assets/images/poster_1.svg'
import poster_2 from 'assets/images/poster_2.svg'

const Projects = ({className}) => {
  return(
    <div className={className}>
      <Project
        className={`${className + '_project'}`}
        poster={poster_1}
        title="Шоколад с морской солью"
        genre="Лирическая комедия"
        length="100 мин"
        status="В подготовке"
        forecast="1.5 млн зрителей"
        publisher="Стадия переговоров"
        writer="Алиса Лунина"
        description="Трагикомическая история о том, как несколько
          совсем запутавшихся в личных и семейных
          отношениях героев: две яркие пары и одна
          девочка – непреклонной волей судьбы
          отправляются отдыхать дикарями на берег Черного
          моря в Крым. Они должны продержаться…
        "
        link="/projects/sea-salt-chocolate"
      />

      <Project
        className={`${className + '_project'}`}
        poster={poster_2}
        title="Статус – любовь"
        genre="Новогодняя комедия"
        length="90 мин"
        status="В подготовке"
        forecast="1.5 млн зрителей"
        publisher="Стадия переговоров"
        writer="Алиса Лунина"
        description="История любви популярной блогерши и скромного
        биолога, которого нет ни в одной соцсети. Против любви
        Игоря и Насти – весь мир, обстоятельства, их бывшие
        возлюбленные, плетущие интриги, и даже сами Игорь с
        Настей , потому что двух более разных персонажей, чем
        они, сложно представить, однако, истинная любовь
        побеждает все.
        "
        link="/projects/status-love"
      />
    </div>
  );
}

const Project =
({
  className,
  poster,
  title,
  genre,
  length,
  status,
  forecast,
  publisher,
  writer,
  description,
  link
}) => (
  <div className={className}>
    <img src={poster} alt=""/>
    <h3>{title}</h3>
    <ul>
      <li><span>Жанр:&nbsp;</span>{genre}</li>
      <li><span>Хронометраж:&nbsp;</span>{length}</li>
      <li><span>Статус:&nbsp;</span>{status}</li>
      <li><span>Прогноз кинопроката:&nbsp;</span>{forecast}</li>
      <li><span>Дистрибьютор:&nbsp;</span>{publisher}</li>
      <li>
        <span>Сценарист:&nbsp;</span>
        <DialogWindow text={writer}>
          <h4>Алиса Лунина</h4>
          <p>современная российская писательница, сценарист и драматург</p>
        </DialogWindow>
      </li>
    </ul>
    <p>{description}</p>
    <Link to={link}>Подробнее о проекте</Link>
  </div>
)

export default Projects;
