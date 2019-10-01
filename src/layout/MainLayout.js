import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Footer, Sider } = Layout;
import "./MainLayout.less";

export default class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          {this.state.collapsed ? (
            <div className="logo">N</div>
          ) : (
            <div className="logo">Nikhil Kumaran S</div>
          )}
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Link to={"/"}>
                <Icon type="home" />
                <span className="menu-item-link">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={"/about"}>
                <Icon type="question-circle" />
                <span className="menu-item-link">About</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={"/contact"}>
                <Icon type="contacts" />
                <span className="menu-item-link">Contact</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> */}
          {this.props.children}
          {/* </div> */}
          <Footer style={{ textAlign: "center" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Nikhil-Kumaran/reactjs-boilerplate"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.npmjs.com/package/reactjs-boilerplate"
            >
              npm
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
