
import React from "react";
import renderer from "react-test-renderer";
import Navebar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

it("Navebar renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <Navebar/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});