import React from "react";
import TodoCard from "./todoCard";

describe("<TodoCard />", () => {
  beforeEach(() => {
    cy.mount(<TodoCard />);
  });

  it("renders TodoCard", () => {
    cy.get("div").contains("test");
  });
});
