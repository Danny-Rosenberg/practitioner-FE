import React, {Component} from 'react';
import Iframe from 'react-iframe';


	const mapKey = process.env.REACT_APP_MAP_EMBED_API_KEY
	const embedURL = "https://www.google.com/maps/embed/v1/place?";
	const key =  "key= " + mapKey;
	const place = "&q=place_id:ChIJOUIcFcGD44kR6MUg-i4c86I";
	const finalURL = embedURL + key + place;


class IframeMap extends Component {

	render(){
		return(
			<div className='iframeDiv'>
				<Iframe url={`${finalURL}`}
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

