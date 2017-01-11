import { renderComponent, expect } from '../test_helper';
import Current from '../../client/containers/current';

describe( 'FiveDay', () => {
	it('renders current weather data', () => {
		const component = renderComponent(Current);
		expect(component).to.have.class("no-current");
	});
});