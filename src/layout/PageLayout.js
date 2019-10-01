import React from "react";
import { Layout } from "antd";
import { PageHeader } from "antd";

const { Content } = Layout;

const PageLayout = props => {
  return (
    <>
      <PageHeader title={props.title && props.title} />
      <Content style={{ padding: 24, background: "#fff" }}>{props.children}</Content>
    </>
  );
};

export default PageLayout;
