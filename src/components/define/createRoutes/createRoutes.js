/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-06-22 00:40:57
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 20:10:56
 */

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

require("./createRoutes.less");

function CreateRoutes(data = []) {
  return (
    <Switch>
      {data.map((i) => {
        const { component: Component, ...lastProps } = i;
        return i.redirect ? (
          <Redirect key={lastProps.path} {...lastProps} />
        ) : (
          <Route
            key={lastProps.path}
            {...lastProps}
            render={(props) => {
              return (
                <div className="route-animation">
                  <Component {...props} />
                </div>
              );
            }}
          />
        );
      })}
    </Switch>
  );
}

export default CreateRoutes;
