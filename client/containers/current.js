import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMap from '../components/g_map.js';


class Current extends Component {

	toF(kelvin) {
		return Math.round((kelvin*(9/5))-459.67);
	}

	renderCurrent() {
			const name = this.props.today.name;
			const lat = this.props.today.coord.lat;
			const lon = this.props.today.coord.lon;
			const icon = this.props.today.weather[0].icon;
			const temp = this.toF(this.props.today.main.temp)
			const low_temp = this.toF(this.props.today.main.temp_min)
			const high_temp = this.toF(this.props.today.main.temp_max)
			const description = this.props.today.weather[0].description
			const wind = this.props.today.wind.speed

			return(
				<div>
					<div className="col-md-7" key={name}>
						<GoogleMap lon={lon} lat={lat}  />
						<img src="../../styling/images/wind.png" alt="wind-icon" />
						{wind} mph
					</div> 
					<div className="col-md-5">
						<div className="city-name">
							{name}
						</div>
						<hr />
						<div className="current-temperature"> 
							{temp} &deg;F 
						</div>
						<div className="weather-icon">
							L: {low_temp} <br />
							<img src={"http://openweathermap.org/img/w/" + icon + ".png"} alt="weather-icon" /> 
							{description} <br />
							H: {high_temp} <br />
						</div>
					</div>
				</div>
			);
		
	}


	render(){

		console.log(this.props.today);
		if (!this.props.today) {
			return (
				<div>
				</div>
			);
		} 
		return(
			<div className='col-md-6 current-container'>
				{this.renderCurrent()}
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {today: state.current}
}

export default connect(mapStateToProps)(Current);
