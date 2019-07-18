import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import initStore from '@store';

import HomePage from '../home/index';

describe('HomePage', () => {
  it('should render without throwing an error', () => {
    const wrap = shallow(<HomePage />);
    expect(wrap).toBeTruthy();
  });

  it('should render without throwing an error', () => {
    const wrap = mount(
      <Provider store={initStore()}>
        <HomePage />
      </Provider>
    );

    expect(wrap.find('.title')).toHaveLength(2);
  });
});
