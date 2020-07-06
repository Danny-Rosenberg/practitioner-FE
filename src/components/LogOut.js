import React, {Component} from 'react';
import axios from 'axios';

class LogIn extends Component {

    this.handleSubmit 	 = this.handleSubmit.bind(this);
    this.loginPost       = this.loginPost.bind(this);
		this.handleSuccess   = this.handleSuccess.bind(this);
		this.handleFailure   = this.handleFailure.bind(this);
	}


	handleSubmit(event) {
    console.log('event submitted value: ' + this.state.values)
    event.preventDefault();
  }


	//redirect to the Admin's homepage when it exists
	handleSuccess() {
	  this.setState(instructionText: 'log out successful');	
	}


	//will this rerender (which is what I want)?
	handleFailure() {
	  this.setState({
			instructionText: 'Log in failed, please try again.'
		});
	}


	//redirect to admin home when it exists
	goBack(event) {
		this.props.history.push('/');
	}


	logOut(event) {
    axios.get('http://localhost:8000/logout')
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
			<div className='logout'>
				<h5 className='center'>Practicioner Log Out</h5>
				<div className='card-panel col s6'>
					<div className='container'>
						<div className='card-panel col s6'>
              <p>{this.state.instructionText}</p>
							if(this.state.loggedOut) {
								await new Promise(r => setTimeout(r, 2000));
								this.props.history.push('/');
							}
            <div>
              <button className="btn waves-effect waves-light indigo-lighten-2" type="submit" onClick={this.logOut}>log out</button>
            </div>
						<div>
              <button className="btn waves-effect waves-light indigo-lighten-2" type="submit" onClick={this.goBack}>nevermind</button>
            </div>
						</div>
					</div>
				</div>
			</div>
		)}
}

export default LogIn;
