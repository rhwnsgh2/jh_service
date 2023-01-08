import { CheckOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Todo } from "../../domain/model/todo";
type TodoCardProps = {
  todo: Todo;
};

export const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <Card id={todo.id} style={{ flex: 1 }}>
      {todo.content}
      <Button icon={<CheckOutlined />}></Button>
    </Card>
  );
};

export default TodoCard;
