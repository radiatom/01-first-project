import React, { Component } from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import SettingContainer from "./components/Setting/SettingContainer";
import MyFriendsContainer from "./components/MyFriends/MyFriendsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import SingInFormContainer from "./components/SingInForm/SingInFormContainer";
import { getAuth } from "./redux/authReducer";
import { connect } from "react-redux";

class App extends Component {
      componentDidMount() {
            this.props.getAuth()
        }
      render() {
            return (
                  <div className="app-wrapper">
                        <HeaderContainer />
                        <Navbar />
                        <Routes>
                              <Route path="/singIn/*" element={<SingInFormContainer />} />
                              <Route path="/myFriends/*" element={<MyFriendsContainer />} />
                              <Route path="/music/*" element={<Music />} />
                              <Route path="/*" element={<News />} />
                              <Route path="/setting/*" element={<SettingContainer />} />
                              <Route path="/dialogs/*" element={<DialogsContainer />} />
                              <Route path="/myProfile/*" element={<MyProfileContainer />} />
                              <Route path="/users/*" element={<UsersContainer />} />
                              <Route path="/userProfile/:userId" element={<UserProfileContainer />} />
                        </Routes>
                  </div>
            );
      }
}

export default connect (null,{getAuth})(App);
