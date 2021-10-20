import React, { Component } from "react";
//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//CustomHistory
import history from "./history";
//Pages
import Header from "./components/Header";
import StreamList from "./pages/StreamList";
import StreamShow from "./pages/StreamShow";
import StreamCreate from "./pages/StreamCreate";
import StreamDelete from "./pages/StreamDelete";
import StreamEdit from "./pages/StreamEdit";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/create" element={<StreamCreate />} />
          <Route path="/streams/:id" element={<StreamShow />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete/:id" element={<StreamDelete />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
