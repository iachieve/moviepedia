import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchMovie, setLoading} from "../../actions/searchActions";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {Spinner} from "react-bootstrap";

class Movie extends Component {

    componentDidMount() {
        this.props.setLoading();
        this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        const {movie, loading} = this.props;
        let content = loading ?   <Spinner animation="border" variant="info" /> :
            (
                <Card>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>
                            {movie.Plot}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Rated: {movie.Rated}</ListGroupItem>
                        <ListGroupItem>Released: {movie.Released}</ListGroupItem>
                        <ListGroupItem>Runtime: {movie.Runtime}</ListGroupItem>
                        <ListGroupItem>Genre: {movie.Genre}</ListGroupItem>
                        <ListGroupItem>Director: {movie.Director}</ListGroupItem>
                        <ListGroupItem>Writer: {movie.Writer}</ListGroupItem>
                        <ListGroupItem>Actors: {movie.Actors}</ListGroupItem>
                        <ListGroupItem>Language: {movie.Language}</ListGroupItem>
                        <ListGroupItem>Country: {movie.Country}</ListGroupItem>
                        <ListGroupItem>Awards: {movie.Awards}</ListGroupItem>
                        <ListGroupItem>imdbRating: {movie.imdbRating}</ListGroupItem>
                        <ListGroupItem>imdbVotes: {movie.imdbVotes}</ListGroupItem>
                        <ListGroupItem>Type: {movie.Type}</ListGroupItem>
                        <ListGroupItem>Website: {movie.Website}</ListGroupItem>
                        <ListGroupItem>Production: {movie.Production}</ListGroupItem>
                        <ListGroupItem>BoxOffice: {movie.BoxOffice}</ListGroupItem>
                        <ListGroupItem>DVD: {movie.DVD}</ListGroupItem>
                    </ListGroup>
                </Card>
            );
        return (
            <>
            {content}
            </>
        );
    }
}

// Movie.propTypes = {};
const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
});
export default connect(mapStateToProps, {fetchMovie, setLoading})(Movie);