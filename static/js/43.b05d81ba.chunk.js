"use strict";(self.webpackChunk_01_first_project=self.webpackChunk_01_first_project||[]).push([[43],{9161:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});var r=n(5671),o=n(3144),t=n(136),i=n(516),a=n(2791),l=n(8687),u={users:"UsersList_users__S4wbF",preloader:"UsersList_preloader__lXAi0"},c=n(4904),p=n(5987),g="User_user__QpQaG",d=n(1087),h=n.p+"static/media/avatar.bd63a26d9ee41664f24d.jpg",P=n(184),f=["el"],m=function(e){var s=e.el,n=(0,p.Z)(e,f);return(0,P.jsxs)("div",{className:g,children:[(0,P.jsx)("div",{children:(0,P.jsx)(d.OL,{to:"/userProfile/"+s.id,children:(0,P.jsx)("img",{src:null===s.photos.small?h:s.photos.small,alt:"avatar"})})}),(0,P.jsx)("div",{children:s.followed?(0,P.jsx)("button",{disabled:n.inProgressFollowing.some((function(e){return e===s.id})),onClick:function(){n.deleteUnfollowThunkCreator(s.id)},children:"Unfollow"}):(0,P.jsx)("button",{disabled:n.inProgressFollowing.some((function(e){return e===s.id})),onClick:function(){n.postFollowThunkCreator(s.id)},children:"Follow"})}),(0,P.jsxs)("div",{children:[s.name," ",s.last_name]})]},s.id)},U=n(9439),j="Pagenator_page__Yn5m8",w="Pagenator_pages__OM3ML",b="Pagenator_active__4C8Yz",_=function(e){for(var s=(0,a.useState)(1),n=(0,U.Z)(s,2),r=n[0],o=n[1],t=Math.ceil(e.countUsers/e.countUsersOnPage),i=Math.ceil(t/12),l=[],u=1+12*(r-1);u<=12*r&&u<=t&&u>=1;u++)l.push(u);return(0,P.jsxs)("div",{className:w,children:[(0,P.jsx)("span",{children:r>1?(0,P.jsx)("button",{onClick:function(){o(r-1)},children:"PREW"}):""}),(0,P.jsx)("span",{className:j,children:l.map((function(s){return(0,P.jsx)("span",{onClick:function(){e.openNumberPage(s,e.countUsersOnPage)},className:s===e.pageNumber?b:j,children:s},s)}))}),(0,P.jsx)("span",{children:r!==i?(0,P.jsx)("button",{onClick:function(){o(r+1)},children:"NEXT"}):""})]})},k=function(e){return(0,P.jsxs)("div",{className:u.pageUsers,children:[(0,P.jsx)(_,{countUsers:e.countUsers,countUsersOnPage:e.countUsersOnPage,openNumberPage:e.openNumberPage,pageNumber:e.pageNumber}),!0===e.isFetching?(0,P.jsx)("div",{className:u.preloader,children:(0,P.jsx)(c.Z,{})}):(0,P.jsx)("div",{className:u.users,children:e.users.map((function(s){return(0,P.jsx)(m,{el:s,inProgressFollowing:e.inProgressFollowing,deleteUnfollowThunkCreator:e.deleteUnfollowThunkCreator,postFollowThunkCreator:e.postFollowThunkCreator},s.id)}))})]})},x=n(946),F=function(e){(0,t.Z)(n,e);var s=(0,i.Z)(n);function n(){return(0,r.Z)(this,n),s.apply(this,arguments)}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.props.addUsersOnPage(this.props.pageNumber,this.props.countUsersOnPage)}},{key:"render",value:function(){return(0,P.jsx)("div",{children:(0,P.jsx)(k,{countPages:this.countPages,openNumberPage:this.props.openNumberPage,postFollowThunkCreator:this.props.postFollowThunkCreator,deleteUnfollowThunkCreator:this.props.deleteUnfollowThunkCreator,inProgressFollowing:this.props.inProgressFollowing,isFetching:this.props.isFetching,countUsers:this.props.countUsers,countUsersOnPage:this.props.countUsersOnPage,openPage:this.openPage,pageNumber:this.props.pageNumber,users:this.props.users})})}}]),n}(a.Component),C=(0,l.$j)((function(e){return{inProgressFollowing:e.usersPage.inProgressFollowing,isFetching:e.usersPage.isFetching,users:e.usersPage.users,pageNumber:e.usersPage.pageNumber,countUsers:e.usersPage.countUsers,countUsersOnPage:e.usersPage.countUsersOnPage}}),{addUsersOnPage:x.Qw,openNumberPage:x.Vj,postFollowThunkCreator:x.zu,deleteUnfollowThunkCreator:x.TM,progressFollowing:x.bi,setPage:x.YA,toggleIsFetching:x.MO,addUsers:x.Sh,setTotalCount:x.eh})(F)}}]);
//# sourceMappingURL=43.b05d81ba.chunk.js.map