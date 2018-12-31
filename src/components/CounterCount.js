import React from 'react';
import { connect } from 'react-redux';


const CounterCounter = ({ count }) => {

    return (
        <div className="counter-count">
            {count}
        </div>
    )
};

const mapStateToProps = state => ({
    count: state.root.counter
});

export default connect(mapStateToProps)(CounterCounter);