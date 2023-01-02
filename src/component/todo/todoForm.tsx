import { Button, Form, Input } from "antd";
import React from "react";
import { WithCreateTodo } from "../hoc/createTodo";

type TodoFormProps = {
  createTodo: () => void;
};

export const TodoForm: React.FC<TodoFormProps> = ({
  createTodo,
}: TodoFormProps) => {
  const onFinish = ({ TodoInput }: { TodoInput: string }) => {
    createTodo();
  };

  return (
    <Form layout="inline" onFinish={onFinish}>
      <Form.Item name="TodoInput" label="Todo를 입력하세요." colon={false}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          추가
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WithCreateTodo(TodoForm);
