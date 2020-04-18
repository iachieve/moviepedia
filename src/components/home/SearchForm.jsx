import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions';
import {connect} from 'react-redux';

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    onChange = e =>{
        this.props.searchMovie(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.setLoading();
        this.props.fetchMovies(this.props.text);

    };

    render() {
        return (

            <Jumbotron>
                <h1>Search Movies, TV series ...!</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formGridAddress2">
                        <Form.Control placeholder="type movie name, tv show ..."
                            onChange={this.onChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Jumbotron>


        );
    }
}

// SearchForm.propTypes = {};

const mapStateToProps = state => ({
    text: state.movies.text
});
export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm);