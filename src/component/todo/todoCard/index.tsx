import styled from "@emotion/styled";
import { Card } from "antd";
import { useState } from "react";
import { Todo } from "../../../domain/model/todo";
import { EditContent } from "./editContent";
import { TodoCardContent } from "./todoCardContent";

type TodoCardProps = {
  todo: Todo;
};

export const TodoCard = ({ todo }: TodoCardProps) => {
  const isDone = todo.isDone;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <StyledCard
      id={todo.id}
      bodyStyle={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isEdit ? (
        <EditContent
          onFinishEdit={() => setIsEdit(false)}
          content={todo.content}
        />
      ) : (
        <TodoCardContent
          content={todo.content}
          isDone={todo.isDone}
          onClickEditButton={() => setIsEdit(true)}
        />
      )}
    </StyledCard>
  );
};

export default TodoCard;

const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
`;
