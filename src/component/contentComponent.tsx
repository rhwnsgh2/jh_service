import styled from "@emotion/styled";
import { Layout } from "antd";
import TodoCard from "./todo/todoCard";
import TodoForm from "./todo/todoForm";

export const ContentComponent = () => {
  return (
    <StyledContent>
      <TodoCard
        todo={{
          id: "test",
          date: new Date("2023-01-01"),
          content: "content",
          isDone: true,
          type: "once",
        }}
      />
      <TodoForm />
    </StyledContent>
  );
};

const StyledContent = styled(Layout.Content)`
  margin: 24px 16px 0;
  display: flex;
`;
