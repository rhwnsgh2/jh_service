import styled from "@emotion/styled";
import { Layout } from "antd";
import TodoCard from "./todo/todoCard";

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
      ></TodoCard>
    </StyledContent>
  );
};

const StyledContent = styled(Layout.Content)`
  margin: 24px 16px 0;
  display: flex;
`;
