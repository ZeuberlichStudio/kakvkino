import React from 'react'
import {Link} from 'react-router-dom'
import DialogWindow from 'components/dialogWindow.component'

import chocolate_with_sea_salt_poster from 'assets/images/chocolate_with_sea_salt_poster.png'
import status_love_poster from 'assets/images/status_love_poster.png'

const Projects = ({className, limit, children}) => {
  return(
    <div className={className}>
      { children }
      <Project
        limit={limit}
        className={`${className + '_project'}`}
        poster={chocolate_with_sea_salt_poster}
        title="Шоколад с морской солью"
        genre="Лирическая комедия"
        length="100 мин"
        status="В подготовке"
        schedule="Ноябрь 2020 – Март 2021"
        writer="Алиса Лунина"
        description="
          Трагикомическая история о том, как несколько совсем запутавшихся в личных и семейных отношениях героев: две яркие пары и одна девочка – непреклонной волей судьбы отправляются отдыхать дикарямина берег Черного моря в Крым. Они должны продержаться десять дней, изображая, что в их отношениях всё благополучно, и думают, что смогут это сделать, однако на «отдыхе», среди красивейших крымских пейзажей их ждут неожиданные приключения и испытания. В финале судьба всё расставляет на свои места, и подлинная любовь, как всегда, побеждает.
        "
        link="/projects/sea-salt-chocolate"
      />

      <Project
        limit={limit}
        className={`${className + '_project'}`}
        poster={status_love_poster}
        title="Статус – любовь"
        genre="Новогодняя комедия"
        length="90 мин"
        status="В подготовке"
        schedule="Сентябрь 2020 – Январь 2021"
        writer="Алиса Лунина"
        description="
          История любви популярной блогерши и скромного биолога, которого нет ни в одной соцсети. Против любви Игоря и Насти – весь мир, обстоятельства, их бывшие возлюбленные, плетущие интриги, и даже сами Игорь с Настей , потому что двух более разных персонажей, чем они, сложно представить, однако, истинная любовь побеждает все.
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
  schedule,
  status,
  writer,
  description,
  link,
  limit
}) => {

  function limitLength(string, limit){
    if( string.length >= limit ){
      let i = limit - 4;
      let expression = string.substring(0, limit - 4).charAt(i - 1) !== ' ';

      while ( expression ){
        expression = string.substring(0, limit - 4).charAt(--i - 1) !== ' ';
      }

      const limitedString =  string.substring(0, i - 1) + '...';

      return limitedString;
    }
  }

  return(
    <div className={className}>
      <img src={poster} alt=""/>
      <h3>{title}</h3>
      <ul>
        <li><span>Жанр:&nbsp;</span>{genre}, {length}.</li>
        <li><span>Статус:&nbsp;</span>{status}</li>
        <li>
          <span>Сценарист:&nbsp;</span>
          <DialogWindow text={writer}>
            <h4>Алиса Лунина</h4>
            <p>современная российская писательница, сценарист и драматург</p>
          </DialogWindow>
        </li>
        <li><span>График производства:&nbsp;</span>{schedule}</li>
      </ul>
      <p>{ limit ? limitLength(description, limit) : description }</p>
      <Link to={link}>Подробнее о проекте</Link>
    </div>
  );
}

export default Projects;
