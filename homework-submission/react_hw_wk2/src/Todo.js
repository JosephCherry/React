import React, { Component } from 'react';
class Todo extends Component {
constructor(props){
    super(props);

    this.state = {
        todos:[
        {
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        }
      ]}

      this.markAsDone = this.markAsDone.bind(this);
    
    }

      markAsDone(id){
          let updatedTodos = this.state.todos.map(todo => {
              if (todo.id === id){
                  todo.done = !todo.done
              }
                
                return true;
          });

        
        


          this.setState(() =>{
            return updatedTodos
          });
        }
    
    
  


    render(){

        return (
            <div className="Todos">
                <ol>

                    {this.state.todos.map((todo) => <li key={todo.id}>
                    {todo.done === true ? <strike>{todo.description}</strike>: todo.description}
                    <input type="checkbox" key={todo.id} onChange={this.markAsDone.bind(this, todo.id)}/></li>)}
                  

                </ol>
            </div>
        );
    }
}


export default Todo;