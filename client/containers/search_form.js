import React, { Component } from 'React';

export default class SearchForm extends Component {

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
		console.log(this.state.term)
	}


	render() {
		return(
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input 
					placeholder="Search for any city in the US"
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