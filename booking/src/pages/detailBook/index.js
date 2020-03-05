import React from "react";
import { datas } from "../home/subComponent/body/Data";
import { Card } from "antd";

class DetailBook extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const result = datas.filter(el => el.id === id);
    if (!datas) {
      return <h1>notFound</h1>;
    }
    return (
      <div className="wrraper-page">
        <Card  style={{ width: 800, margin: '0 auto' }}
          title={result[0].title}
          bordered={false}
          bodyStyle={{margin:'0,auto'}}
        ><p>{result[0].content}</p></Card>
        
      </div>
    );
  }
}

export default DetailBook;
