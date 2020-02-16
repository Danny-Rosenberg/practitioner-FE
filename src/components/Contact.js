import React, {Component} from 'react';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: 'Your name here',
			email: 'example@gmail.com',
			phone: '123-456-7890',
			age: 0 
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
			[name]: value
		});
	}


	handleSubmit(event) {
		console.log('event submitted value: ' + this.state.values)
		event.preventDefault();
	}


	render(){
		return(
			<div className='aboutText'>
				<h4 className='indigo lighten-2'>Get in Touch with Marilyn</h4>
				<br></br>
				<p>Want to start the conversation? Fill in your contact information below.</p>
				<form onSubmit={this.handleSubmit}>
					<label>
						Enter your full name:
						<input
							name='fullName'
							type='text'
							value={this.state.fullName}
							onChange={this.handleChange} />
					</label>
					<label>
						Enter your email address:
						<input
							name='email'
							type='text'
							value={this.state.email}
							onChange={this.handleChange} />
					</label>
					<label>
						Enter your phone number:
						<input
							name='phone'
							type='text'
							value={this.state.phone}
							onChange={this.handleChange} />
					</label>
					<label>
						Enter your age: 
						<input
							name='age'
							type='number'
							value={this.state.age}
							onChange={this.handleChange} />
					</label>
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}
}


export default Contact;
