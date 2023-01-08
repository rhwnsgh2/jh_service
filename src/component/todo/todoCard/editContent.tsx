import { Button, Form, Input } from "antd";
import React from "react";

type Props = {
  content: string;
  onFinishEdit: () => void;
};
export const EditContent = ({ content, onFinishEdit }: Props) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    form.resetFields();
    onFinishEdit();
  };

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={onFinish}
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Form.Item name="TodoInput" colon={false} style={{ flex: 1 }}>
        <Input defaultValue={content} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          수정
        </Button>
      </Form.Item>
    </Form>
  );
};
