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
					<div className="col-lg-3" key={name}>
						<div className="g-map">
							<GoogleMap lon={lon} lat={lat}  />
						</div>
					</div> 
					<div className="col-lg-4 current-info-main">
						<div className="city-name">
							{name}
						</div>
						<hr />
						<div className="current-temperature"> 
							{temp} &deg;F 
						</div>
					</div>
					<div className="col-lg-5 current-details">
						<div className="detail-high-row">
							<div className="current-high"> H: {high_temp} </div>
							<div className="current-description">
									<img src={"http://openweathermap.org/img/w/" + icon + ".png"} alt="weather-icon" /> 
									heavy shower rain and drizzle
							</div>
						</div>
						<div className="detail-low-row">
							<div className="current-low"> L: {low_temp} </div>
							<div className="current-wind">
								<img className="static-icon" src="../../styling/images/windblue.png" alt="wind-icon" />
								{wind}<span className="units"> mph</span>
							</div>
							<div className="current-wind">
								<img className="static-icon" src="../../styling/images/sun-glasses.png" alt="glasses-icon" />
								{wind}<span className="units"> mph</span>
							</div>
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
			<div className='col-lg-12 current-container'>
				{this.renderCurrent()}
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {today: state.current}
}

export default connect(mapStateToProps)(Current);


