(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(62)},39:function(e,t,n){},40:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),o=n.n(l),c=(n(39),n(2)),i=n(3),u=n(5),s=n(4),p=n(6),h=(n(40),n(11)),m=n(31),d=n(12),E=n.n(d),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.login=function(){var e={username:n.state.username,password:n.state.password};E.a.post("/auth/login",e).then(function(e){e.data.success?n.props.history.push("/auth"):alert(e.data.err)})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Username"),r.a.createElement("input",{type:"text",value:this.state.username,placeholder:"Username",name:"username",onChange:this.handleChange}),r.a.createElement("p",null,"Password"),r.a.createElement("input",{type:"password",value:this.state.password,placeholder:"Password",name:"password",onChange:this.handleChange}),r.a.createElement("p",null),r.a.createElement("button",{onClick:this.login},"Login"))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){E.a.post("/auth/logout").then(function(e){e.data.success?n.props.history.push("/login"):alert(e.data.err)})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/auth/user").then(function(t){t.data.success||e.props.history.push("/login")})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",{onClick:this.logout},"Logout"),"This is how many people are comming: This is the list of songs people want: This is all the addresses:")}}]),t}(a.Component),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome"),r.a.createElement("h2",null,"Kaylah and Jacob"),r.a.createElement("h4",null,"9/21/19"))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Amazon"),r.a.createElement("a",{href:"https://www.amazon.com/"},"Registry"),r.a.createElement("h2",null,"Target"),r.a.createElement("a",{href:"https://www.target.com/"},"Registry"))}}]),t}(a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Name:"),r.a.createElement("input",{type:"text",placeholder:"Name"}),r.a.createElement("p",null,"Are you comming?"),r.a.createElement("select",null,r.a.createElement("option",null),r.a.createElement("option",null,"Yes"),r.a.createElement("option",null,"No")),r.a.createElement("p",null,"Address line 1:"),r.a.createElement("input",{type:"text",placeholder:"Address line 1"}),r.a.createElement("p",null,"Address line 2:"),r.a.createElement("input",{type:"text",placeholder:"Address line 2"}),r.a.createElement("p",null,"City:"),r.a.createElement("input",{type:"text",placeholder:"City"}),r.a.createElement("p",null,"State:"),r.a.createElement("input",{type:"text",placeholder:"State"}),r.a.createElement("p",null,"Zip code:"),r.a.createElement("input",{type:"text",placeholder:"Zip code"}),r.a.createElement("p",null,"What song would you like to hear?:"),r.a.createElement("input",{type:"text",placeholder:"Song"}),r.a.createElement("p",null),r.a.createElement("button",null,"Submit"))}}]),t}(a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/login",component:g}),r.a.createElement(h.a,{path:"/registry",component:b}),r.a.createElement(h.a,{path:"/rsvp",component:v}),r.a.createElement(h.a,{path:"/auth",component:y}),r.a.createElement(h.a,{exact:!0,path:"/",component:f})))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).goHome=function(){e.props.history.push("/")},e.loginClick=function(){e.props.history.push("/login")},e.rsvpClick=function(){e.props.history.push("/rsvp")},e.registryClick=function(){e.props.history.push("/registry")},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){E.a.get("/api/ping").then(function(e){console.log(e.data)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"overhead"},r.a.createElement("h5",{onClick:this.loginClick},"Login"),r.a.createElement("h1",{onClick:this.goHome},"Home"),r.a.createElement("h1",{onClick:this.rsvpClick},"RSVP"),r.a.createElement("h1",{onClick:this.registryClick},"Registry")),r.a.createElement(j,null))}}]),t}(a.Component),w=Object(h.f)(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(15);o.a.render(r.a.createElement(k.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.bcd3cef4.chunk.js.map