import React, {Component} from 'react';
import HomeImage from '../home_image.jpg';

class Home extends Component {

	render(){
		return(
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
		);
	}
}


export default Home;
