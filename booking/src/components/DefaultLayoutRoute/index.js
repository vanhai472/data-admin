import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from '../Dashboard/index';

export default class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <Dashboard>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}
