import React from 'react'
import {render} from '@testing-library/react'
import FilterButton from './FilterButton'

describe("Should render filter buttons", ()=>{
    it("Should render All filter button", ()=>{
        const setFilter =jest.fn()
        const {getByTestId} = render(<FilterButton name="All" isPressed={true} setFilter={setFilter}/>)
        expect(getByTestId("filter-btn")).toHaveTextContent("All")
    })
})