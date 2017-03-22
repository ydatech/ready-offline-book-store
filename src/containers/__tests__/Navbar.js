import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Navbar } from '../Navbar';
//import theme from '../styles/theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

describe('<Navbar/>', () => {
    //const muiTheme = getMuiTheme();
    const shallowWithContext = (node) => shallow(node, { context: { muiTheme: getMuiTheme() } });
    it('renders main title', () => {
        const wrapper = shallowWithContext(<Navbar />);
        const title = "Book Store"

        expect(wrapper.find('div').hasClass('NavbarContainer')).toEqual(true);

        const AppBarProps = wrapper.find('AppBar').props();
        expect(AppBarProps.title.props.children).toEqual(title);
    });

})
