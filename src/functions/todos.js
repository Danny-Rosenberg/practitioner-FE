import React from 'react';

const Todos = ({todos, deleteTodo}) => {
		
	const todosList = todos.length ?
		(todos.map(todo => {
			return (
				<div className="collection-item">
					<span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span> 	  
				</div>
			)}	

			)
		) : (  
				<p className="center">All finished with Todos for today!</p> 
			)

	return (
		<div className="todos collection">
			{todosList}
		</div>
	)

}

export default Todos;
