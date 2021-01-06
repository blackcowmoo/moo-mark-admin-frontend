import React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../pages/index';

describe('Page Index', () => {
  it('render index', () => {
    const wrapper = mount(<IndexPage />);
    expect(wrapper.find('div').text()).toBe('MooMarkAdmin 👋');
  });
});
