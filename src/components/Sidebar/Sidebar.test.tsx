import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('should render without errors', () => {
        shallow(<Sidebar />);
    });
    
    it('should contain div with class "sidebar-container"', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.find('div.sidebar-container').length).toEqual(1);
    });

    it('should contain Header, List, and Footer', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.find('Header').length).toEqual(1);
        expect(wrapper.find('List').length).toEqual(1);
        expect(wrapper.find('Footer').length).toEqual(1);
    });
});