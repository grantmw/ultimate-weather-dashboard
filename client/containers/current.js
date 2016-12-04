import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Current extends Component {

	renderCurrent() {
			const icon = this.props.today.weather[0].icon
			const temp = this.props.today.main.temp
			const low_temp = this.props.today.main.temp_min
			const high_temp = this.props.today.main.temp_max
			const description = this.props.today.weather[0].description
			const wind = this.props.today.wind.speed

			return(
				<div>
					{icon} <br />
					{temp} <br />
					{low_temp} <br />
					{high_temp} <br />
					{description} <br />
					{wind} <br />
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
			<div className='col-md-8'>
				{this.renderCurrent()}
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {today: state.current}
}

export default connect(mapStateToProps)(Current);
