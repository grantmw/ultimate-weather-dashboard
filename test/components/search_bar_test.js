import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../client/containers/search_form';

describe( 'SearchBar', () => {
	it('renders SearchBar', () => {
		const component = renderComponent(SearchBar)
		expect(component).to.have.class("input-group")
	});
});