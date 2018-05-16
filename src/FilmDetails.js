import React from 'react';

export default class FilmDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        const backdropUrl = `https://image.tmdb.org/t/p/w1280/${this.props.current.backdrop_path}`
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.current.poster_path}`
        let detail;
        return (
            <div className="film-detail is-hydrated">
              <figure className="film-backdrop">
                <img src={backdropUrl} alt="" />
                <h1 className="film-title">{this.props.current.title}</h1>
              </figure>

              <div className="film-meta">
                <h2 className="film-tagline">{this.props.current.tagline}</h2>
                <p className="film-detail-overview">
                  <img src={posterUrl} className="film-detail-poster" alt={this.props.current.title} />
                  {this.props.current.overview}
                </p>
              </div>
            </div>
        )
    }
}
