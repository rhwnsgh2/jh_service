import React from "react";
import { createTodoStub, todoListStub } from "../../server/api/todoStub";
import { TodoForm } from "./todoForm";

describe("<TodoForm />", () => {
  beforeEach(() => {
    cy.mount(<TodoForm createTodo={createTodoStub} />);
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

  it("renders input button", () => {
    cy.get("button").contains("추가");
  });

  describe("추가 버튼 handler", () => {
    beforeEach(() => {
      todoListStub.length = 0;
    });
    it("add TodoList when {enter} keyPress in input", () => {
      cy.get("input")
        .type("test{enter}")
        .then(() => {
          expect(todoListStub).to.have.length(1);
        });
      cy.get("input").should("have.value", "");
    });

    it("add TodoList when click button", () => {
      cy.get("input").type("test");
      cy.get("button")
        .click()
        .then(() => {
          expect(todoListStub).to.have.length(1);
        });
      cy.get("input").should("have.value", "");
    });
  });
});
