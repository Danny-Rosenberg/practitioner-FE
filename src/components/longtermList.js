import React, {Component} from 'react'; 
import Todos from '../functions/todos';
import AddTodo from './addTodo';

class LongtermList extends Component {
	state = {
    todos: [
			{id: 1, content: 'learn React'},
		]
  }

	addTodo = (todo) => {
		todo.id = Math.random()
		let todos = [...this.state.todos, todo]
		this.setState({
			todos
		})
	}

	deleteTodo = (id) => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos
		})
	}

	render(){
		return( 
			<div className="longtermList container">
			<h3 className="center blue-text">My Long-term Todos</h3>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />	
				<AddTodo addTodo={this.addTodo} />	
			</div>
		);
	}
}

export default LongtermList
