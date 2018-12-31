import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { counterClick } from '../actions';

const Button = ({increase}) => {


    return (
        <button onClick={increase}>Increase</button>
    )
};




const mapStateToProps  = (state) => ({
    test: 'cokolwiek'
});

const mapDispatchToProps = dispatch => {
    bindActionCreators({
        counterClick
    }, dispatch)
};


export default connect(mapStateToProps, {
    increase: counterClick
})(Button);