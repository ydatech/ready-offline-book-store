import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Home } from '../Home';

import getMuiTheme from 'material-ui/styles/getMuiTheme'

describe('<Home/>', () => {

    const shallowWithContext = (node) => shallow(node, { context: { muiTheme: getMuiTheme() } });
    it('renders main title', () => {
        const props = {
            book: { items: [] }



        }
        const wrapper = shallowWithContext(<Home {...props} />);
        const title = <h1>Available Books</h1>;
        expect(wrapper.contains(title)).toEqual(true);
    });

})
