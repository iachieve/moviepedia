import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {Link} from "react-router-dom";

class MovieCard extends Component {
    render() {

        let {movie} = this.props;
        return (
            <Card>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                    <Card.Title>{movie.Title}({movie.Year})</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link to={`/movie/${movie.imdbID}`}>see more</Link>
                </Card.Body>
            </Card>
        );
    }
}

export default MovieCard;