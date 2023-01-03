import { Card } from "antd";
import type { Todo } from "@prisma/client";

type TodoCardProps = {
  todo: Todo;
};

export const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <Card title={todo.date.toLocaleString} style={{ flex: 1 }}>
      test
    </Card>
  );
};

export default TodoCard;
