(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},149:function(e,n,t){e.exports=t(357)},154:function(e,n,t){},156:function(e,n,t){},357:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(61),i=t.n(r),c=(t(154),t(30)),l=t(31),s=t(33),u=t(32),m=t(34),p=t(144),d=t.n(p),h=(t(156),t(361)),f=t(359),g=t(360),w=t(40),v=t(147),E=t.n(v),y=Object(w.withScriptjs)(Object(w.withGoogleMap)(function(e){return o.a.createElement("div",null,o.a.createElement(w.GoogleMap,{defaultZoom:13,defaultCenter:{lat:41.860768,lng:-3.388736}},e.markers.map(function(e,n){return o.a.createElement(w.Marker,{key:n,position:e.position})}),o.a.createElement(E.a,{defaultDrawingMode:window.google.maps.drawing.OverlayType.RECTANGLE,defaultOptions:{drawingControl:!0,drawingControlOptions:{position:window.google.maps.ControlPosition.TOP_CENTER,drawingModes:[window.google.maps.drawing.OverlayType.RECTANGLE]}}})))})),b=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).state={markers:[]},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({markers:this.props.antennas})}},{key:"componentDidUpdate",value:function(e){this.props.antennas!==e.antennas&&this.setState({markers:this.props.antennas})}},{key:"render",value:function(){return o.a.createElement(y,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAD3PcPQGczmphFRsTbIb0R3RSrSw6SWA4",loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"100%"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}}),markers:this.state.markers})}}]),n}(a.Component),k=(t(355),function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).state={selectedArea:{pointA:{lat:-3.3525553686015,lng:41.838103675076},pointB:{lat:-3.3428779584757,lng:41.844144009778}},antennas:[]},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then(function(n){return e.setState({antennas:n})})}},{key:"render",value:function(){return o.a.createElement("div",{style:{height:"700px"}},o.a.createElement("h2",null,"Mobile Antennas"),o.a.createElement(b,{antennas:this.state.antennas}))}}]),n}(o.a.Component)),O=function(){return window.fetch("https://infoantenas.herokuapp.com/antennas").then(function(e){return e.json()}).then(j)},j=function(e){return e.features.map(function(e){return{position:{lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]}}})},A=k;function C(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Home"))}var M=function(){return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(f.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(f.a,{to:"/mobileAntennas"},"Mobile Antennas"))),o.a.createElement("hr",null),o.a.createElement(g.a,{exact:!0,path:"/",component:C}),o.a.createElement(g.a,{path:"/mobileAntennas",component:A})))},N=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),o.a.createElement("h1",{className:"App-title"},"Welcome to my space of creation")),o.a.createElement("p",{className:"App-intro"},"Some ongoing stuff:"),o.a.createElement(M,null))}}]),n}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):T(e)})}}()}},[[149,2,1]]]);
//# sourceMappingURL=main.56dc19c8.chunk.js.map