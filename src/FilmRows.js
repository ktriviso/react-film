import React from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

export default class FilmRows extends React.Component {
    render(){
        return (
            <div key={this.props.film.id} className="film-row" onClick={this.props.handledetailsClick}>
            <FilmPoster image={this.props.film.poster_path}/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{new Date(this.props.film.release_date).getFullYear()}</p>
                </div>
                <Fave
                    film={this.props.film}
                    handleFaveToggle={this.props.handleFaveToggle}
                    isFave={this.props.isFave}
                />
            </div>
        )
    }
}
