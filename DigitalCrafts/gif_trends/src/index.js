import axios from 'axios'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ImageCard from './imageCard';
import BoostrapContainer from './BootstrapContainer';
import './imageCard.css'
import SearchForm from './SearchForm'

const API_KEY = 'NzTHVeebS51FFL4PlkXIhRa93TaIcw12'

class App extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            results: [],
            offset: "0"
        }
        // this.state = {image: [],
        //                 isReady: false}
    }

    // componentDidMount(){
    //     Axios("https://api.giphy.com/v1/gifs/trending?api_key=NzTHVeebS51FFL4PlkXIhRa93TaIcw12&limit=10")
    //     .then(response => {
    //         console.log(response.data)
    //         this.setState({results: response.data.data})
    //         this.setState({isReady: true})
    //     });
    // }
    _handleRequest = (search, rating, limit) => {
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${ search }&api_key=${ API_KEY }&offset=${ this.setState.offset}&rating=${ rating }&limit=${ limit }`)
        .then(response => {
                    console.log(response.data)
                    this.setState({results: response.data.data})
            }) 
    }

    loadMoreGifs = () => {
        return this._handleRequest();
    }
    
    render() {
            return (
            
            <BoostrapContainer>
            <SearchForm onSubmit={this._handleRequest}/>
            <div className="gif-flexbox">
                {this.state.results.map(gif => <ImageCard key={gif.id} url={gif.images.original.url} />)}
                </div>
                <div><button type="submit" onClick={this.loadMoreGifs}>Load More</button></div>
                </BoostrapContainer>
        )};
        
        
    }



ReactDOM.render(<App />, document.getElementById('root'));
