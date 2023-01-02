import { Button, Form, Input } from "antd";
import React from "react";
import type { WithCreateTodoProps } from "../hoc/createTodo";
import { WithCreateTodo } from "../hoc/createTodo";

export const TodoForm = ({ createTodo }: WithCreateTodoProps) => {
  const [form] = Form.useForm();

  const onFinish = ({ TodoInput }: { TodoInput: string }) => {
    createTodo(TodoInput);
    form.resetFields();
  };

  return (
    <Form form={form} layout="inline" onFinish={onFinish}>
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
