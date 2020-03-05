import React from "react";
import { Col, Row, Card, Button, Icon } from "antd";
import { withRouter } from "react-router-dom";
import { datas } from "./Data";
import "./index.scss";
const { Meta } = Card;

class Body extends React.Component {
  hanleView = id => {
    const url = `detail/${id}`;
    this.props.history.push(url);
  };
  renderShowData = () => {
    let book = null;
    book = datas.map((data, index) => {
      return (
        <Col xs={24} sm={12} md={8} lg={5} key={index}>
          <Card
            hoverable
            actions={[
              <Button type="primary" onClick={() => this.hanleView(data.id)}>
                View
              </Button>,
              <Button type="danger">PDF</Button>
            ]}
            cover={<img alt="book" src={data.image} />}
          >
          <span className="fontSize" >{data.name }</span>
          </Card>
        </Col>
      );
    });
    return book;
  };
  render() {
    return (
      <Row
        type="flex"
        justify="center"
        gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}
      >
        {this.renderShowData()}
      </Row>
    );
  }
}

export default withRouter(Body);
