import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/five_chart';
import GoogleMap from '../components/g_map.js';

class FiveDayCharts extends Component {
	

	renderFiveDay() {
		const cityData = this.props.fiveDayData
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp*(9/5))-459.67);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lat = cityData.city.coord.lat;
		const lon = cityData.city.coord.lon;


		return (
			<div className="col-md-4">
				<ul className="list-group" key={name}> 5 day forecast
			
					<li className="list-group-item">
						<GoogleMap lon={lon} lat={lat} />
					</li>
					<li className="list-group-item"> Temperature
						<Chart data={temps} color='red' units='&deg;F' />
					</li>
					<li className="list-group-item"> Pressure
						<Chart data={pressures} color='yellow' units='hPa' />
					</li>
					<li className="list-group-item"> Humidity
						<Chart data={humidities} color='blue' units='%' />
					</li>

				</ul>
			</div>
		);
	}

	render(){
		if (!this.props.fiveDayData) {
			return (
				<div>
				</div>
			);
		}
		return(
			<div>
				{this.renderFiveDay()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {fiveDayData: state.fiveDay}
}

export default connect(mapStateToProps)(FiveDayCharts);

// constructor(props) {
// 		super(props);
// 		this.renderFiveDay = this.renderFiveDay.bind(this);
// 	}