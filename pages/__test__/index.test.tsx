import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../index';

describe('Page Index', () => {
  it('render index', () => {
    const wrapper = shallow(<IndexPage />);
    expect(wrapper.find('h1').text()).toBe('MooMarkAdmin 👋');
  });
});
