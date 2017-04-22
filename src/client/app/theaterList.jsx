import React from 'react'
import {render} from 'react-dom'
import {Button, ButtonToolbar, FormControl } from 'react-bootstrap'
import MovieList from './movieList.jsx' 

export class TheaterItem extends React.Component{
    constructor(props){
      super(props); 
    }
    render(){
        return (
          <Button bsStyle="primary" bsSize="small" onClick={this.props.onClick} name={this.props.name} id={this.props.id}>{this.props.name}</Button>
        );
    }
};

export default class TheaterList extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      theaters: [],
      activeID: this.props.theaterData[0].id
    }
  }
  componentDidMount(){
    var theaters = this.props.theaterData.map(function(p){
      return { 
        name: p.name,
        id: p.id
      };
    });
    this.setState({ theaters: theaters });

  }
  handleClick(e){
    this.setState({
      activeID: e.target.id
    })
  }
  render() { 
    var self = this;
    var theaters = this.state.theaters.map(function(p, index){
      return <TheaterItem onClick={self.handleClick} key={index} name={p.name} id={p.id} />
    });
    return (
      <div>
        <FormControl type="text" value={this.state.value} placeholder="Search movies..." onChange={this.handleChange} />
        <ButtonToolbar>
          {theaters}
        </ButtonToolbar>
        <MovieList activeID={this.state.activeID} movies={this.props.movieData} theaters={this.props.theaterData} />
      </div>
    )
  }
}
