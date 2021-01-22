import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: 'A',
			lastName: 'Z',
			email: 'coolpractitioner@aol.com',
			phoneNumber: '1234567890',
			yearsExperience: '10',
			specialty: 'reading'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.practitionerPost  = this.practitionerPost.bind(this);
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


	practitionerPost(event) {
		axios.post('http://localhost:8000/practitioner', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			phoneNumber: this.state.phoneNumber,
			yearsExperience: this.state.yearsExperience,
			specialty: this.state.specialty
		})
		.then((response) => {
			console.log('success: ' + response.data);
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
			<div className='practitioner'>
				<h4 className='indigo lighten-2'>Apply to Build Your Page</h4>
					<div className='container'>
						<div className='card-panel col s6'>
							<p>Tell us about your professional experience</p>
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
											name='yearsExperience'
											type='number'
											value={this.state.yearsExperience}
											onChange={this.handleChange} />
									</label>
								</div>
								<div className='input field col s6'>
									<label>
										Specialty:
										<input
											name='specialty'
											type='text'
											value={this.state.specialty}
											onChange={this.handleChange} />
									</label>
								</div>
							</form>
					<br></br>
						<div>
							<button className="btn waves-effect waves-light indigo-lighten-2" type="submit" onClick={this.registerPost}>send</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Register;
