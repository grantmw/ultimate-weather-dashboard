import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/five_chart';
import GoogleMap from '../components/g_map.js';

class FiveDayCharts extends Component {
	renderFiveDay(cityData) {
		console.log(cityData)
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp*(9/5))-459.67);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lat = cityData.city.coord.lat;
		const lon = cityData.city.coord.lon;


		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={temps} color='red' units='&deg;F' />
				</td>
				<td>
					<Chart data={pressures} color='yellow' units='hPa' />
				</td>
				<td>
					<Chart data={humidities} color='blue' units='%' />
				</td>

			</tr>
		);
	}

	render(){
		{console.log(this.props.fiveDayData)}
		return(
			<div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {fiveDayData: state.fiveDay}
}

export default connect(mapStateToProps)(FiveDayCharts);