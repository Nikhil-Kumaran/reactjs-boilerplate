import React from "react";
import "./Home.css";
import "./Home.less";
import PageLayout from "../../layout/PageLayout";

const Home = props => {
  return (
    <PageLayout title={"Home"}>
      <div className="home homeless">{props.text}</div>
    </PageLayout>
  );
};

export default Home;
