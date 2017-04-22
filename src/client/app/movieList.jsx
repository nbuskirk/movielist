import React from 'react'
import {render} from 'react-dom'

export class MovieItem extends React.Component{
    render(){
    	return (
        	<li className="clearfix ">
            	<div className="col-md-3">
            		<img src={this.props.src} width="150" title={this.props.title} />
            	</div>
            	<div className="col-md-9">
            		<h4>{this.props.title} <small>({this.props.rating})</small></h4>
            	</div>
            </li>
        )
    }
}

export default class MovieList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			theaters: []
		}
	}
	componentDidMount(){
		var theaters = this.props.theaters.map(function(theater){
	    	return { 
	        	id: theater.id, 
	        	name: theater.name, 
	        	showtimes: theater.showtimes, 
	    	};
 	    });
		this.setState({ theaters: theaters });
	}
	render() {
		var self = this;
		var shows = this.props.theaters.map(function(theater){
			if(self.props.activeID==theater.id){
				var showtimes = Object.keys(theater.showtimes);
				var shows = showtimes.map(function(showtime){
					var movies = self.props.movies.map(function(movie){
						if(movie.id==showtime){
							return (
								<div className="clearfix row movie">
									<div className="col-md-3">
									<img width="100%" src={movie.poster} />
									</div>
									<div className="col-md-9">
									<h4>{movie.title} <small>({movie.rating})</small></h4>
									<p>{showtime.children}</p>
									</div>
								</div>)
						}
					})
					return movies;	
				})
			}
			return shows;
		})
		return (
			<div>
				{shows}
			</div>
		)	
	}
}
