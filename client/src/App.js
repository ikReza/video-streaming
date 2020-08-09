import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/stream/homeScreen/Home";
import StreamCreate from "./components/stream/streamCreate/StreamCreate";
import StreamEdit from "./components/stream/streamEdit/StreamEdit";
import StreamDelete from "./components/stream/streamDelete/StreamDelete";
import StreamShow from "./components/stream/streamShow/StreamShow";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Router>
    </div>
  );
};

export default App;
