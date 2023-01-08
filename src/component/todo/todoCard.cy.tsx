import React from "react";
import TodoCard from "./todoCard";

describe("<TodoCard />", () => {
  beforeEach(() => {
    cy.mount(
      <TodoCard
        todo={{
          id: "test",
          date: new Date("2023-01-01"),
          content: "content",
          isDone: true,
          type: "once",
        }}
      />
    );
  });

  it("renders TodoCard date", () => {
    cy.get("div").contains("2023-01-01");
  });

  it("renders TodoCard content", () => {
    cy.get("div").contains("content");
  });
});
