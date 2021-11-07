import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Operators from "./pages/Operators";
import PayIdPage from "./pages/PayIdPage";
import Global from "./styles/global";

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter basename="/React-test-app">
        <div>
          <Switch>
            <Route path={"/operators"} exact>
              <Operators />
            </Route>
            <Route path={"/pay/:id"} exact>
              <PayIdPage />
            </Route>
            <Redirect to={"/operators"} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
