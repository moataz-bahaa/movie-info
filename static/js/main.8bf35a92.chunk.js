(this["webpackJsonpmovie-info"]=this["webpackJsonpmovie-info"]||[]).push([[0],{113:function(e,t,c){},115:function(e,t,c){},146:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(39),s=c.n(r),i=(c(113),c(114),c(115),c(13)),o=c(56),l=c(158),j=c(152),d=c(160),b=c(101),u=c(23),m=c(25),h=c(19),O="LOADING",x=function(e){return{type:O,value:e}},p="FETCH_INITIAL_MOVIES",f="SEARCH_MOVIES",g="FETCH_MOVIE",v=function(e){return{type:p,movies:e}},N=function(e,t,c){return{type:f,search:{text:e,page:t,movies:c.Search,response:c.Response,totalResults:c.totalResults}}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(c){return c(x(!0)),fetch("".concat("https://www.omdbapi.com","/?apikey=").concat("4689a1f6","&s=").concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(n){c(N(e,t,n)),c(x(!1))})).catch((function(e){console.error("Error in server"),c(x(!1))}))}},w=function(e){return function(t){return t(x(!0)),fetch("".concat("https://www.omdbapi.com","/?apikey=").concat("4689a1f6","&i=").concat(e)).then((function(e){return e.json()})).then((function(e){t({type:g,movie:e}),t(x(!1))})).catch((function(e){console.error("Error in server")}))}},S=c(1),k=c.n(S),I=c(5),C=c(155),L=c(99),E=c(50),M=c(65),T=c(70),D=(Object(L.a)({apiKey:"AIzaSyDydVrLkyRGVXmIwDtpv-Lc3mTbxydtCsQ",authDomain:"movie-info-7d576.firebaseapp.com",projectId:"movie-info-7d576",storageBucket:"movie-info-7d576.appspot.com",messagingSenderId:"866261040957",appId:"1:866261040957:web:55612e7580ea0956778f54"}),Object(M.a)()),R=Object(E.c)(),F=Object(T.b)(),U=c(3),P=function(e){var t=function(){var t=Object(I.a)(k.a.mark((function t(c){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.dispatch(x(!0)),t.prev=1,t.next=4,Object(M.c)(D);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),alert(t.t0.message);case 9:e.dispatch(x(!1));case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(C.a,{title:Object(U.jsx)(o.d,{className:"fs-4"}),id:"basic-nav-dropdown",children:[Object(U.jsx)("li",{className:"dropdown-item",children:Object(U.jsx)(m.c,{to:"/user/profile",className:"d-block",children:"Profile"})}),Object(U.jsx)("li",{className:"dropdown-item cursor-pointer",onClick:t,children:"Sign Out"})]})})},A=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(m.c,{to:"/signin",className:"btn text-light me-3",activeClassName:"btn-success",children:"Sign in"}),Object(U.jsx)(m.c,{to:"/signup",className:"btn text-light",activeClassName:"btn-success",children:"Sign Up"})]})},B=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.user})),c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1],O=Object(u.g)();return Object(U.jsx)(l.a,{style:{backgroundColor:"#343a40"},variant:"dark",expand:"lg",fixed:"top",className:"py-3",children:Object(U.jsxs)(j.a,{children:[Object(U.jsxs)(l.a.Brand,{className:"me-lg-4 fs-2 text-light",children:[Object(U.jsx)(o.c,{className:"me-lg-2 fs-1",style:{color:"#00d8ff"}}),Object(U.jsx)(m.c,{to:"/",children:"MovieSeriesInfo"})]}),Object(U.jsx)(l.a.Toggle,{"aria-controls":"navbarScroll"}),Object(U.jsx)(l.a.Collapse,{id:"navbarScroll",children:Object(U.jsx)(d.a,{className:"w-100",children:t?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("form",{className:"d-flex flex-fill me-lg-4 my-3 my-lg-0",onSubmit:function(t){if(t.preventDefault(),""===r)return alert("Enter Key Word to Search");e(y(r)),s(""),"/search"!==O.location.pathname&&O.push("/search")},children:[Object(U.jsx)("input",{type:"search",placeholder:"Search",className:"form-control",value:r,onChange:function(e){return s(e.target.value)}}),Object(U.jsx)(b.a,{variant:"outline-success",type:"submit",size:"md",children:"Search"})]}),Object(U.jsx)(P,{dispatch:e})]}):Object(U.jsx)("div",{className:"m-lg-auto",children:Object(U.jsx)(A,{})})})})]})})},_=function(){return Object(U.jsx)("div",{style:{backgroundColor:"#343a40",lineHeight:"20px"},className:"text-light text-center pt-4 pb-3",children:Object(U.jsxs)("p",{children:["Developed By: ",Object(U.jsx)("span",{className:"text-warning",children:"Moataz Bahaa "}),", Using  React JS & Redux JS integrated with external movies data APIOMDB"]})})},H=function(){return Object(U.jsx)("div",{children:Object(U.jsx)("img",{src:"imgs/spinner.gif",style:{width:"250px",margin:"auto",display:"block"},alt:"Loading...."})})},G=c(159),W=c(153),V=function(){return Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{style:{fontSize:"70px"},className:"text-danger",children:"404"}),Object(U.jsx)("h3",{children:"OOPS Nothing Was Found"})]})},q=c(8),z=c(104),Y=c.n(z),J=c(87);function X(e){var t=e.onClick;return Object(U.jsx)("div",{className:"next-arrow d-flex justify-content-center align-items-center",onClick:t,children:Object(U.jsx)(o.b,{})})}function K(e){var t=e.onClick;return Object(U.jsx)("div",{className:"prev-arrow d-flex justify-content-center align-items-center",onClick:t,children:Object(U.jsx)(o.a,{})})}var Q=function(e){var t=e.movies,c={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,nextArrow:Object(U.jsx)(X,{}),prevArrow:Object(U.jsx)(K,{}),responsive:[{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:786,settings:{slidesToShow:1}}]};return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{className:"text-danger text-center fw-bold mb-5",children:"Suggested For You"}),Object(U.jsx)(Y.a,Object(q.a)(Object(q.a)({},c),{},{children:t.map((function(e,t){return Object(U.jsx)("div",{className:"px-4 slider-movie bg-white",children:Object(U.jsxs)("div",{className:"card card-body bg-dark text-center h-100",children:[Object(U.jsx)("img",{className:"w-100 h-75 mb-2",src:e.Poster,alt:"Movie Cover"}),Object(U.jsxs)("h5",{className:"text-light card-title",children:[e.Title," - ",e.Year]}),Object(U.jsxs)(m.b,{className:"btn btn-primary",to:"/movie/"+e.imdbID,children:["Movie Details",Object(U.jsx)(J.a,{className:"fs-2"})]})]})},e.imdbID+t)}))}))]})},Z=function(e){var t=Object(h.b)(),c=Object(h.c)((function(t){return{movie:t.movies.movie,loading:t.shared.loading,id:e.match.params.id,searchMovies:t.movies.search.movies}})),a=c.movie,r=c.loading,s=c.id,o=c.searchMovies,l=Object(n.useState)(!0),j=Object(i.a)(l,2),d=j[0],b=j[1],u=Object(n.useState)(""),O=Object(i.a)(u,2),x=O[0],p=O[1];if(Object(n.useEffect)((function(){t(w(s))}),[s,t]),Object(n.useEffect)((function(){fetch("https://imdb-api.com/en/API/Trailer/k_497203li/".concat(s)).then((function(e){return e.json()})).then((function(e){console.log(e),p(e.linkEmbed)})).catch((function(e){console.error(e.message)}))}),[p,s]),r)return Object(U.jsx)(H,{});if("False"===a.Response)return Object(U.jsx)(V,{});var f=o.filter((function(e){return e.imdbID!==a.imdbID}));return Object(U.jsxs)("div",{className:"container",children:[Object(U.jsxs)("div",{className:"row",children:[Object(U.jsx)("div",{className:"col-md-4",children:Object(U.jsx)("div",{className:"card card-body animate-movie",children:Object(U.jsx)("img",{src:a.Poster,className:"thumbnail",alt:"Poster"})})}),Object(U.jsx)("div",{className:"col-md-8 animate-movie",children:Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{className:"mb-4",children:a.Title}),Object(U.jsxs)("ul",{className:"list-group",children:[Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Genre:"})," ",a.Genre]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Released:"})," ",a.Released]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Rated:"})," ",a.Rated]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"IMDB Rating:"})," ",a.imdbRating]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Director:"})," ",a.Director]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Writer:"})," ",a.Writer]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Actors:"})," ",a.Actors]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Awards:"})," ",a.Awards]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Language:"})," ",a.Language]}),Object(U.jsxs)("li",{className:"list-group-item",children:[Object(U.jsx)("strong",{children:"Country:"})," ",a.Country]})]})]})})]}),Object(U.jsx)(G.a,{className:"my-5",children:Object(U.jsxs)(G.a.Body,{children:[Object(U.jsx)("strong",{children:"Plot:"})," ",a.Plot]})}),Object(U.jsxs)("div",{className:"vidoe-container",children:[Object(U.jsx)("h2",{className:"my-5 py-3 text-muted text-center border border-3 shadow",children:"Trailer"}),d&&Object(U.jsxs)(W.a,{variant:"danger",onClose:function(){return b(!1)},dismissible:!0,children:[Object(U.jsx)(W.a.Heading,{children:"Hey, nice to see you"}),Object(U.jsx)("p",{children:"I'm using omdb api to get movie info but unfortanatly the trailer url is not available so i'm displaying static trailer (harry potter) for allow movies"}),Object(U.jsx)("hr",{})]}),Object(U.jsx)("iframe",{className:"w-100",height:"480",src:x||"https://www.youtube.com/embed/VyHV0BRtdxo",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}),Object(U.jsx)("div",{className:"card card-body bg-dark my-5 text-light",children:Object(U.jsxs)("div",{className:"col-md-12",children:[Object(U.jsx)("h3",{children:"About "}),a.Plot,Object(U.jsx)("hr",{}),Object(U.jsx)("a",{href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"View on IMDB"}),Object(U.jsx)(m.b,{to:"/",className:"btn btn-default text-light",children:"Go Back To Home"})]})}),f.length>=6&&Object(U.jsx)(Q,{movies:f})]})},$=function(e){var t=e.movie;return Object(U.jsx)("div",{className:"col-md-6 col-lg-3 mb-5 animate-movie",children:Object(U.jsxs)("div",{className:"card card-body bg-dark text-center h-100",children:[Object(U.jsx)("img",{className:"w-100 h-75 mb-2",src:t.Poster,alt:"Movie Cover"}),Object(U.jsxs)("h5",{className:"text-light card-title",children:[t.Title," - ",t.Year]}),Object(U.jsxs)(m.b,{className:"btn btn-primary",to:"/movie/"+t.imdbID,children:["Movie Details",Object(U.jsx)(J.a,{className:"fs-2"})]})]})})},ee=a.a.memo($),te=function(e){var t=e.movies;return e.loading?Object(U.jsx)(H,{}):Object(U.jsx)("div",{className:"row",children:t.length>0?t.map((function(e,t){return Object(U.jsx)(ee,{movie:e},e.imdbID+t)})):Object(U.jsx)("h1",{className:"text-muted",children:"not items to display"})})},ce=a.a.memo(te),ne=c(161),ae=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return Object(q.a)(Object(q.a)({},e.movies.search),{},{loading:e.shared.loading})})),c=t.text,n=t.page,a=t.movies,r=t.response,s=t.totalResults,i=t.loading,o=function(t){!function(t,c){e(y(t,c))}(c,t),window.scrollTo(0,0)};if(!a||"False"===r)return Object(U.jsx)(V,{});var l=n,j=Array.from(Array(6),(function(){return l++}));return Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{className:"my-5 py-3 text-muted text-center border border-3 shadow",children:""===c?"Write Movie Title In Search Bar":i?"Loading.....":"".concat(s," Search Results Of ").concat(c," page: ").concat(n)}),Object(U.jsx)(ce,{movies:a,loading:i}),a.length>0&&Object(U.jsx)("div",{children:Object(U.jsxs)(ne.a,{className:"justify-content-center",children:[Object(U.jsx)(ne.a.Item,{onClick:function(){return o(n-1)},disabled:n<=1,children:"Prevous"}),j.map((function(e){return e<=Math.floor(s/10)&&Object(U.jsx)(ne.a.Item,{active:e===n,disabled:e>Math.floor(s/10),onClick:function(){return o(e)},children:e},Math.floor(1e4*Math.random()))})),Object(U.jsx)(ne.a.Item,{onClick:function(){return o(n+1)},disabled:n>=5,children:"Next"})]})})]})},re=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return{loading:e.shared.loading,initialMovies:e.movies.initialMovies}})),c=t.loading,a=t.initialMovies,r=Object(n.useState)(1),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(c){return c(x(!0)),fetch("".concat("https://www.omdbapi.com","/?apikey=").concat("4689a1f6","&s=").concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){c(v(e.Search)),c(x(!1))})).catch((function(e){console.error("Error in server")}))}}("fantasy",o))}),[o,e]),a?Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{className:"my-5 py-3 text-muted text-center border border-3 shadow",children:"Top Watched"}),Object(U.jsx)("div",{className:"row",children:a.map((function(e,t){return Object(U.jsx)(ee,{movie:e},e.imdbID+t)}))}),c&&Object(U.jsx)(H,{}),Object(U.jsx)("button",{id:"mybtn",className:"btn btn-outline-success w-100",onClick:function(){l((function(e){return e+1}))},disabled:c,children:c?"Loading...":"Show More"})]}):Object(U.jsx)(V,{})},se=function(){var e=Object(u.g)();return Object(n.useEffect)((function(){var t=e.listen((function(){window.scrollTo(0,0)}));return function(){t()}})),null},ie=c(157),oe=c(154),le=c(62),je=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return{user:e.user,isLoading:e.shared.loading}})),c=t.user,a=t.isLoading,r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=function(){var t=Object(I.a)(k.a.mark((function t(c){var n,a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),n=c.target.email.value,a=c.target.password.value,e(x(!0)),t.prev=4,t.next=7,Object(le.d)(D,n,a);case 7:l(""),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(4),e(x(!1)),l(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}();return c?Object(U.jsx)(u.a,{to:"/"}):Object(U.jsxs)(G.a,{className:"py-5 m-auto shadow",style:{maxWidth:"500px"},children:[Object(U.jsx)(G.a.Title,{className:"text-center text-danger",children:Object(U.jsx)("h1",{children:"Sing In"})}),Object(U.jsxs)(G.a.Body,{children:[o&&Object(U.jsx)(W.a,{variant:"danger",children:o}),Object(U.jsxs)("form",{onSubmit:j,children:[Object(U.jsxs)(ie.a.Group,{className:"mb-4",children:[Object(U.jsx)(ie.a.Label,{children:"Email"}),Object(U.jsx)(ie.a.Control,{required:!0,name:"email",type:"email",placeholder:"name@example.com"})]}),Object(U.jsxs)(ie.a.Group,{className:"mb-4",children:[Object(U.jsx)(ie.a.Label,{children:"Password"}),Object(U.jsx)(ie.a.Control,{required:!0,name:"password",type:"password",placeholder:"Enter Your Password"})]}),Object(U.jsx)(b.a,{type:"submit",className:"w-100 mb-3",variant:"outline-danger",size:"lg",disabled:a,children:a?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("span",{className:"me-3",children:"Loading"}),Object(U.jsx)(oe.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})]}):"Sign In"}),Object(U.jsxs)("div",{children:["Don't Have An Account"," ",Object(U.jsx)(m.b,{to:"/signup",className:"text-primary",children:"Create One"})]})]})]})]})},de="SIGN_IN",be="SIGN_OUT",ue="UPDATE_USER_INFO",me=function(){return{type:be}},he=function(e){return{type:ue,data:e}},Oe=function(e){return function(t){e?Object(E.b)(Object(E.a)(R,"users",e)).then((function(e){var c;t((c=e.data(),{type:de,currentUser:c}))})).catch((function(e){alert(e.message),t(x(!1))})):(t(me()),t(x(!1)))}},xe=function(e,t,c,n){return function(a){a(x(!0));var r=Object(T.c)(F,"images/".concat(e.name)),s=Object(T.d)(r,e);s.on("state_changed",(function(e){var t=Math.floor(e.bytesTransferred/e.totalBytes*100);switch(console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){alert(e.message),a(x(!1))}),(function(){Object(T.a)(s.snapshot.ref).then(function(){var e=Object(I.a)(k.a.mark((function e(r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(pe(t,Object(q.a)(Object(q.a)({},c),{},{imageURL:r}),n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}},pe=function(e,t,c){return function(){var n=Object(I.a)(k.a.mark((function n(a){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x(!0)),n.prev=1,n.next=4,Object(E.e)(Object(E.a)(R,"users",e),t);case 4:a(he(t)),a(x(!1)),c(),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(1),alert(n.t0.message),a(x(!1)),c();case 14:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},fe=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return{user:e.user,isLoading:e.shared.loading}})),c=t.user,a=t.isLoading,r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=function(t,c,n,a){e(function(e,t,c,n){return function(){var a=Object(I.a)(k.a.mark((function a(r){var s,i;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(x(!0)),a.prev=1,a.next=4,Object(le.a)(D,e,t);case 4:return s=a.sent,i=s.user,a.next=8,Object(E.d)(Object(E.a)(R,"users",i.uid),Object(q.a)(Object(q.a)({},c),{},{uid:i.uid}));case 8:n(""),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),r(x(!1)),n(a.t0.message);case 15:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()}(t,c,n,a))},d=function(){var e=Object(I.a)(k.a.mark((function e(t){var c,n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=t.target.email.value,n=t.target.password.value,a={email:c,firstName:t.target.firstName.value,secondName:t.target.secondName.value,imageURL:"imgs/avatar.jfif"},j(c,n,a,l);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(U.jsx)(u.a,{to:"/"}):Object(U.jsxs)("div",{className:"mx-auto",style:{maxWidth:"700px"},children:[Object(U.jsx)("h1",{className:"fw-bold text-danger text-center border border-2 shadow py-2 mb-5",children:"Sing Up"}),o&&Object(U.jsx)(W.a,{variant:"danger",children:o}),Object(U.jsxs)("form",{onSubmit:d,children:[Object(U.jsxs)(ie.a.Group,{className:"mb-4",children:[Object(U.jsx)(ie.a.Label,{children:"Email"}),Object(U.jsx)(ie.a.Control,{required:!0,name:"email",type:"email",placeholder:"name@example.com"})]}),Object(U.jsxs)(ie.a.Group,{className:"mb-4",children:[Object(U.jsx)(ie.a.Label,{children:"Password"}),Object(U.jsx)(ie.a.Control,{required:!0,name:"password",type:"password",placeholder:"Enter Your Password"})]}),Object(U.jsxs)(ie.a.Group,{className:"mb-4",children:[Object(U.jsx)(ie.a.Label,{children:"First Name"}),Object(U.jsx)(ie.a.Control,{required:!0,name:"firstName",type:"text",placeholder:"First Name"})]}),Object(U.jsxs)(ie.a.Group,{className:"mb-4",children:[Object(U.jsx)(ie.a.Label,{children:"Second Name"}),Object(U.jsx)(ie.a.Control,{required:!0,name:"secondName",type:"text",placeholder:"Second Name"})]}),Object(U.jsx)(b.a,{type:"submit",variant:"danger",size:"lg",disabled:a,children:a?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("span",{className:"me-3",children:"Loading"}),Object(U.jsx)(oe.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})]}):"Sing Up"})]}),Object(U.jsxs)("div",{className:"mt-3",children:["Already Have An Account"," ",Object(U.jsx)(m.b,{to:"/signin",className:"text-primary",children:"Sign In"})]})]})},ge=c(11),ve=["component","user"],Ne=function(e){var t=e.component,c=e.user,n=Object(ge.a)(e,ve);return Object(U.jsx)(u.b,Object(q.a)(Object(q.a)({},n),{},{render:function(e){return c?Object(U.jsx)(t,Object(q.a)({},e)):Object(U.jsx)(u.a,{to:"/signin"})}}))},ye=c(162),we=c(156),Se=c(105),ke=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return{user:e.user,loading:e.shared.user}})),c=t.user,a=t.loading,r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(n.useState)(c.firstName),d=Object(i.a)(j,2),u=d[0],m=d[1],O=Object(n.useState)(c.secondName),x=Object(i.a)(O,2),p=x[0],f=x[1],g=Object(n.useState)(null),v=Object(i.a)(g,2),N=v[0],y=v[1],w=Object(n.useState)(c.imageURL),S=Object(i.a)(w,2),k=S[0],I=S[1],C=function(){return l(!1)};return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(b.a,{variant:"primary",onClick:function(){return l(!0)},children:"Update Prifile"}),Object(U.jsxs)(we.a,{show:o,onHide:C,centered:!0,children:[Object(U.jsx)(we.a.Header,{closeButton:!0,children:Object(U.jsx)(we.a.Title,{children:"Update User Informations"})}),Object(U.jsxs)(we.a.Body,{children:[Object(U.jsx)("img",{src:k,alt:"user profile pic",className:"mb-4 d-block m-auto",style:{maxHeight:"200px",maxWidth:"100%",objectFit:"contain",borderRadius:"10px"}}),Object(U.jsx)(b.a,{variant:"success",onClick:function(e){var t=document.createElement("input");t.type="file",t.onchange=function(e){var t=e.target.files[0];y(t),I(URL.createObjectURL(t))},t.click()},children:"Select Image"}),Object(U.jsxs)(ye.a,{variant:"flush",className:"fs-3 mt-5 py-3",children:[Object(U.jsxs)(ye.a.Item,{children:["First Name:"," ",Object(U.jsx)(Se.a,{required:!0,value:u,onChange:function(e){m(e.target.value)}})]}),Object(U.jsxs)(ye.a.Item,{children:["Second Name:"," ",Object(U.jsx)(Se.a,{required:!0,value:p,onChange:function(e){f(e.target.value)}})]})]})]}),Object(U.jsxs)(we.a.Footer,{children:[Object(U.jsx)(b.a,{variant:"secondary",onClick:C,children:"Cancel"}),Object(U.jsx)(b.a,{variant:"primary",onClick:function(){!function(t,c){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0;e(n?xe(n,t,c,a):pe(t,c,a))}(c.uid,{firstName:u,secondName:p},N,C)},disabled:a,children:a?"Loading...":"Save Changes"})]})]})]})},Ie=function(){var e=Object(h.c)((function(e){return{user:e.user,loading:e.shared.loading}})),t=e.user;e.loading;return Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{className:"text-center mb-5 text-danger border shadow py-2",children:"User Proflile Information"}),Object(U.jsxs)("div",{className:"row",children:[Object(U.jsx)("div",{className:"col-lg-4",children:Object(U.jsx)("img",{src:t.imageURL,alt:"user profile pic",className:"mb-4 d-block m-auto",style:{maxHeight:"400px",maxWidth:"100%",objectFit:"contain",borderRadius:"10px"}})}),Object(U.jsx)("div",{className:"col-lg-8",children:Object(U.jsxs)(ye.a,{variant:"flush",className:"fs-3 mt-5 py-3",children:[Object(U.jsxs)(ye.a.Item,{children:["First Name: ",t.firstName]}),Object(U.jsxs)(ye.a.Item,{children:["Second Name: ",t.secondName]}),Object(U.jsxs)(ye.a.Item,{children:["Email: ",t.email]})]})})]}),Object(U.jsx)(ke,{})]})},Ce=(c(144),c(145),function(){var e=Object(h.c)((function(e){return e.user})),t=Object(h.b)();return Object(n.useEffect)((function(){var e=Object(M.b)(D,(function(e){t(e?Oe(e.uid):me())}));return e}),[]),Object(U.jsxs)(m.a,{children:[Object(U.jsx)(se,{}),Object(U.jsx)(B,{}),Object(U.jsx)("div",{className:"container padding-y-150",style:{minHeight:"90vh"},children:Object(U.jsxs)(u.d,{children:[Object(U.jsx)(Ne,{user:e,exact:!0,path:"/",component:re}),Object(U.jsx)(Ne,{user:e,exact:!0,path:"/search",component:ae}),Object(U.jsx)(Ne,{user:e,exact:!0,path:"/movie/:id",component:Z}),Object(U.jsx)(Ne,{user:e,exact:!0,path:"/user/profile",component:Ie}),Object(U.jsx)(u.b,{exact:!0,path:"/signin",component:je}),Object(U.jsx)(u.b,{exact:!0,path:"/signup",component:fe}),Object(U.jsx)(u.b,{path:["*","/404"],component:V})]})}),Object(U.jsx)(_,{})]})}),Le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,163)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},Ee=c(22),Me={initialMovies:[],search:{text:"",page:1,movies:[],response:"",totalResults:""},movie:{}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(q.a)(Object(q.a)({},e),{},{initialMovies:[].concat(Object(Ee.a)(e.initialMovies),Object(Ee.a)(t.movies))});case g:return Object(q.a)(Object(q.a)({},e),{},{movie:t.movie});case f:return Object(q.a)(Object(q.a)({},e),{},{search:t.search});case be:return Me;default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(q.a)({},t.currentUser);case be:return null;case ue:return Object(q.a)(Object(q.a)({},e),t.data);default:return e}},Re={loading:!1},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;return t.type===O?Object(q.a)(Object(q.a)({},e),{},{loading:t.value}):e},Ue=c(58),Pe=Object(Ue.b)({user:De,movies:Te,shared:Fe}),Ae=c(106),Be=Object(Ue.a)(Ae.a),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ue.c,He=Object(Ue.d)(Pe,_e(Be));s.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(h.a,{store:He,children:Object(U.jsx)(Ce,{})})}),document.getElementById("root")),Le()}},[[146,1,2]]]);
//# sourceMappingURL=main.8bf35a92.chunk.js.map