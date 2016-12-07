import React, { Component } from 'react';
import SearchForm from '../containers/search_form';
import FiveDayCharts from '../containers/five_day';
import Current from '../containers/current';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class App extends Component {
  render() {
    const transitionOptions = {
        transitionName: "fade",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500
    };

    return (
    	<div className="application-container">
            <ReactCSSTransitionGroup {...transitionOptions}> 
                <div className="row">
                    <SearchForm className="col-lg-12" />
                </div>
                <div className="row">
                    <Current />                    
                </div>
                <div className="row">
                    <FiveDayCharts />
                </div>
            </ReactCSSTransitionGroup>
    	</div>
    );
  }
}
