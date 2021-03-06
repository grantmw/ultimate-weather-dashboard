import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFiveDay } from '../actions/index'
import { getCurrent } from '../actions/index'

class SearchForm extends Component {

	constructor(props) {
		super(props);
		this.state = {term: ""};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.getFiveDay(this.state.term);
		this.props.getCurrent(this.state.term);
		this.setState({term: ''});
	}


	render() {
		return(
			<form className="input-group input-group-lg" onSubmit={this.onFormSubmit}>
				<input 
					placeholder="Get the weather for any US city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
					/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getFiveDay, getCurrent },dispatch)
}

export default connect(null, mapDispatchToProps)(SearchForm);

