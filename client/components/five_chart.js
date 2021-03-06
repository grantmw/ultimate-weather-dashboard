import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(numbers) {
	return _.round(_.sum(numbers)/numbers.length);
}
export default (props) => {

	return(
		<div className="sl-chart">
			<div className="five-day-heading">
				{props.title}: {average(props.data)} {props.units}
			</div>
			<Sparklines height={80} width={160} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type='avg' />
			</Sparklines>
		</div>
	);
}

