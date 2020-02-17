import React, {Component} from 'react';
import Iframe from 'react-iframe';


class IframeMap extends Component {

	render(){
		return(
			<div className='iframeDiv'>
				<Iframe url="https://www.google.com/maps/embed/v1/place?key=${proces.env.REACT_MAP_EMBED_API_KEY}&q=place_id:ChIJOUIcFcGD44kR6MUg-i4c86I"
					width="100%"
					height="500px"
					id="myId"
					className="OfficeMap"
					display="initial"
					position="relative"/>
			</div>

		);


	}
	
}


export default IframeMap;

