import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class MobileMovies extends Component{

    state = {
      movies: [],
      orderBy: 'releaseDate',
      order: 1,
      filtersOpen: 0,
      year: 0,
      by: '',
      genre: '',
      viewers: [],
      activeColumn: 'profit',
    }

    componentDidMount() {
      this.fetchMovies();
      setTimeout( () => this.openNotice(), 3000 );
    }

    componentDidUpdate(prevProps, prevState) {

      if(
        prevState.orderBy !== this.state.orderBy ||
        prevState.order !== this.state.order ||
        prevState.year !== this.state.year ||
        prevState.by !== this.state.by ||
        prevState.genre !== this.state.genre ||
        prevState.viewers !== this.state.viewers
      ){
        this.fetchMovies();
      }

    }

    openNotice = () => {
      document.getElementById('movies-notice').classList.add('active');
    }

    closeNotice = () => {
      document.getElementById('movies-notice').classList.remove('active');
    }


    fetchMovies = () => {
      let url = 'https://kino.z-test.online/post';

      let body = {}

      if ( this.state.year ){
        body.year = this.state.year;
      }
      if ( this.state.by ){
        body.by = this.state.by;
      }
      if ( this.state.viewers.length > 0 ){
        body.viewers = this.state.viewers;
      }
      if ( this.state.genre ){
        body.genre = this.state.genre;
      }
      if ( this.state.orderBy ){
        body.orderBy = this.state.orderBy;
      }
      if ( this.state.order ){
        body.order = this.state.order;
      }

      fetch( url, {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then( res => res.json() )
      .then( data => {
        this.setState({ movies: data });
        this.calculateScroll();
      })
      .catch( err => console.log( "Error" + err ) );
    }

    orderByDate = e => {

      if( document.getElementById('movies').getElementsByClassName('active')[0] ){
        document.getElementById('movies').getElementsByClassName('active')[0].classList.remove('active');
      }

      e.currentTarget.classList.add('active');

      if( this.state.orderBy !== 'releaseDate' ){
        this.setState({ orderBy: 'releaseDate' });
        this.setState({ order: 1 });
      }
      else if( this.state.order === 1 ){
        this.setState({ order: -1 });
      }
      else if( this.state.order === -1 ){
        this.setState({ order: 1 });
      }

    }

    orderByViewers = e => {

      if( document.getElementById('movies').getElementsByClassName('active')[0] ){
        document.getElementById('movies').getElementsByClassName('active')[0].classList.remove('active');
      }

      e.currentTarget.classList.add('active');

      if( this.state.orderBy !== 'viewers' ){
        this.setState({ orderBy: 'viewers' });
        this.setState({ order: 1 });
      }
      else if( this.state.order === 1 ){
        this.setState({ order: -1 });
      }
      else if( this.state.order === -1 ){
        this.setState({ order: 1 });
      }

    }

    orderByProfit = e => {

      if( document.getElementById('movies').getElementsByClassName('active')[0] ){
        document.getElementById('movies').getElementsByClassName('active')[0].classList.remove('active');
      }

      e.currentTarget.classList.add('active');

      if( this.state.orderBy !== 'profit' ){
        this.setState({ orderBy: 'profit' });
        this.setState({ order: 1 });
      }
      else if( this.state.order === 1 ){
        this.setState({ order: -1 });
      }
      else if( this.state.order === -1 ){
        this.setState({ order: 1 });
      }

    }

    orderByScreens = e => {

      if( document.getElementById('movies').getElementsByClassName('active')[0] ){
        document.getElementById('movies').getElementsByClassName('active')[0].classList.remove('active');
      }

      e.currentTarget.classList.add('active');

      if( this.state.orderBy !== 'screens' ){
        this.setState({ orderBy: 'screens' });
        this.setState({ order: 1 });
      }
      else if( this.state.order === 1 ){
        this.setState({ order: -1 });
      }
      else if( this.state.order === -1 ){
        this.setState({ order: 1 });
      }

    }

    openFilters = () => {

      let filters = document.getElementById('movies-filters');
      let filtersOpen = this.state.filtersOpen ? 0 : 1;

      this.setState({ filtersOpen });
      document.addEventListener('click', this.closeFilters);
    }

    closeFilters = e => {
      if( e.target.closest('#close-movies-filters'));
      else if( e.target.closest('#movies-filters')){ return; }

      this.setState({filtersOpen: 0});
      document.removeEventListener('click', this.closeFilters);
    }

    submitFilters = e => {

      e.preventDefault();

      let fields = document.getElementById('movies-filters').getElementsByTagName('select'),
      year, by, genre, viewers;

      for( let i = 0; i < fields.length; i++ ){
        if( fields[i].name === 'year' ){
          year = fields[i].value;
        }
        if( fields[i].name === 'by' ){
          by = fields[i].value;
        }
        if( fields[i].name === 'genre' ){
          genre = fields[i].value;
        }
        if( fields[i].name === 'viewers' ){
          viewers = fields[i].value !== '' ? fields[i].value.split('-') : null;
        }
      }

      this.setState({
        year: year ? year : 0,
        by: by ? by : '',
        genre: genre ? genre : '',
        viewers: viewers ? viewers : []
      });
    }

    changeColumn = e => {
      let activeColumn = e.currentTarget.dataset.column;
      document.getElementById('movies-filters').getElementsByClassName('active')[0].classList.remove('active');
      e.currentTarget.classList.add('active');
      this.setState({activeColumn});
    }

  render() {

    //states
    const {
      activeColumn,
      filtersOpen,
    } = this.state;

    //methods
    const {
      changeColumn,
      submitFilters,
      closeFilters,
      openFilters,
      closeNotice
    } = this;

    return(
      <section id="movies">
        <h1 className="m-bebas-20 light">Российские фильмы, собравшие свыше 500 тыс. зритлей за последние 6 лет</h1>

        <div className="movies-table-container">

          <MoviesFilters
          filtersOpen={ filtersOpen }
          changeColumn={ changeColumn }
          submitFilters={ submitFilters }
          closeFilters={ closeFilters }
          />

          <div className={ this.state.order > 0 ? "movies-table-header m-bebas-14 asc" : "movies-table-header m-bebas-14 desc"  }>
            <span>Год</span>
            <span>Название фильма</span>
            <span onClick={ openFilters }>
              {
                activeColumn === 'viewers' ? <Fragment>зрители <span className="m-helvetica-10-bold">(млн чел)</span></Fragment> :
                activeColumn === 'profit' ? <Fragment>сборы <span className="m-helvetica-10-bold">(млн ₽)</span></Fragment> :
                activeColumn === 'by' ? 'прокатчик' :
                activeColumn === 'screens' ? 'экраны' :
                activeColumn === 'genre' ? 'жанр' :
                activeColumn === 'releaseDate' ? 'дата старта' :
                null
              }
            </span>
          </div>
          <div id="movies-table-items-container" className="movies-table-items-container">
            {
              this.state.movies.length ?
              this.state.movies.map( (movie, i) =>
                <div key={ i } className="movies-table-item m-helvetica-12-bold">
                  <span>{ movie.year }</span>
                  <span className="m-bebas-14">{ movie.title }</span>
                  <span>
                    {
                      activeColumn === 'viewers' ? movie.viewers :
                      activeColumn === 'profit' ? movie.profit :
                      activeColumn === 'by' ? movie.by :
                      activeColumn === 'screens' ? movie.screens :
                      activeColumn === 'genre' ? movie.genre :
                      activeColumn === 'releaseDate' ?
                      movie.releaseDate.split(/-|T/)[0] + '.' +
                      movie.releaseDate.split(/-|T/)[1] + '.' +
                      movie.releaseDate.split(/-|T/)[2] :
                      null
                    }
                  </span>
                </div>
              ) : null
            }
          </div>
        </div>
        <Notice closeNotice={ closeNotice }/>
      </section>
    )
  }
}

class MoviesFilters extends Component {
  render() {

    const {
      changeColumn,
      submitFilters,
      closeFilters,
      filtersOpen,
    } = this.props;

    return(
      <div id="movies-filters" className={ filtersOpen ? 'active' : null }>
        <button onClick={ closeFilters } id="close-movies-filters"/>
        <div className="column-display-selection m-bebas-14">
            <span>Показатели</span>
            <button onClick={ changeColumn } className="active m-bebas-14" data-column="viewers">Зрители <span className="m-helvetica-10-bold">(млн чел)</span></button>
            <button onClick={ changeColumn } className="m-bebas-14" data-column="profit">Сборы <span className="m-helvetica-10-bold">(млн ₽)</span></button>
            <button onClick={ changeColumn } className="m-bebas-14" data-column="by">Прокатчик</button>
            <button onClick={ changeColumn } className="m-bebas-14" data-column="releaseDate">Дата старта</button>
            <button onClick={ changeColumn } className="m-bebas-14" data-column="screens">Экраны</button>
            <button onClick={ changeColumn } className="m-bebas-14" data-column="genre">Жанр</button>
        </div>
        <form className="m-bebas-14">
          <span>Фильтры</span>
          <div className="fieldset">
            <label>Год выхода</label>
            <select name="year" className="m-bebas-14">
              <option value="">-</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className="fieldset">
            <label className="m-helvetica-12-bold">Жанр</label>
            <select name="genre" className="m-bebas-14">
              <option value="">-</option>
              <option value="боевик">боевик</option>
              <option value="комедия">Комедия</option>
              <option value="драма">Драма</option>
              <option value="военный">Военный</option>
              <option value="исторический">Исторический</option>
              <option value="фэнтези">Фэнтези</option>
              <option value="спорт">спорт</option>
              <option value="триллер">триллер</option>
              <option value="военный">Военный</option>
            </select>
          </div>
          <div className="fieldset">
            <label className="m-helvetica-12-bold">Дистрибьютор</label>
            <select name="by" className="m-bebas-14">
              <option value="">-</option>
              <option value="Централ Партнершип">Централ Партнершип</option>
              <option value="UPI">UPI</option>
              <option value="Каропрокат">Каропрокат</option>
              <option value="WDSSPR">WDSSPR</option>
              <option value="Наше кино">Наше кино</option>
              <option value="FOX/Bazelevs">FOX/Bazelevs</option>
            </select>
          </div>
          <div className="fieldset">
            <label className="m-helvetica-12-bold">Сборы в кинозалах</label>
            <select name="viewers" className="m-bebas-14">
              <option value="">-</option>
              <option value="0.5-1">От 0.5 до 1 млн зрителей</option>
              <option value="1-1.5">От 1 до 1.5 млн зрителей</option>
              <option value="1.5-2">От 1.5 до 2 млн зрителей</option>
              <option value="2">От 2 млн зрителей</option>
            </select>
          </div>
          <button onClick={ submitFilters } className="m-bebas-14">Применить и продолжить</button>
        </form>
      </div>
    )
  }
}

class Notice extends Component {
  render() {
    return(
      <div id="movies-notice">
        <button onClick={ this.props.closeNotice } id="close-movies-notice"></button>
        <p className="m-helvetica-12-bold">
          С полным функционалом таблицы вы можете
          ознакомиться <u>на версии сайта для компьютеров</u>
        </p>
      </div>
    )
  }
}
