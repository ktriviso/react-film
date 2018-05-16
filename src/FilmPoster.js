import React from 'react';

export default class FilmPoster extends React.Component{
    render(props){
        return (
            <img src={"https://image.tmdb.org/t/p/w780/" + this.props.image} alt="" />
        )
    }

}
