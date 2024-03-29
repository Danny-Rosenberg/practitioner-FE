import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: 'A',
			lastName: 'Z',
			email: 'a@aol.com',
			phoneNumber: '1234567890',
			age: '10',
			postSuccessful: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.contactPost  = this.contactPost.bind(this);
		this.handleFormError = this.handleFormError.bind(this);
	}


	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
			[name]: value
		});
	}


	handleFormError(error) {
	  this.setState({
			[error.param]: error.msg
		});
	}


	contactPost(event) {
		/*
		for (var pair of bodyFormData.entries()) {
			console.log(pair[0]+ ': ' + pair[1]); 
		}*/

		axios.post('http://localhost:8000/contact', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			phoneNumber: this.state.phoneNumber,
			age: this.state.age
		})
		.then((response) => {
			console.log('success: ' + response.data);
			this.setState({
				postSuccessful: true
			})
		})
		.catch((response) => {
			console.log('failure: ' + response);
			response.response.data.errors.forEach(this.handleFormError);
		})
	}


	handleSubmit(event) {
		console.log('event submitted value: ' + this.state.values)
		event.preventDefault();
	}


	render(){
		return(
			<div className='contact'>
				<h4 className='indigo lighten-2' style={{'text-align':'center'}}>Get in Touch with a Therapist Today</h4>
					<div className='container'>
						<div className='card-panel col s6'>
							<p>Want to start the conversation? Fill in your contact information below.</p>
							<form onSubmit={this.handleSubmit}>
								<div className='input field col s6'>
									<label>
										Enter your first name:
										<input
											placeholder='Your First Name'
											name='firstName'
											type='text'
											value={this.state.firstName}
											onChange={this.handleChange} />
									</label>
								</div>
								<div className='input field col s6'>
                  <label>
                    Enter your last name:
                    <input
                      placeholder='Your Last Name'
                      name='lastName'
                      type='text'
                      value={this.state.lastName}
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
											name='phoneNumber'
											type='text'
											value={this.state.phoneNumber}
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
						<div>
							<button className="btn waves-effect waves-light indigo-lighten-2" type="submit" onClick={this.contactPost}>send</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Contact;
