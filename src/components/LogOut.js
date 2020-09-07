import React, {Component} from 'react';
import axios from 'axios';

class LogOut extends Component {
	constructor(props){
    super(props);
		this.state = {
			postStatus: 'idle',
			instructionText: 'Are you sure you want to log out?'
		}

		this.handleSuccess   = this.handleSuccess.bind(this);
		this.handleFailure   = this.handleFailure.bind(this);
		this.goBack					 = this.goBack.bind(this);
		this.logOut					 = this.logOut.bind(this);
	}


	//redirect to the Admin's homepage when it exists
	async handleSuccess() {
	  this.setState({instructionText: 'log out successful'});
		if(this.state.loggedOut) {
			await new Promise(r => setTimeout(r, 2000));
			this.props.history.push('/');
		}
	}


	//will this rerender (which is what I want)?
	handleFailure() {
	  this.setState({
			instructionText: 'Log out failed, please try again.'
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
						<div className='center-align'>
							<button className="btn waves-effect waves-light indigo-lighten-2" type="submit" onClick={this.logOut}>log out</button>
							<button className="btn waves-effect waves-light indigo-lighten-2" type="submit" onClick={this.goBack}>nevermind</button>
						</div>
						</div>
					</div>
				</div>
			</div>
		)}
}

export default LogOut;
