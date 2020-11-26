import React from 'react';
import Header from '../../components/Header'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
// react-test-renderer

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    // const renderer = new ShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput())
})