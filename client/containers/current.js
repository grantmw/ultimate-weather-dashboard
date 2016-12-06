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
			
			// if (this.props.today.rain == 'undefined') {
			// 	const rain = 0
			// } else {
			// 	const rain = this.props.today.rain["3h"]
			// }

			// const snow = this.props.today.snow.["3h"]
			// const rain = this.props.today.snow.["3h"]

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
							<div className="current-high detail-cell"> H: {high_temp} </div>
							<div className="current-description detail-cell">
									<img src={"http://openweathermap.org/img/w/" + icon + ".png"} alt="weather-icon" /> 
									heavy shower rain and drizzle
							</div>
							<div className="current-snow detail-cell">
								<img className="static-icon" src="../../styling/images/raindrop.png" alt="rain-icon" />
								<span className="units"> (last 3hours))</span>
							</div>
						</div>
						<div className="detail-low-row">
							<div className="current-low detail-cell"> L: {low_temp} </div>
							<div className="current-wind detail-cell">
								<img className="static-icon" src="../../styling/images/windblue.png" alt="wind-icon" />
								{wind}<span className="units"> mph</span>
							</div>
							<div className="current-snow detail-cell">
								<img className="static-icon" src="../../styling/images/snowflakeblue.png" alt="snow-icon" />
								<span className="units"> (last 3hours))</span>
							</div>
						</div>
					</div>
				</div>
			);
		
	}


	render(){
		if (this.props.hasOwnProperty("today.snow")) {
			console.log("yes")
		} else {
			console.log("no")
		}
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


