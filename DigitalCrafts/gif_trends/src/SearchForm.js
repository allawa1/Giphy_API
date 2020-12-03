import React from 'react';
import './SearchForm'


class SearchForm extends React.Component {

    state = {
        search: "",
        rating: "",
        limit: ""
    }

    onSubmit = (e) => {
        console.log("Form has been Submitted")
        e.preventDefault();
        this.props.onSubmit(this.state.search, this.state.rating, this.state.limit)
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="search">Search</label>
                <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
                <label htmlFor="rating">Ratings
                <select name="rating" value={this.state.rating} onChange={this.handleChange}>
                    <option name="rating" value="g">RatedG</option>
                    <option name="rating" value="pg">PG</option>
                    <option name="rating" value="pg-13">PG-13</option>
                    <option name="rating" value="r">Rated-R</option>
                    <option name="rating" value="all">All</option>
                </select></label>
                <label htmlFor="limit" value={this.state.limit} onChange={this.handleChange}>Search Limit : </label>
                <label htmlFor="5 ">5 </label>
                    <input type="radio" name="limit" value="5" onChange={this.handleChange}/> 
                <label htmlFor="20">20 </label>
                    <input type="radio" name="limit" value="20" onChange={this.handleChange} /> 
                <label htmlFor="50">50 </label>
                    <input type="radio" name="limit" value="50" onChange={this.handleChange} /> 
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SearchForm;