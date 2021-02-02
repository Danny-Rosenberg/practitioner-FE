import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import HomeImage from '../home_image.jpg';
import IframeMap from './IframeMap';

class Home extends Component {

	render(){
		return(
			<div className='bigDiv'>
				<div className='practitionerDiv'>
					<h2>The Home for Therapeutic Professionals</h2>
					<div className='practitionerJoin'>
						<p>Interested in joining the platform?</p>
						<NavLink to ='/register' >Register here</NavLink>
					</div>
				</div>
				<div className='introText'>
					<br></br>
					<div className='row'>
						<div className='col s6'>
							<div><img className="responsive-img" alt='Home for Practitioners' src={HomeImage}/></div>
						</div>
						<div className='col s6'>
							<p>Build your profile and gain new clients.</p>
						</div>
					</div>
				</div>
				<div className='location'>
					<div className='row'>
						<div className='col s6'>
							<p>Help prospective clients find your practice.</p>
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
