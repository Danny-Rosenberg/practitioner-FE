import React, {Component} from 'react';
import HomeImage from '../home_image.jpg';
import IframeMap from './IframeMap';

class Home extends Component {

	render(){
		return(
			<div className='bigDiv'>
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
							<p>hello world:{process.env.REACT_MAP_EMBED_API_KEY}</p>
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
