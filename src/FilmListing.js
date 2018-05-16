import React from 'react';
import FilmRows from './FilmRows'

export default class FilmListing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            filter: 'all'
        }
        this.handleFilterClick = this.handleFilterClick.bind(this)
    }

    handleFilterClick(filter){
        console.log(`Setting filter to: ${filter}`)
        this.setState({
            filter: filter
        })
    }

    render(){

        let allFilms = (this.state.filter === 'faves') ? this.props.faves : this.props.films;

        let allFilter = `film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`
        let favesFilter = `film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`

        const html = allFilms.map((film) => {
              return (
                <FilmRows
                  film={film}
                  key={film.id}
                  handleFaveToggle={() => this.props.onFaveToggle(film)}
                  isFave={this.props.faves.includes(film)}
                  handledetailsClick={() => this.props.handleDetailsClick(film)}
                />
              )
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={allFilter} onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={favesFilter} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>

                {html}
            </div>
        )
    }
}
