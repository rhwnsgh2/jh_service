import { Layout } from "antd";
import React from "react";
import { HeaderComponent } from "./headerComponent";
import { TodoInput } from "./todo/todoInput";

export const HomeMain = () => {
  return (
    <Layout>
      <HeaderComponent name={"나는헤더 히힣"} />
      <TodoInput />
    </Layout>
  );
};
