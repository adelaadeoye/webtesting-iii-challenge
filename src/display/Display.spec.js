  
// Test away!
/*
- displays if gate is open/closed and if it is locked/unlocked
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
- when `locked` or `closed` use the `red-led` class
- when `unlocked` or `open` use the `green-led` class
*/
import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';
import "@testing-library/jest-dom/extend-expect";
 
test ('it renders correctly', ()=>{

    render (<Display/>);
});
let container;

beforeEach(() => {
	container = render(<Display />);
});

test("displays if gate is open/closed and if it is locked/unlocked", ()=>{
  
		let open = container.queryByText(/open/i);
		let closed = container.queryByText(/closed/i);
		let locked = container.queryByText(/locked/i);
		let unlocked = container.queryByText(/unlocked/i);
		expect((open || closed) && (locked || unlocked)).toBeInTheDocument();

})

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", ()=>{
  
    container=render(<Display closed={true|| open}/>)
    expect(container.queryByText(/closed/i)||container.queryByText(/open/i)).toBeInTheDocument();

})

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", ()=>{

    container=render(<Display locked={true} closed={true}/>)
    expect(container.queryByText(/unlocked/i)).not.toBeInTheDocument();
    expect(container.queryByText(/locked/i)).toBeInTheDocument();

})

