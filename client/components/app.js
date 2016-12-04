import React, { Component } from 'react';
import SearchForm from '../containers/search_form';
import FiveDayCharts from '../containers/five_day';
import Current from '../containers/current';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<SearchForm />
    		<Current />
    	</div>
    );
  }
}
