import React, {Component} from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import  MoviesContainer from './MoviesContainer';

class Landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <>
            <SearchForm/>
            {loading ? 'loading...' : <MoviesContainer/>}
            </>
        );
    }
}

const mapStateToProps = state =>({
    loading: state.movies.loading
});
export default connect(mapStateToProps, {})(Landing);