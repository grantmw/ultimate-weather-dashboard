import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(numbers) {
	return _.round(_.sum(numbers)/numbers.length);
}
export default (props) => {

	return(
		<div>
			<Sparklines height={100} width={140} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type='avg' />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}

