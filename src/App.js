import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import TaskPage from "./components/taskPage/TaskPage";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <Fragment>
      <h2>IT WORKS!</h2>
      {/* <MainPage />
      <TaskPage /> */}

      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route path="/articles/:articleId" component={Article} /> */}
        <Route path="/task" component={TaskPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
