import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/stream/homeScreen/Home";
import StreamCreate from "./components/stream/streamCreate/StreamCreate";
import StreamEdit from "./components/stream/streamEdit/StreamEdit";
import StreamDelete from "./components/stream/streamDelete/StreamDelete";
import StreamShow from "./components/stream/streamShow/StreamShow";
import history from "./history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
