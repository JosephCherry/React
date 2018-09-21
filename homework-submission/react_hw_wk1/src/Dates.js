import React, { Component } from 'react';

class Dates extends Component {

    render(){
        const { date } = this.props
        return (
            <div className='todo-date'>
                Due - {date}
            </div>
        );
    }

}

export default Dates;