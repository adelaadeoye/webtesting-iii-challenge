// Test away!
/*
- displays if gate is open/closed and if it is locked/unlocked
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
- when `locked` or `closed` use the `red-led` class
- when `unlocked` or `open` use the `green-led` class
*/
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import "@testing-library/jest-dom/extend-expect";

test("it renders correctly", () => {
  render(<Display />);
});




test("displays if gate is open/closed and if it is locked/unlocked", () => {
  const container = render(<Display />);
  let open = container.queryByText(/open/i);
  let closed = container.queryByText(/closed/i);
  let locked = container.queryByText(/locked/i);
  let unlocked = container.queryByText(/unlocked/i);
  expect((open || closed) && (locked || unlocked)).toBeInTheDocument();
});

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
  const container = render(<Display closed={true} />);
  expect(container.queryByText(/closed/i)).toBeInTheDocument();

});

test ("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise",()=>{
  const container = render(<Display closed={false} />);
  expect(container.queryByText(/open/i)).toBeInTheDocument();
})

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
 const container = render(<Display locked={true} />);
  expect(container.queryByText(/locked/i)).toBeInTheDocument();
  expect(container.queryByText(/unlocked/i)).not.toBeInTheDocument();
});

test("uses the red-led class when locked or closed", () => {
 const container = render(<Display locked={true} closed={true} />);
  expect(container.queryByText(/Locked/i)).toHaveClass("red-led");
  expect(container.queryByText(/Closed/i)).toHaveClass("red-led");
});

test("uses the green-led class when unlocked or open", () => {
 const container = render(<Display locked={false} closed={false} />);
  expect(container.queryByText(/Unlocked/i)).toHaveClass("green-led");
  expect(container.queryByText(/Open/i)).toHaveClass("green-led");
});
