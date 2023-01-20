import React from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import MyProfile from "./components/MyProfile/MyProfile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
const App = (props) => {
      return (
            <div className="app-wrapper">
                  <HeaderContainer />
                  <Navbar />
                  <Routes>
                        <Route path="/friends/*" element={<Friends />} />
                        <Route path="/music/*" element={<Music />} />
                        <Route path="/news/*" element={<News />} />
                        <Route path="/setting/*" element={<Setting />} />
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/myProfile/*" element={<MyProfile />} />
                        <Route path="/users/*" element={<UsersContainer />} />
                        <Route path="/userProfile/:userId" element={<UserProfileContainer />} />
                  </Routes>
            </div>
      );
};

export default App;
