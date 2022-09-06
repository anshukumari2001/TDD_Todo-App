import { render, screen } from '@testing-library/react';
import App from './App';
import {fireEvent, shallow} from 'enzyme'

describe("Basic rendering of App", () =>{
  it('renders learn react link', () => {
    render(<App />);
    const title = screen.getByText(/TodoMatic/i);
    expect(title).toBeInTheDocument();
  });

})

describe("Testing functionality of App", ()=>{
  it('delete todo when delete button clicked', () => {
      const todo = { id: "todo-5", name: "Do something", completed: true };
      const deleteTask = jest.fn();
      const wrapper = render(<App todo={todo} onDelete={deleteTask} />);
      fireEvent?.click(wrapper.getByTestId('delete-btn'))
      //wrapper.find('.delete-btn').simulate('click');
      expect(deleteTask).toBeInTheDocument;
    });

    /*it('adds items to the list', () => {
      const addTask = jest.fn()
      const wrapper = render(<App />);
      const todoObj = "Hello"
      const expected = todoObj;
      wrapper.addTask(todoObj);
      expect(wrapper.state().allTodos).toEqual(expected);
      });*/

})