import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";
import { Routes, Route, } from "react-router-dom";

const App = (props) => {
      return (
            <div className="app-wrapper">
                  <Header />
                  <Navbar navbarData={props.state.navbarData} />
                  <Routes>
                        <Route path="/friends/*" element={<Friends />} />
                        <Route path="/music/*" element={<Music />} />
                        <Route path="/news/*" element={<News />} />
                        <Route path="/setting/*" element={<Setting />} />
                        <Route path="/dialogs/*" element={<Dialogs dialogsData={props.state.dialogsData} />} />
                        <Route path="/profile/*" element={<Profile postData={props.state.postData} addPost={props.addPost} />} />
                  </Routes>
            </div>
      );
};

export default App;
