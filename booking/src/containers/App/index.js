import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { routers } from "../../constants";
import DefaultLayoutRoute from "../../components/DefaultLayoutRoute/index";

class App extends React.Component {
  renderRouter() {
    let xhtml = null;
    xhtml = routers.map((item, index) => {
      return (
        <DefaultLayoutRoute
          component={item.component}
          exact={item.exact}
          key={index}
          path={item.path}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Router>
        <Switch>{this.renderRouter()}</Switch>
      </Router>
    );
  }
}

export default App;
