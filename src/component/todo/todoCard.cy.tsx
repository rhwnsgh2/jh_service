import React from "react";
import TodoCard from "./todoCard";

describe("<TodoCard />", () => {
  beforeEach(() => {
    cy.mount(
      <TodoCard
        todo={{
          id: "todoCard",
          date: new Date("2023-01-01"),
          content: "content",
          isDone: true,
          type: "once",
        }}
      />
    );
  });

  it("renders TodoCard content", () => {
    cy.get("div").contains("content");
  });

  it("renders TodoCard Done Button", () => {
    cy.get("button")
      .click()
      .then(() => {
        cy.get("#todoCard").should("not.exist");
      });
  });
});
