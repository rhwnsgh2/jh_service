import React from "react";
import TodoCard from ".";

describe("<TodoCard />", () => {
  describe("status not done", () => {
    beforeEach(() => {
      cy.mount(
        <TodoCard
          todo={{
            id: "todoCard",
            date: new Date("2023-01-01"),
            content: "content",
            isDone: false,
            type: "once",
          }}
        />
      );
    });
    it("renders TodoCard content", () => {
      cy.get("div").contains("content");
    });

    it("renders TodoCard Done Button visible", () => {
      cy.get(".anticon-check").should("be.visible");
    });

    it("renders TodoCard Edit Button visible", () => {
      cy.get(".anticon-edit").should("be.visible");
    });
  });

  describe("status done", () => {
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
    it("renders TodoCard Button cancel icon visible", () => {
      cy.get(".anticon-close").should("be.visible");
    });
  });
});
