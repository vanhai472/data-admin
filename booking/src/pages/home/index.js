import React from "react";
import { Tabs } from "antd";
import "./index.scss";
import Body from "./subComponent/body";

const { TabPane } = Tabs;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabBarStyle={{ textAlign: "center" }}>
          <TabPane tab="Truyện Ma - Truyện Kinh Dị" key="2">
            <div className="container">
              <Body />
            </div>
          </TabPane>
          <TabPane tab="Học Ngoại Ngữ" key="3">
            <div className="container">
              <Body />
            </div>
          </TabPane>
          <TabPane tab="Khoa Học - Kỹ Thuật" key="4">
            <div className="container">
              <Body />
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Home;
