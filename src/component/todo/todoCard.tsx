import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Card } from "antd";
import { Todo } from "../../domain/model/todo";
type TodoCardProps = {
  todo: Todo;
};

export const TodoCard = ({ todo }: TodoCardProps) => {
  const isDone = todo.isDone;
  return (
    <StyledCard
      id={todo.id}
      bodyStyle={{ display: "flex", flex: 1, justifyContent: "space-around" }}
    >
      <Content>{todo.content}</Content>
      <ButtonContainer>
        <Button icon={<EditOutlined />} />
        <Button icon={isDone ? <CloseOutlined /> : <CheckOutlined />} />
      </ButtonContainer>
    </StyledCard>
  );
};

export default TodoCard;

const StyledCard = styled(Card)`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;
