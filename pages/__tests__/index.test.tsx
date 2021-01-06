import { mount } from 'enzyme';
import IndexPage from '../index';

describe('Page Index', () => {
  it('render index', () => {
    const wrapper = mount(<IndexPage />);
    expect(wrapper.find('h1').text()).toBe('MooMarkAdmin 👋');
  });
});
