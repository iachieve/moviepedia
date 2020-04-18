import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieCard from "./MovieCard";
import {CardGroup, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        console.log(this.props);
        let content = '';
        content = (movies.Search && movies.Search.length > 0) ?
            movies.Search.map((movie, idx)=> {
                return <MovieCard key={movie.imdbID} movie={movie}/>
            }):null;
        return (
              <div>
                  <Row className='movies-grid'>
                          {content}
                  </Row>
              </div>
        );
    }
}

const mapStateToProps = state =>({
     movies: state.movies.movies
});
export default  connect(mapStateToProps, {})(MoviesContainer);