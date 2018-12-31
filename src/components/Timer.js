import React, { Component } from 'react';


class Timer extends Component {

    state = {
        count: 0
    };

    increaseCount() {

        const { count } = this.state;

        return this.setState({
            count: count + 1
        })
    }

    componentDidMount() {


        setInterval( () => this.increaseCount(), 1000);
    }

    render() {

        const { count } = this.state;

        return (
            <div className="timer" style={{ border: '1px red solid'}}>
                { count }
            </div>
        )
    }
}

export default Timer;