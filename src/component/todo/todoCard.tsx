import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Todo } from "../../domain/model/todo";
type TodoCardProps = {
  todo: Todo;
};

export const TodoCard = ({ todo }: TodoCardProps) => {
  const isDone = todo.isDone;
  return (
    <Card id={todo.id} style={{ flex: 1 }}>
      {todo.content}
      <Button icon={isDone ? <CloseOutlined /> : <CheckOutlined />} />
    </Card>
  );
};

export default TodoCard;
