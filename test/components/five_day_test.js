import { renderComponent, expect } from '../test_helper';
import FiveDay from '../../client/containers/five_day';

describe( 'FiveDay', () => {
	it('renders FiveDay forcast', () => {
		const component = renderComponent(FiveDay);
		expect(component).to.have.class("no-five-day");
	});
});