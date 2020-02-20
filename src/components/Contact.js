import React, {Component} from 'react';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: '',
			email: '',
			phone: '',
			age: ''
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
			<div className='contact'>
				<h4 className='indigo lighten-2'>Get in Touch with Marilyn</h4>
					<div className='container'>
						<div className='card-panel col s6'>
							<p>Want to start the conversation? Fill in your contact information below.</p>
							<form onSubmit={this.handleSubmit}>
								<div className='input field col s6'>
									<label>
										Enter your full name:
										<input
											placeholder='Your Name'
											name='fullName'
											type='text'
											value={this.state.fullName}
											onChange={this.handleChange} />
									</label>
								</div>
								<div className='input field col s6'>
									<label>
										Enter your email address:
										<input
											name='email'
											type='text'
											value={this.state.email}
											onChange={this.handleChange} />
									</label>
								</div>
								<div className='input field col s6'>
									<label>
										Enter your phone number:
										<input
											name='phone'
											type='text'
											value={this.state.phone}
											onChange={this.handleChange} />
									</label>
								</div>
								<div className='input field col s6'>
									<label>
										Enter your age:
										<input
											name='age'
											type='number'
											value={this.state.age}
											onChange={this.handleChange} />
									</label>
								</div>
							</form>
					<br></br>
					<button className="btn waves-effect waves-light indigo-lighten-2" type="submit">Send</button>
					</div>
				</div>
			</div>
		);
	}
}


export default Contact;
