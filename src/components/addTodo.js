import React, {Component} from 'react';


class AddTodo extends Component{
	state = {
		content : ''
	}


	handleSubmit = (e) =>{
		e.preventDefault() //don't rerender the page
		this.props.addTodo(this.state)
		this.setState({
			content: ''
		});
	}

	handleChange = (e) =>{
		this.setState({
			content: e.target.value
		});

	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>Enter another todo: </label>
				<input type="text" onChange={this.handleChange} value={this.state.content}></input>
			</form>
		)
	};
}

export default AddTodo
