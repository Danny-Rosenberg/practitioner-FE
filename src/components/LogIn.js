import React, {Component} from 'react';
import axios from 'axios';

class LogIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: 'peach@aol.com',
			password: 'peach',
			postStatus: 'unstarted',
			instructionText: "Sign in to your admin account"
		}

		this.handleChange    = this.handleChange.bind(this);
    this.handleSubmit 	 = this.handleSubmit.bind(this);
    this.loginPost       = this.loginPost.bind(this);
		this.handleSuccess   = this.handleSuccess.bind(this);
		this.handleFailure   = this.handleFailure.bind(this);
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


	//redirect to the Admin's homepage when it exists
	handleSuccess() {
		this.props.history.push('/');
	}


	//will this rerender (which is what I want)?
	handleFailure() {
	  this.setState({
			instructionText: 'Log in failed, please try again.'
		});
	}


	loginPost(event) {
    axios.post('http://localhost:8000/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      console.log('success: ' + response.data);
      this.setState({
        postStatus: 'successful'
      })
			this.handleSuccess();
    })
    .catch((response) => {
			this.setState({
				postStatus: 'failed'
			})
			this.handleFailure();
      console.log('failure: ' + response);
    })
  }


	render() {
		return(
			<div className='login'>
				<h5 className='center'>Practicioner Log In</h5>
				<div className='card-panel col s6'>
					<div className='container'>
						<div className='card-panel col s6'>
              <p>{this.state.instructionText}</p>
							<form onSubmit={this.handleSubmit}>
                <div className='input field col s6'>
                  <label>
                    Enter your email:
                    <input
                      placeholder='Your First Name'
                      name='email'
                      type='text'
										  id='email'
                      value={this.state.email}
                      onChange={this.handleChange}
										  />
                  </label>
								</div>
								<div className='input field col s6'>
                  <label>
                    Enter your email:
                    <input
                      placeholder='Your Password'
                      name='password'
                      type='text'
										  value={this.state.password}
                      onChange={this.handleChange}
										  />
                  </label>
								</div>
							</form>
						<br></br>
            <div>
              <button className="btn waves-effect waves-light indigo-lighten-2" type="submit" onClick={this.loginPost}>sign in</button>
            </div>
						</div>
					</div>
				</div>
			</div>
		)}
}

export default LogIn;
