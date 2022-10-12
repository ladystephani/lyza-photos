import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import About from "..";

afterEach(cleanup);

describe("About component", () => {
  //renders About test
  test("renders", () => {
    render(<About />);
  });

  test("matches snapshot DOM node structure", () => {
    //render About
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
