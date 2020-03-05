import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import { withRouter } from "react-router-dom";
import "./index.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="wrraper-page">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Dashboard);
