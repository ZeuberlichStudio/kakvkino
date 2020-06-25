import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component{

  componentDidMount() {
    this.fetchMovies();

    let container = document.getElementById('movies-table-items-container');

    window.addEventListener('mousewheel', e => {
      let scrollTop = container.scrollTop;
      container.scrollTop = scrollTop + e.deltaY;
    });

    container.addEventListener('scroll', e => {
      let scrollTop = container.scrollTop;
      this.setState({ scrollTop });
    });

    window.addEventListener('resize', () => {
      this.calculateScroll();
    });
  }

  componentWillUnmount() {
    let container = document.getElementById('movies-table-items-container');

    window.removeEventListener('mousewheel', e => {
      let scrollTop = container.scrollTop;
      container.scrollTop = scrollTop + e.deltaY;
    });

    container.removeEventListener('scroll', e => {
      let scrollTop = container.scrollTop;
      this.setState({ scrollTop });
    });

    window.removeEventListener('resize', () => {
      this.calculateScroll();
    });
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

  state = {
    movies: [],
    orderBy: '',
    order: 1,
    filtersOpen: 0,
    year: 0,
    by: '',
    genre: '',
    viewers: []
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

  calculateScroll = () => {
    let container = document.getElementById('movies-table-items-container');
    let blockHeight = container.offsetHeight;
    let scrollHeight = container.scrollHeight;

    this.setState({ blockHeight, scrollHeight });
    console.log( blockHeight );
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

  render() {
    return(
      <section id="movies">
        <h1 className="bebas-30 light">Российские фильмы, собравшие свыше 500 тыс. зритлей за последние 6 лет</h1>

        <div className="movies-table-container">
          <div className={ this.state.order > 0 ? "movies-table-header bebas-14 asc" : "movies-table-header bebas-14 desc"  }>
            <span>Год</span>
            <span>Название фильма</span>
            <span>Прокатчик</span>
            <button className="bebas-14" onClick={ this.orderByDate }><span>Дата старта</span></button>
            <button className="bebas-14" onClick={ this.orderByViewers }><span>Зрители</span><span className="helvetica-12-bold">(млн чел)</span></button>
            <button className="bebas-14" onClick={ this.orderByProfit }><span>Сборы</span><span className="helvetica-12-bold">(млн ₽)</span></button>
            <button className="bebas-14" onClick={ this.orderByScreens }><span>Экраны</span></button>
            <span>Жанр</span>
          </div>
          <div id="movies-table-items-container" className="movies-table-items-container">
            {
              this.state.movies.length ?
              this.state.movies.map( (movie, i) =>
                <div key={ i } className="movies-table-item helvetica-12-bold">
                  <span>{ movie.year }</span>
                  <span className="bebas-14">{ movie.title }</span>
                  <span>{ movie.by }</span>
                  <span>{
                    movie.releaseDate.split(/-|T/)[0] + '.' +
                    movie.releaseDate.split(/-|T/)[1] + '.' +
                    movie.releaseDate.split(/-|T/)[2]
                  }</span>
                  <span>{ movie.viewers }</span>
                  <span>{ movie.profit }</span>
                  <span>{ movie.screens }</span>
                  <span>{ movie.genre }</span>
                </div>
              ) : null
            }
            <Scrollbar
             windowHeight={ this.state.blockHeight }
             scrollHeight={ this.state.scrollHeight }
             scrollTop={ this.state.scrollTop }/>
          </div>
        </div>

        <div className={ this.state.filtersOpen ? 'movies-filters-switch active' : 'movies-filters-switch' }>
          <button onClick={ this.openFilters }>
          </button>
          <span className="helvetica-12-bold">Поисковые фильтры</span>
        </div>

        <div id="movies-filters" className={ this.state.filtersOpen ? 'active' : null }>
          <button onClick={ this.closeFilters } id="close-movies-filters"/>
          <form>
            <span className="helvetica-12-bold">Поисковые фильтры</span>
            <div className="fieldset">
              <label className="helvetica-10-bold">Год выхода</label>
              <span className="bebas-14">Год</span>
              <select name="year" className="bebas-14">
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
              <label className="helvetica-10-bold">Жанр</label>
              <select name="genre" className="bebas-14">
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
              <label className="helvetica-10-bold">Дистрибьютор</label>
              <select name="by" className="bebas-14">
                <option value="">-</option>
                <option value="Централ Партнершип">Централ Партнершип</option>
                <option value="UPI">UPI</option>
                <option value="Каропрокат">Каропрокат</option>
                <option value="WDSSPR">WDSSPR</option>
                <option value="Наше кино">Наше кино</option>
                <option value="FOX/Bazelevs">FOX/Bazelevs</option>
                <option value="WDSSPR">WDSSPR</option>
              </select>
            </div>
            <div className="fieldset">
              <label className="helvetica-10-bold">Сборы в кинозалах</label>
              <select name="viewers" className="bebas-14">
                <option value="">-</option>
                <option value="0.5-1">От 0.5 до 1 млн зрителей</option>
                <option value="1-1.5">От 1 до 1.5 млн зрителей</option>
                <option value="1.5-2">От 1.5 до 2 млн зрителей</option>
                <option value="2">От 2 млн зрителей</option>
              </select>
            </div>
            <button onClick={ this.submitFilters } className="bebas-14">Поиск</button>
          </form>
        </div>
      </section>
    )
  }
}

class Scrollbar extends Component{
  render() {
    return(
      <div id="scrollbar" style={{ height: this.props.windowHeight + 'px' }}>
        <div id="scrollbar-thumb"
         style={{
           height: Math.pow(this.props.windowHeight, 2)/this.props.scrollHeight + 'px',
           top: this.props.scrollTop*this.props.windowHeight/this.props.scrollHeight,
         }}></div>
      </div>
    )
  }
}
