import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StreamCreate from "./pages/StreamCreate";
import StreamDelete from "./pages/StreamDelete";
import StreamEdit from "./pages/StreamEdit";
//Pages
import StreamList from "./pages/StreamList";
import StreamShow from "./pages/StreamShow";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/streams/show" element={<StreamShow />} />
        <Route path="/streams/create" element={<StreamCreate />} />
        <Route path="/streams/edit" element={<StreamEdit />} />
        <Route path="/streams/delete" element={<StreamDelete />} />
      </Routes>
    </Router>
  );
};

export default App;
