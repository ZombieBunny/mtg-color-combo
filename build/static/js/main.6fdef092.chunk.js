(this["webpackJsonpmtg-color-combos"]=this["webpackJsonpmtg-color-combos"]||[]).push([[0],{12:function(e,o,n){},13:function(e,o,n){},15:function(e,o,n){"use strict";n.r(o);var t=n(1),c=n.n(t),l=n(3),r=n.n(l),a=(n(12),n(4)),i=n(5),s=n(7),u=n(6),h=(n(13),["White","Black","Blue","Red","Green"]),m=[{name:"Pick a color",color:[]},{name:"All the colors",color:["White","Black","Blue","Red","Green"]},{name:"Mono White",color:["White"]},{name:"Mono Blue",color:["Blue"]},{name:"Mono Red",color:["Red"]},{name:"Mono Black",color:["Black"]},{name:"Mono Green",color:["Green"]},{name:"Azorius",color:["White","Blue"]},{name:"Boros",color:["Red","White"]},{name:"Dimir",color:["Blue","Black"]},{name:"Golgari",color:["Black","Green"]},{name:"Gruul",color:["Red","Green"]},{name:"Izzet",color:["Blue","Red"]},{name:"Orzhov",color:["White","Black"]},{name:"Rakdos",color:["Black","Red"]},{name:"Selesnya",color:["White","Green"]},{name:"Simic",color:["Blue","Green"]},{name:"Abzan",color:["White","Black","Green"]},{name:"Bant",color:["White","Blue","Green"]},{name:"Esper",color:["White","Blue","Black"]},{name:"Grixis",color:["Blue","Black","Red"]},{name:"Jeskai",color:["White","Blue","Red"]},{name:"Jund",color:["Black","Red","Green"]},{name:"Mardu",color:["White","Black","Red"]},{name:"Naya",color:["White","Red","Green"]},{name:"Sultai",color:["Blue","Black","Green"]},{name:"Temur",color:["Blue","Red","Green"]},{name:"Glint",color:["Black","Green","Blue","Red"]},{name:"Dune",color:["White","Black","Green","Red"]},{name:"Ink",color:["White","Green","Blue","Red"]},{name:"Witch",color:["White","Black","Green","Blue"]},{name:"Yore",color:["White","Black","Blue","Red"]}],d=n(0),B=function(e){Object(s.a)(n,e);var o=Object(u.a)(n);function n(e){var t;return Object(a.a)(this,n),(t=o.call(this,e)).selected=[],t.state={combo:m[0]},t}return Object(i.a)(n,[{key:"selectColor",value:function(e){var o=this;this.selected.includes(e)?this.selected=this.selected.filter((function(o){return o!==e})):this.selected.push(e),console.log(e,this.selected),this.selected&&this.selected.length&&this.setState({combo:m.filter((function(e){if(e.color.length===o.selected.length&&o.hasMatch(e.color))return e}))[0]})}},{key:"hasMatch",value:function(e){var o=function(e,o){return e+o};return e.sort().reduce((function(e,n){return o(e,n)}))===this.selected.sort().reduce((function(e,n){return o(e,n)}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("span",{className:"options",children:h.map((function(o){return Object(d.jsx)("button",{onClick:function(){return e.selectColor(o)},className:"".concat(o," ").concat(e.selected.includes(o)?"selected":""),children:"\xa0"},o)}))}),Object(d.jsx)("h2",{className:"result",children:this.state&&this.state.combo?this.state.combo.name:"Pick a color"})]})}}]),n}(t.Component),k=B,G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(o){var n=o.getCLS,t=o.getFID,c=o.getFCP,l=o.getLCP,r=o.getTTFB;n(e),t(e),c(e),l(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),G()}},[[15,1,2]]]);
//# sourceMappingURL=main.6fdef092.chunk.js.map