import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
      return (
            <BrowserRouter>
                  <div className="app-wrapper">
                        <Header />
                        <Navbar />
                        <Routes>
                              <Route path="/music" element={<Music />} />
                              <Route path="/news" element={<News />} />
                              <Route path="/setting" element={<Setting />} />
                              <Route path="/dialogs" element={<Dialogs />} />
                              <Route path="/profile" element={<Profile />} />
                        </Routes>

                  </div>
            </BrowserRouter>
      );
};

export default App;
