import React from "react";
import { TodoForm } from "./todoForm";

describe("<TodoForm />", () => {
  beforeEach(() => {
    cy.mount(<TodoForm />);
  });

  it("renders TodoForm", () => {
    cy.get("form").should("have.length", 1);
  });

  it("renders input", () => {
    cy.get("input").should("have.length", 1);
  });

  it("renders input label", () => {
    cy.get("label").contains("Todo를 입력하세요.");
  });
});
