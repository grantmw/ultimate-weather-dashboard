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
			const rise_date = new Date(this.props.today.sys.sunrise*1000);
			const set_date = new Date(this.props.today.sys.sunset*1000);
			const rise_hour = rise_date.getHours();			
			const set_hour = set_date.getHours();	
			const rise_minutes = "0" + rise_date.getMinutes();			
			const set_minutes = "0" + set_date.getMinutes();
			const sunrise_time = rise_hour + ':' + rise_minutes.substr(-2)			
			const sunset_time = set_hour + ':' + set_minutes.substr(-2)			

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
							<div className="current-high detail-cell"> 
								<div className="range-letter">H </div>
								{high_temp}<sup>&deg;F</sup>
							</div>
							<div className="current-description detail-cell">
									<img src={"http://openweathermap.org/img/w/" + icon + ".png"} alt="weather-icon" /> 
									{description}
							</div>
							<div className="current-sunrise detail-cell">
								<img className="static-icon" src="../../styling/images/sunrise.png" alt="sunrise-icon" />
								{sunrise_time}<span className="units"></span>
							</div>
						</div>
						<div className="detail-low-row">
							<div className="current-low detail-cell"> 
								<div className="range-letter">L </div>
								{low_temp}<sup>&deg;F</sup>
							</div>
							<div className="current-wind detail-cell">
								<img className="static-icon" src="../../styling/images/windblue.png" alt="wind-icon" />
								{wind}<span className="units"> mph</span>
							</div>
							<div className="current-sunset detail-cell">
								<img className="static-icon" src="../../styling/images/sunset.png" alt="sunset-icon" />
								{sunset_time}<span className="units"></span>
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


