import React from "react";
import { Link, Route } from "react-router-dom";
import Me from "./Me";
import Company from "./Company";
import PageLayout from "../../layout/PageLayout";
import { Button } from "antd";

const About = props => {
  return (
    <PageLayout title={"About us"}>
      <Button style={{ width: "50%" }}>
        <Link to={`${props.match.url}/me`}>About Me</Link>
      </Button>
      <Button style={{ width: "50%" }}>
        <Link to={`${props.match.url}/company`}>About Company</Link>
      </Button>

      <Route path={`${props.match.url}/me`} component={Me} />
      <Route path={`${props.match.url}/company`} component={Company} />
    </PageLayout>
  );
};

export default About;
