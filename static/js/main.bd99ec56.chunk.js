(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports={board:"Game_board__2YLv1",grid:"Game_grid__wxxqC",player:"Game_player__9Tkwh",winner:"Game_winner__2p6f2"}},55:function(e,t,a){e.exports=a(86)},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(60),a(61),a(14)),s=a(15),i=a(20),u=a(11),m=a(21),f=a(88),d=a(89),p=a(50),h=(a(62),a(6)),E=a(24),b=a(29),v=a.n(b);function g(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return c=e.done,e},e:function(e){o=!0,l=e},f:function(){try{c||null==a.return||a.return()}finally{if(o)throw l}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var w=function(e){switch(e){case 0:return"";case 1:return"O";case-1:default:return"X"}},j=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={grids:[0,0,0,0,0,0,0,0,0],player:1,winner:0},a.handleClick=function(e){if(0===a.state.winner){var t=Object(E.a)(a.state.grids);0===t[e]&&(t[e]=a.state.player,a.setState({grids:t,player:-1*a.state.player}))}},a.reset=function(){a.setState({grids:[0,0,0,0,0,0,0,0,0],player:1,winner:0})},a.getWinner=function(){var e,t=a.state.grids,n=g(j);try{for(n.s();!(e=n.n()).done;){var r=e.value,l=Object(h.a)(r,3),c=l[0],o=l[1],s=l[2];if(t[c]===t[o]&&t[o]===t[s])return t[c]}}catch(i){n.e(i)}finally{n.f()}return 0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.grids!==this.state.grids&&this.setState({winner:this.getWinner()})}},{key:"render",value:function(){var e=this,t=this.state,a=t.grids,n=t.player,l=t.winner;return r.a.createElement("div",{className:v.a.board},r.a.createElement("div",null,a.map(function(t,a){return r.a.createElement("div",{className:v.a.grid,key:a,onClick:function(){return e.handleClick(a)}},r.a.createElement("span",null,w(t)))})),r.a.createElement("div",{className:v.a.player},"Player: ",w(n)),r.a.createElement("div",{className:v.a.winner},"Winner: ",w(l)),r.a.createElement("button",{onClick:this.reset},"Reset"))}}]),t}(n.Component),C=(a(63),a(91)),S=a(93),k=Object(n.createContext)({}),x=k.Provider,N=k.Consumer,_=function(){return r.a.createElement(N,null,function(e){var t=e.setState;return r.a.createElement(C.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(f.a,null,r.a.createElement(C.a.Collapse,{className:"justify-content-end"},r.a.createElement(C.a.Text,null,r.a.createElement(S.a,{variant:"secondary",onClick:function(e){e.preventDefault(),t({modal:"login"})}},"Login")))))})},A=a(90),I=a(92),L=a(49),P=a.n(L),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.onChangeUsername=function(e){a.setState({username:e.target.value})},a.onChangePassword=function(e){a.setState({password:e.target.value})},a.onSubmit=function(e){e.preventDefalt();var t=a.state,n=t.username,r=t.password;P.a.post("/api/login",{username:n,password:r}).then(function(e){e.data.success&&a.props.setState({modal:null,login:!0})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement(I.a,{onSubmit:this.onSubmit},r.a.createElement(I.a.Group,{className:"mb-3",controlId:"formAccount"},r.a.createElement(I.a.Label,null,"Account:"),r.a.createElement(I.a.Control,{type:"text",value:t,placeholder:"Enter account",onChange:this.onChangeUsername}),r.a.createElement(I.a.Text,{className:"text-muted"})),r.a.createElement(I.a.Group,{className:"mb-3",controlId:"formPassword"},r.a.createElement(I.a.Label,null,"Password:"),r.a.createElement(I.a.Control,{type:"password",value:a,placeholder:"Password",onChange:this.onChangePassword})),r.a.createElement(S.a,{variant:"primary",type:"submit"},"Submit"))}}]),t}(n.Component),D=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),a=t[0],l=t[1],c=function(){return l(!0)};return r.a.createElement(N,null,function(e){var t=e.state,n=e.setState,l=t.modal;return l?r.a.createElement(A.a,{size:"lg",show:a,onHide:c},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,"Modal heading")),r.a.createElement(A.a.Body,null,function(e,t){switch(e){case"login":return r.a.createElement(T,{setState:t});default:return null}}(l,n))):null})},G=a(94),U=function(e){var t=e.addItem,a=Object(n.useState)(""),l=Object(h.a)(a,2),c=l[0],o=l[1],s=Object(n.useRef)();return Object(n.useEffect)(function(){s.current.focus()}),r.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),t(c),o("")}},r.a.createElement(G.a,{className:"mb-3"},r.a.createElement(I.a.Control,{type:"text",placeholder:"\u8f38\u5165\u6587\u5b57",value:c,onChange:function(e){o(e.target.value)},ref:s}),r.a.createElement(S.a,{variant:"primary",type:"submit"},"Submit")))},B=(a(85),function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(U,{addItem:function(e){l([].concat(Object(E.a)(a),[{id:Date.now(),text:e}]))}}),r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{className:"todolist_li",key:e.id,onClick:function(){return t=e.id,void l(a.filter(function(e){return e.id!==t}));var t}},e.text)})))}),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={filter:"",lessons:[],modal:null,login:!1},a.onChangeFilter=function(e){var t=e.target.value;a.setState({filter:t},a.fetchLessons)},a.fetchLessons=function(){clearTimeout(a.timer),a.timer=setTimeout(function(){var e=a.state.filter;fetch("/api/lessons?filter=".concat(e)).then(function(e){return e.json()}).then(function(e){return a.setState({lessons:e})})},300)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchLessons()}},{key:"render",value:function(){var e=this.state,t=e.filter,a=e.lessons,n={state:this.state,setState:this.setState.bind(this)};return r.a.createElement(f.a,{fluid:!0},r.a.createElement(d.a,null,r.a.createElement(p.a,{xs:"12",sm:"12",md:"12",lg:"12",className:"p1 mb-3 p-3"},r.a.createElement(d.a,null,r.a.createElement(p.a,{xs:"12",sm:"12",md:"6",lg:"6",className:"mb-3"},r.a.createElement("h4",null,"\u5217\u8868\u904e\u6ffe:"),r.a.createElement("input",{value:t,onChange:this.onChangeFilter}),r.a.createElement("ul",{className:"filter_ul"},a.map(function(e){return r.a.createElement("li",{key:e.id},e.title)}))),r.a.createElement(p.a,{xs:"12",sm:"12",md:"6",lg:"6",className:"mb-3"},r.a.createElement("h4",null,"\u4e95\u5b57\u904a\u6232:"),r.a.createElement(O,null)))),r.a.createElement(p.a,{xs:"12",sm:"12",md:"12",lg:"12",className:"p2 p-3"},r.a.createElement(d.a,null,r.a.createElement(p.a,{xs:"12",sm:"12",md:"6",lg:"6",className:"mb-3"},r.a.createElement("h4",null,"\u7528 context API \u5be6\u4f5c\u8df3\u7a97:"),r.a.createElement(x,{value:n},r.a.createElement(_,null),r.a.createElement(D,null))),r.a.createElement(p.a,{xs:"12",sm:"12",md:"6",lg:"6",className:"mb-3"},r.a.createElement("h4",null,"\u7528 hooks \u5be6\u4f5c TodoList:"),r.a.createElement(B,null)))),r.a.createElement(p.a,{xs:"12",sm:"12",md:"12",lg:"12",className:"p2 p-3"},r.a.createElement(d.a,null,r.a.createElement("h4",null,"Cookie Clicker \u904a\u6232:")))))}}]),t}(n.Component);c.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.bd99ec56.chunk.js.map