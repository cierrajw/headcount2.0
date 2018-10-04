import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () =>  {

  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  // it('should render an h1, controls, and trivialist component', () => {
  //   expect(wrapper.find('h1').length).toEqual(1);
  //   expect(wrapper.find('Controls').length).toEqual(1);
  //   expect(wrapper.find('TriviaList').length).toEqual(1);
  // })

});
