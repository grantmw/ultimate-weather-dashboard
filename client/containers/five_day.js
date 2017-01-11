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
			<div className="forecast-charts">
				<div className="five-day-section">
					Five Day Forecast Averages
				</div>
				<hr />
				<div className="col-md-4 forecast-chart five-day-temp">
					<Chart data={temps} color='red' units='&deg;F' title='temperature' />
				</div>
				<div className="col-md-4 forecast-chart five-day-pressure">
					<Chart data={pressures} color='yellow' units='hPa' title='pressure' />
				</div>
				<div className="col-md-4 forecast-chart five-day-humidity">
					<Chart data={humidities} color='blue' units='%' title='humidity' />
				</div>
			</div>
		);
	}

	render(){
		if (!this.props.fiveDayData) {
			return (
				<div className="no-five-day">
				</div>
			);
		}
		return(
			<div className="col-md-12 five-day-container">
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