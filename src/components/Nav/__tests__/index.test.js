import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  test("renders", () => {
    render(<Nav />);
  });

  // snapshopt test
  test("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  test("inserts emoji into the h2", () => {
    //arrange
    const { getByLabelText } = render(<Nav />);
    expect(getByLabelText("camera")).toHaveTextContent("📸");
    //assert
  });
});

describe("links are visible", () => {
  test("inserts text into the links", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
