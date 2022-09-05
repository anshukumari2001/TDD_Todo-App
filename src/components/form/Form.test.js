import { shallow} from "enzyme";
import {fireEvent, render} from '@testing-library/react'
import React, {Component} from "react";
import Form from './Form'
import {mount} from 'enzyme'

describe("Basic rendering of form", () =>{
    it("Rendering of form", ()=>{
        const wrapper = shallow(<Form />)
        const wrapperValue= wrapper.find(Text)
        expect(wrapperValue).toBeDefined();

    })
    it("Should render label", () =>{
        const {getByTestId} = render(<Form />)
        expect(getByTestId("label-id")).toHaveTextContent("What needs to be done?")
    })

    it("Should render a add button", () =>{
        const {getByRole} = render(<Form />)
        //expect(getByTestId("add-id")).not.toHaveAttribute("disabled")
        expect(getByRole("button")).toHaveTextContent("Add")
    })

})

describe("Testing the functionality of form ", ()=>{
    it("should render the input field", ()=>{
        const { getByTestId } = render(<Form />);
        const inputField = getByTestId("input");
        fireEvent.change(inputField, {target: {value: 'Any Task'}});
        expect(inputField.value).toBe('Any Task');

    })
})