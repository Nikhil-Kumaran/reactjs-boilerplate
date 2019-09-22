import React from "react";
import { Link, Route } from "react-router-dom";
import Me from "./Me";
import Company from "./Company";

const About = props => {
  return (
    <>
      {props.location.pathname === "/about" && (
        <>
          <div>About page</div>
          <ul>
            <li>
              <Link to={`${props.match.url}/me`}>About Me</Link>
            </li>
            <li>
              <Link to={`${props.match.url}/company`}>About Company</Link>
            </li>
          </ul>
        </>
      )}
      <Route path={`${props.match.url}/me`} component={Me} />
      <Route path={`${props.match.url}/company`} component={Company} />
    </>
  );
};

export default About;
