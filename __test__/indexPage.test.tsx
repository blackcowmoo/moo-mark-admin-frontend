import React from 'react';
import IndexPage from '../pages/index';
import { mount } from 'enzyme';

describe('Page Index', () => {
  it('render index', () => {
    const wrapper = mount(<IndexPage />);
    expect(wrapper.find('div').text()).toBe('MooMarkAdmin 👋');
  });
});
