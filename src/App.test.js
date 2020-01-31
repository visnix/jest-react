import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.app-container').length).toBe(1)
  expect(wrapper.find(".app-container").prop('title')).toBe('hello xy')
});
