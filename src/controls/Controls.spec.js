// Test away!
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open
import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import Controls from "./Controls";
import "@testing-library/jest-dom/extend-expect";

test("it renders correctly", () => {
    render(<Controls />);
  });

  test('provide buttons to toggle the closed and locked states',()=>{
      const container= render(<Controls />)
      let lockButton = container.getByTestId('locked');
      let closeButton = container.getByTestId('closed');
      expect(lockButton).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      fireEvent.click(closeButton);
      fireEvent.click(lockButton);
      expect(closeButton).toHaveTextContent(/Open Gate/i)
  })

  test('the closed toggle button is disabled if the gate is locked',()=>{
    const container= render(<Controls locked={true} />)
    expect(container.getByTestId('locked')).toBeDisabled();
    
})
test('the locked toggle button is disabled if the gate is open',()=>{
    const container= render(<Controls locked={true} />)
    expect(container.getByTestId('closed')).toBeDisabled();
    
})