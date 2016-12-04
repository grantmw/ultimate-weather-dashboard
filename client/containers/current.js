import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Current extends Component {
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
				{this.props.today.weather[0].icon}
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {today: state.current}
}

export default connect(mapStateToProps)(Current);
