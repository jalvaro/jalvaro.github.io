(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},149:function(e,t,n){e.exports=n(357)},154:function(e,t,n){},156:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(61),i=n.n(o),c=(n(154),n(16)),l=n(17),s=n(19),u=n(18),p=n(20),d=n(144),m=n.n(d),h=(n(156),n(361)),g=n(359),f=n(360),v=n(29),E=n(147),O=n.n(E),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleToggleOpen=function(){return n.setState({isOpen:!n.state.isOpen})},n.getDescription=function(e){return Object.keys(e).map(function(t,n){return r.a.createElement("div",{key:n},r.a.createElement("strong",null,t,":")," ",e[t])})},n.state={isOpen:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{onClick:this.handleToggleOpen},r.a.createElement("strong",null,this.props.index+1+". "+this.props.antenna.properties["C\xf3digo"])),this.state.isOpen&&r.a.createElement("div",{style:{paddingLeft:"10px"}},this.getDescription(this.props.antenna.properties)))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleToggleOpen=function(){return n.setState({isOpen:!n.state.isOpen})},n.state={isOpen:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.Marker,{position:this.props.marker.position,onClick:this.handleToggleOpen},this.state.isOpen&&r.a.createElement(v.InfoWindow,{onCloseClick:this.handleToggleOpen},r.a.createElement("div",null,this.props.marker.antennas.map(function(e,t){return r.a.createElement(w,{key:t,antenna:e,index:t})}))))}}]),t}(a.Component),y=Object(v.withScriptjs)(Object(v.withGoogleMap)(function(e){return r.a.createElement("div",null,r.a.createElement(v.GoogleMap,{defaultZoom:13,defaultCenter:{lat:41.860768,lng:-3.388736}},Object.values(e.markers).map(function(e,t){return r.a.createElement(b,{key:t,marker:e})}),r.a.createElement(O.a,{onOverlayComplete:k(e),defaultDrawingMode:window.google.maps.drawing.OverlayType.RECTANGLE,defaultOptions:{drawingControl:!0,drawingControlOptions:{position:window.google.maps.ControlPosition.TOP_CENTER,drawingModes:[window.google.maps.drawing.OverlayType.RECTANGLE]}}})))})),k=function(e){return function(t){var n=t.overlay;google.maps.event.clearInstanceListeners(n),n.setMap(null);var a=j(n.getBounds().getSouthWest()),r=j(n.getBounds().getNorthEast());e.updateArea(a,r)}},j=function(e){return{lat:e.lat(),lng:e.lng()}},A=y,C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(A,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAD3PcPQGczmphFRsTbIb0R3RSrSw6SWA4",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),markers:this.props.markers,updateArea:this.props.updateArea})}}]),t}(a.Component),S=(n(355),function(e){var t=new URL("https://infoantenas.herokuapp.com/antennas"),n={lat1:e.SWPoint.lat,lng1:e.SWPoint.lng,lat2:e.NEPoint.lat,lng2:e.NEPoint.lng};return Object.keys(n).forEach(function(e){return t.searchParams.append(e,n[e])}),fetch(t).then(function(e){return e.json()}).then(N)}),N=function(e){return"undefined"===typeof e||"undefined"===typeof e.features?[]:e.features.reduce(T,{})},T=function(e,t){var n=JSON.stringify(t.geometry.coordinates);return e[n]?e[n].antennas=e[n].antennas.concat(t):e[n]=P(t),e},P=function(e){return{position:{lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]},antennas:[e]}},W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedArea:{SWPoint:{lat:41.738103675076,lng:-3.6525553686015},NEPoint:{lat:42.044144009778,lng:-3.2428779584757}},markers:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;S(this.state.selectedArea).then(function(t){return e.setState({markers:t})})}},{key:"componentDidUpdate",value:function(e,t,n){var a=this;this.state.selectedArea!==t.selectedArea&&S(this.state.selectedArea).then(function(e){return a.setState({markers:e})})}},{key:"handler",value:function(e,t){this.setState({selectedArea:{SWPoint:e,NEPoint:t}})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"700px"}},r.a.createElement("h2",null,"Mobile Antennas"),r.a.createElement(C,{markers:this.state.markers,updateArea:this.handler.bind(this)}))}}]),t}(r.a.Component);function M(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"))}var x=function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/mobileAntennas"},"Mobile Antennas"))),r.a.createElement("hr",null),r.a.createElement(f.a,{exact:!0,path:"/",component:M}),r.a.createElement(f.a,{path:"/mobileAntennas",component:W})))},R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"Welcome to my space of creation")),r.a.createElement("p",{className:"App-intro"},"Some ongoing stuff:"),r.a.createElement(x,null))}}]),t}(a.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");L?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):D(e)})}}()}},[[149,2,1]]]);
//# sourceMappingURL=main.e1f7e759.chunk.js.map