import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import Navbar from '../Navbar'

describe('<App/>', () => {
  it('contains navbar', () => {

    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Navbar />)).toEqual(true);


  });

})
