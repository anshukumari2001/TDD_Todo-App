import React from "react";
import {fireEvent, render } from '@testing-library/react'
import Todo from './Todo'
import {mount} from 'enzyme'

describe("Basic rendering of Todo", () =>{
    it("Should render Edit button", ()=>{
        const {getByTestId} = render(<Todo />)
        expect(getByTestId("edit-btn")).toHaveTextContent("Edit")
    })

    it("Should render Delete button", ()=>{
        const {getByTestId} = render(<Todo />)
        expect(getByTestId("delete-btn")).not.toHaveAttribute("disabled")
    })
    it("Clicking on Edit button should render input field", () =>{
        const { getByTestId } = render(<Todo />)
        fireEvent.click(getByTestId("edit-btn"))
        expect(getByTestId("edit-label")).toHaveTextContent("New name for")
    })
    it("Clicking on Edit button should render Cancel and Save button", () =>{
        const { getByTestId, getByRole } = render(<Todo />)
        fireEvent.click(getByTestId("edit-btn"))
        expect(getByRole("button", { name: /Cancel/i })).toBeInTheDocument();
        expect(getByRole("button", { name: /Save/i })).toBeInTheDocument();
    })

})

describe("Testing functionality of Todo-App", ()=>{

 })