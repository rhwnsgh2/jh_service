import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button } from "antd";
import React from "react";

type Props = {
  content: string;
  isDone: boolean;
  onClickEditButton: () => void;
};
export const TodoCardContent = ({
  content,
  isDone,
  onClickEditButton,
}: Props) => (
  <>
    <Content>{content}</Content>
    <ButtonContainer>
      <Button onClick={() => onClickEditButton()} icon={<EditOutlined />} />
      <Button icon={isDone ? <CloseOutlined /> : <CheckOutlined />} />
    </ButtonContainer>
  </>
);

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
