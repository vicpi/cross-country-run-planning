import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    it('should render without errors', () => {
        shallow(<Header />)
    })
    
    it('should contain div with class "header"', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('div.header').length).toEqual(1)
        expect(wrapper.find('div.header').text()).toEqual('Route Builder')
    })
});