import { Card } from "antd";
import { Todo } from "../../domain/model/todo";
import { convertToYYMMDD } from "../../utils/date";

type TodoCardProps = {
  todo: Todo;
};

export const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <Card title={convertToYYMMDD(todo.date)} style={{ flex: 1 }}>
      {todo.content}
    </Card>
  );
};

export default TodoCard;
