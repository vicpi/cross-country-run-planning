import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

jest.mock('react-redux', () => {
    const waypoints = require('../../fixtures/waypoints').waypoints;
    return {
        useSelector: jest.fn(() => {
            return waypoints
        })
    };
});

describe('Footer', () => {
    it('should render without errors', () => {
        shallow(<Footer />)
    });
    
    it('should contain div with class "footer"', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('div.footer').length).toEqual(1)
    });

    it('should contain div with class "footer"', () => {
        const wrapper = shallow(<Footer />);
        const button = wrapper.find('Button');
        expect(button.length).toEqual(1);
    });
});