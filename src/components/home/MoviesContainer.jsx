import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieCard from "./MovieCard";
import {CardGroup, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = '';
        content = movies.length > 0 ?
            movies.map((movie, idx)=> {
                return <MovieCard key={movie.imdbID} movie={movie}/>
            }):null;
        return (
            <div>
                <Row style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fill, 24%)', 'gridGap': '0.5rem'}}>
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