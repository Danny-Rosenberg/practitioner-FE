import React, {Component} from 'react'; 
import Todos from '../functions/todos';
import AddTodo from './addTodo';

class TodaysList extends Component {
	state = {
    todos: [
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
			<div className="todaysList container">
			<h3 className="center green-text">My Todos for Today</h3>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />	
				<AddTodo addTodo={this.addTodo} />	
			</div>
		);
	}
}

export default TodaysList
