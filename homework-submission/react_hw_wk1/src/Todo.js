import React, { Component } from 'react';
import Dates from './Dates.js';
class Todo extends Component {

    state = {
        todos: [
            'Get out of bed',
            'Brush teeth',
            'Eat breakfast'],

        deadlines: [
            'Wed Sep 13 2017',
            'Thu Sep 14 2017',
            'Fri Sep 15 2017'
        ]

    }

    deleteTodo(index){
        console.log(index)
         var todos = [...this.state.todos];
         todos.splice(index, 1)
         this.setState({todos})
    }
  


    render(){
        return (
            <div className="Todos">
                <ol>
                    {this.state.todos.map((todo, index) => <li key={index}>{todo}
                        <button onClick={this.deleteTodo.bind(this, index)}> Done</button>
                        <Dates date= {this.state.deadlines[index]}/>
                    </li>)}

                </ol>
            </div>
        );
    }
}

export default Todo;