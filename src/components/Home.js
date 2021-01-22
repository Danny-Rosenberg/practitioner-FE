import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import HomeImage from '../home_image.jpg';
import IframeMap from './IframeMap';

class Home extends Component {

	render(){
		return(
			<div className='bigDiv'>
				<div className='practitionerDiv'>
					<h2>Practitioner Sign-up:</h2>
					<div className='practitionerJoin'>
						<p>Interested in joining the platform?</p>
						<NavLink to ='/register' >Register here</NavLink>
					</div>
				</div>
				<div className='introText'>
					<br></br>
					<div className='row'>
						<div className='col s6'>
							<div><img className="responsive-img" alt='Marilyn Rosenberg, PsyD' src={HomeImage}/></div>
						</div>
						<div className='col s6'>
							<p>I am Marilyn Rosenberg PsyD. I will begin taking appointments soon.</p>
						</div>
					</div>
				</div>
				<div className='location'>
					<div className='row'>
						<div className='col s6'>
							<p>My therapy center is located at the border of Wellesley and Newton on Washington Ave.</p>
						</div>
						<div className='col s6'>
							<IframeMap />
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Home;
