/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 16:53:07
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 19:40:32
 */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import layoutConfig from "@/router/layoutConfig";

function App() {
  return (
    <Router>
      <Switch>
        {layoutConfig.map((i) => {
          return i.redirect ? (
            <Redirect key={i.path} {...i} />
          ) : (
            <Route key={i.path} {...i} />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
