import React, { Suspense } from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { getAuth } from "./redux/authReducer";
import { connect } from "react-redux";
// import PreloaderEntrance from "./components/common/Preloader/PreloaderEntrance";
import Preloader from "./components/common/Preloader/Preloader";

import News from "./components/News/News";
import Music from "./components/Music/Music";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SettingContainer from "./components/Setting/SettingContainer";
// import UsersListContainer from "./components/UsersList/UsersListContainer";
// import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import MyFriendsContainer from "./components/MyFriends/MyFriendsContainer";
import SingInFormContainer from "./components/SingInForm/SingInFormContainer";
// import UserProfileContainer from "./components/UserProfile/UserProfileContainer";

// React.lazy лінива підгрузка, лише тоді коли цю компоненту трогають тоді вона буде підгружатись. 
// Стандартно реакт підгружає все підряд що не обернене в lazy.
// const News=React.lazy(()=> import("./components/News/News"))
// const Music=React.lazy(()=> import("./components/Music/Music"))
const DialogsContainer=React.lazy(()=> import("./components/Dialogs/DialogsContainer"))
// const SettingContainer=React.lazy(()=> import("./components/Setting/SettingContainer"))
const UsersListContainer=React.lazy(()=> import("./components/UsersList/UsersListContainer"))
const MyProfileContainer=React.lazy(()=> import("./components/MyProfile/MyProfileContainer"))
// const MyFriendsContainer=React.lazy(()=> import("./components/MyFriends/MyFriendsContainer"))
// const SingInFormContainer=React.lazy(()=> import("./components/SingInForm/SingInFormContainer"))
const UserProfileContainer=React.lazy(()=> import('./components/UserProfile/UserProfileContainer'))


const App = (props) => {
      props.getAuth()

      // return props.resultCode === null ?
      //       <div className='preloader'>
      //             <PreloaderEntrance />
      //       </div>
      //       :
            return <div className="app-wrapper">
                  <HeaderContainer />
                  <Navbar />
                  <Suspense fallback={<Preloader />}>
                        <Routes>
                              <Route path="/singIn/*" element={<SingInFormContainer />} />
                              <Route path="/myFriends/*" element={<MyFriendsContainer />} />
                              <Route path="/music/*" element={<Music />} />
                              <Route path="/*" element={<News />} />
                              <Route path="/setting/*" element={<SettingContainer />} />
                              <Route path="/dialogs/*" element={<DialogsContainer />} />
                              <Route path="/myProfile/*" element={<MyProfileContainer />} />
                              <Route path="/users/*" element={<UsersListContainer />} />
                              <Route path="/userProfile/:userId" element={<UserProfileContainer />} />
                        </Routes>
                  </Suspense>
            </div>
}


const mapStateToProps = (state) => {
      return {
            resultCode: state.auth.authData.resultCode
      }
}

export default connect(mapStateToProps, { getAuth })(App);
