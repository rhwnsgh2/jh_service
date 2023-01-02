import styled from "@emotion/styled";
import { Layout } from "antd";

type HeaderComponentProps = {
  name: string;
};

export const HeaderComponent = ({ name }: HeaderComponentProps) => {
  return <StyledHeader>{name}</StyledHeader>;
};

const StyledHeader = styled(Layout.Header)`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
