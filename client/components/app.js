import React, { Component } from 'react';
import SearchForm from '../containers/search_form'
import FiveDayCharts from '../containers/five_day.js'

export default class App extends Component {
  render() {
    return (
    	<div>
    		<SearchForm />
    		<FiveDayCharts />
    	</div>
    );
  }
}
