import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';

describe('App', () =>  {

  const wrapper = shallow(<CardContainer />);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should render an h1, controls, and trivialist component', () => {
  //   expect(wrapper.find('h1').length).toEqual(1);
  //   expect(wrapper.find('Controls').length).toEqual(1);
  //   expect(wrapper.find('TriviaList').length).toEqual(1);
  // })

});
