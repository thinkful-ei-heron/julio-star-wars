(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=(n(13),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),h=(n(14),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(t){return e.props.getData(t)},className:"main-form"},r.a.createElement("input",{id:"main-search",type:"text",placeholder:"Name or Title",required:!0}),r.a.createElement("select",{id:"type-selector"},r.a.createElement("option",{value:"people"},"People"),r.a.createElement("option",{value:"films"},"Films"),r.a.createElement("option",{value:"starships"},"Starships"),r.a.createElement("option",{value:"vehicles"},"Vehicles"),r.a.createElement("option",{value:"species"},"Species"),r.a.createElement("option",{value:"planets"},"Planets")),r.a.createElement("button",{type:"submit"},"Search")))}}]),t}(a.Component)),p=(n(15),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"results-container"},r.a.createElement(r.a.Fragment,null,this.props.results.length<1?r.a.createElement("p",null,"Nothing Found"):this.props.results.map((function(e){return r.a.createElement("div",{key:e.name?e.name:e.title,className:"items-container"},r.a.createElement("p",null,e.name?"Name : ".concat(e.name):"Title : ".concat(e.title)),r.a.createElement("p",null,e.birth_year?"Birth Year : ".concat(e.birth_year):""),r.a.createElement("p",null,e.gender?"Sex : ".concat(e.gender):""),r.a.createElement("p",null,e.hair_color?"Hair Color : ".concat(e.hair_color):""))}))))}}]),t}(a.Component)),d=(n(16),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Star Wars Searcher 9000.1"))}}]),t}(a.Component)),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){e.preventDefault();var t="search=".concat(document.getElementById("main-search").value),a=document.getElementById("type-selector").value+"/?";fetch("https://swapi.co/api/"+a+t,{method:"GET",headers:{"content-type":"application/json"}}).then(n.setState({loading:!0})).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){return n.setState({results:e.results,loading:!1})})).catch((function(e){return n.setState({error:e})}))},n.state={results:[],loading:!1,error:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(h,{getData:this.getData}),this.state.loading?r.a.createElement("div",{className:"lds-dual-ring"}):r.a.createElement(p,{results:this.state.results}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a1cf7816.chunk.js.map