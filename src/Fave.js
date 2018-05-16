import React from 'react';

export default class Fave extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            // isFave: false,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.stopPropagation()
        console.log('handling Fave click!')
        // this.setState({
        //     isFave: !this.state.isFave
        // })
        this.props.handleFaveToggle()
    }

    render() {

        const isFave = this.props.isFave ? "remove_from_queue" : 'add_to_queue';

        return (
            <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
              <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}
