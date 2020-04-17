import React, {Component} from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import Spinner from "../layout/spinner";
import  MoviesContainer from './MoviesContainer'
class Landing extends Component {
    render() {
        const {loading} = this.props;
        console.log('loading', loading);
        console.log('props', this.props);
        return (
            <>
            <SearchForm/>
            {loading ? <Spinner/> : <MoviesContainer/>}
            </>
        );
    }
}

const mapStateToProps = state =>({
    loading: state.movies.loading
});
export default connect(mapStateToProps, {})(Landing);