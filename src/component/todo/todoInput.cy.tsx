import React from "react";
import { TodoInput } from "./todoInput";

describe("<TodoInput />", () => {
  it("renders TodoInput", () => {
    cy.mount(<TodoInput />);
    cy.get("input").should("have.length", 1);
  });
});
