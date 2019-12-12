import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('should render without errors', () => {
        const fn = jest.fn()
        shallow(<Button onClick={fn}>Button Text</Button>)
    })
    
    it('should contain div with class "button"', () => {
        const fn = jest.fn()
        const wrapper = shallow(<Button onClick={fn}>Button Text</Button>)
        expect(wrapper.find('div.button').length).toEqual(1)
    })

    it('should invoke onClick handler when clicked', () => {
        const fn = jest.fn()
        const wrapper = mount(<Button onClick={fn}>Button Text</Button>)
        const div = wrapper.find('div')
        div.simulate('click')
        expect(fn.mock.calls.length).toEqual(1)
    })
});