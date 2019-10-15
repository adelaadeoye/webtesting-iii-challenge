// Test away

import React from "react";
import { render ,fireEvent} from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/jest-dom/extend-expect";

test("it renders correctly", () => {
  render(<Dashboard />);
});

test("displays Controls", () => {
    const container = render(<Dashboard />);
    let open = container.queryByText(/open/i);
    let closed = container.queryByText(/closed/i);
    let locked = container.queryByText(/locked/i);
    let unlocked = container.queryByText(/unlocked/i);
    expect((open || closed) && (locked || unlocked)).toBeInTheDocument();
  });
  
  test('cannot be closed or opened if it is locked', () => {
    const container = render(<Dashboard />);

    let lockButton = container.getByTestId('locked');
    let closeButton = container.getByTestId('closed');
    fireEvent.click(closeButton);
    fireEvent.click(lockButton);
    expect(lockButton).toBeEnabled();
    expect(closeButton).toBeDisabled();
});

