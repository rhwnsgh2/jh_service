import { Form, Input } from "antd";

export const TodoForm = () => {
  return (
    <Form layout="vertical">
      <Form.Item name="TodoInput" label="Todo를 입력하세요." colon={false}>
        <Input />
      </Form.Item>
    </Form>
  );
};
