import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from '../../components/HelpPage';

test('should render help page', () => {
    const wrapper = shallow(<HelpPage />)
    expect(wrapper).toMatchSnapshot()
})