import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends Component {
  state = {
    gif: []
  }
  fetchGIFs = (query = "dolphins") => {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=4BsVGltZVUWG6h1TqSiYp9Ds296HJuWY&rating=g')
    .then(response => response.json())
    .then(data => {
      this.setState({
        gifs: data.map(gif =>({url: gif.images.original.url}))
      })
    })
  }
  componentDidMount() {
    this.fetchGIFs()
  }
  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
export default GifListContainer