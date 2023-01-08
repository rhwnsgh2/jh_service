import React from "react";
import TodoCard from "./todoCard";

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
          onButtonClick={() => {}}
        />
      );
    });
    it("renders TodoCard content", () => {
      cy.get("div").contains("content");
    });

    it("renders TodoCard Done Button visible", () => {
      cy.get(".anticon-check").should("be.visible");
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
          onButtonClick={() => {}}
        />
      );
    });
    it("renders TodoCard Button cancel icon visible", () => {
      cy.get(".anticon-close").should("be.visible");
    });
  });
});
