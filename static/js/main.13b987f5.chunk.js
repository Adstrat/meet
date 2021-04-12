(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{190:function(e,t,n){},191:function(e,t,n){},211:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62),s=n.n(o),i=(n(190),n(21)),c=n(26),l=n(22),u=n(23),h=(n(191),n(5)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsxs)("div",{className:"overview",children:[Object(h.jsx)("h2",{children:t.summary}),Object(h.jsx)("p",{children:t.start.dateTime}),Object(h.jsx)("p",{children:t.location}),!e&&Object(h.jsx)("button",{className:"show-details",onClick:this.handleShowDetails,children:"Show Details"})]}),e&&Object(h.jsxs)("div",{className:"event__Details",children:[Object(h.jsx)("h3",{children:"About this Event:"}),Object(h.jsx)("a",{href:t.htmlLink,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{className:"google-btn",children:"See details on Google Calendar"})}),Object(h.jsx)("p",{children:t.description}),Object(h.jsx)("button",{className:"hide-details",onClick:this.handleShowDetails,children:"Hide Details"})]})]})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventsList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(p),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"bold",margin:"28px"}},a.color="red",a}return n}(p),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontSize:"20px",margin:"25px"}},a.color="green",a}return n}(p),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="firebrick",a}return n}(p),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"The city you're looking for can't be found"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("div",{className:"alert-message",children:Object(h.jsx)(b,{text:this.state.infoText})}),Object(h.jsx)("label",{className:"input-message",children:"Select a city:"}),Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleNumberChange=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),n<0||n>32?e.setState({errorText:"Select a number between 1 and 32"}):n.toLowerCase()!==n.toUpperCase()?e.setState({warningText:"Input field only accepts numbers"}):e.setState({errorText:"",warningText:""}),e.props.updateEvents(null,n)},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"numberOfEvents",children:[Object(h.jsxs)("div",{className:"alert-message",children:[Object(h.jsx)(v,{text:this.state.errorText}),Object(h.jsx)(m,{text:this.state.warningText})]}),Object(h.jsx)("label",{className:"input-message",children:"Number of Events:"}),Object(h.jsx)("input",{type:"text",className:"input-number",value:this.state.numberOfEvents,onChange:this.handleNumberChange})]})}}]),n}(a.Component),O=n(28),x=n.n(O),y=n(71),k=n(180),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-04-12T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-04-12T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2021-04-12T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-04-15T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-04-15T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-04-15T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],T=n(112),E=n.n(T),C=n(72),N=n.n(C),D=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},Z=function(){var e=Object(y.a)(x.a.mark((function e(){var t,n,a,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,L();case 10:if(!(n=e.sent)){e.next=20;break}return W(),a="https://r1dakinba1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,E.a.get(a);case 16:return(r=e.sent).data&&(o=D(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),N.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e;window.history.pushState&&window.location.pathname?(e=window.location.protocol+"//"+window.location.host+window.location.pathname,window.history.pushState("","",e)):(e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e))},A=function(){var e=Object(y.a)(x.a.mark((function e(t){var n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://r1dakinba1.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(y.a)(x.a.mark((function e(){var t,n,a,r,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://r1dakinba1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&A(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=(n(211),n(350)),q=n(351),J=n(355),U=n(176),B=n(177),R=n(75),F=n(181),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all"},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?Z().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t})})):Z().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:D(t)}),navigator.onLine?e.setState({offlineText:""}):e.setState({offlineText:"You are currently offline. Events shown might not be up-to-date"})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"alert-message",children:Object(h.jsx)(j,{text:this.state.offlineText})}),Object(h.jsx)("h2",{className:"meet-title",children:"Meet App"}),Object(h.jsx)(g,{locations:t,updateEvents:this.updateEvents,numberOfEvents:n}),Object(h.jsx)(w,{numberOfEvents:n,updateEvents:this.updateEvents}),Object(h.jsx)("h4",{children:"Events in each city"}),Object(h.jsx)(M.a,{height:400,children:Object(h.jsxs)(q.a,{width:800,height:400,margin:{top:20,right:20,bottom:20,left:20},children:[Object(h.jsx)(J.a,{}),Object(h.jsx)(U.a,{type:"category",dataKey:"city",name:"city"}),Object(h.jsx)(B.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(h.jsx)(R.a,{cursor:{strokeDasharray:"3 3"}}),Object(h.jsx)(F.a,{data:this.getData(),fill:"#8884d8"})]})}),Object(h.jsx)(f,{events:a})]})}}]),n}(a.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,357)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))},G=n(178);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}(),G.config("b402e4864af94b3980806c1367f7b389").install(),Y()}},[[348,1,2]]]);
//# sourceMappingURL=main.13b987f5.chunk.js.map