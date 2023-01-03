import { Layout } from "antd";
import React from "react";
import { ContentComponent } from "./contentComponent";
import { HeaderComponent } from "./headerComponent";

export const HomeMain = () => {
  return (
    <Layout>
      <HeaderComponent name={"나는헤더 히힣"} />
      <Layout>
        <ContentComponent></ContentComponent>
      </Layout>
    </Layout>
  );
};
