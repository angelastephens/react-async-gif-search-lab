import React, {component} from 'react'

class GifSearch extends React.Component {
    state={
        query: " "

    }

    handleSubmit = e => {
        event.preventDefault();
        this.props.fetchGifs(this.state.query)


    }

    render(){
        return(
            <form onSubmit= {this.handleSubmit}> 
                <input type= "text " value={this.state.query} onChange={event =>this.setState({query: event.target.value})}> 
                </input>

             </form>
        )
    }

}