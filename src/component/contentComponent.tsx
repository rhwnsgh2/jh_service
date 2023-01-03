import styled from "@emotion/styled";
import { Layout } from "antd";
import TodoCard from "./todo/todoCard";

export const ContentComponent = () => {
  return (
    <StyledContent>
      <TodoCard></TodoCard>
    </StyledContent>
  );
};

const StyledContent = styled(Layout.Content)`
  margin: 24px 16px 0;
  display: flex;
`;
