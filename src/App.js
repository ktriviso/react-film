import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            films:TMDB.films,
            faves: [],
            current: {}
        }
        this.handleFaveToggle = this.handleFaveToggle.bind(this)
        this.handleDetailsClick = this.handleDetailsClick.bind(this)
    }

    handleFaveToggle(film){
        const faves = this.state.faves.slice();
        const filmIndex = faves.indexOf(film);

        // if the film is in the film array
        if (filmIndex > -1) {
          faves.splice(filmIndex, 1)
        } else {
          faves.push(film)
        }

        this.setState({faves})
    }

    handleDetailsClick(film){
      console.log('handledetailsClick for' + film.title)


      const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

      fetch(url).then(response => {
        response.json().then(data => {
          console.log(data)
          this.setState({
            current: data
          })
        })
      })
    }


  render() {
    return (
        <div className="film-library">
        <FilmListing
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            handleDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails
            current={this.state.current}
        />
        </div>
    );
  }
}
