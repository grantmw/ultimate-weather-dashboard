import React from 'react';
import {GoogleMapLoader, GoogleMap} from "react-google-maps";

export default (props) => {
	return(
		<GoogleMapLoader
			containerElement={
			  <div style={{height: "300px", width: "300px"}} />
			}
			googleMapElement={
			  <GoogleMap
			    defaultZoom={12}
			    defaultCenter={{ lat: props.lat, lng: props.lon }}//weather api has lng as lon
			   />
			}
		/>
	);
}