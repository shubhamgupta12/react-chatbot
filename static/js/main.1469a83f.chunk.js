(this["webpackJsonpchatbot-client"]=this["webpackJsonpchatbot-client"]||[]).push([[0],{34:function(e,t,n){},42:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(8),o=n.n(s),i=(n(34),n(10)),l=n(5),u=n(26),p=n(4),b=n(11),f="INPUT_SUCCESS",d="INPUT_FAIL",h="MESSAGE_SUCCESS",j="MESSAGE_FAIL",O={messages:[{response:{message:"Hi! We are a community marketplace offering a wide variety of products and services from our trusted vendors and partners."},type:"bot"}]},m=Object(l.combineReducers)({chatbot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,a=e.messages;switch(n){case f:return a=[].concat(Object(b.a)(a),[{response:{message:r},type:"user"}]),Object(p.a)(Object(p.a)({},e),{},{messages:a});case d:return Object(p.a)({},e);case h:return a=[].concat(Object(b.a)(a),[{response:r,type:"bot"}]),Object(p.a)(Object(p.a)({},e),{},{messages:a});case j:return a=[].concat(Object(b.a)(a),[{response:"Something doesn't seem right. Please try again.",type:"bot"}]),Object(p.a)(Object(p.a)({},e),{},{messages:a});default:return Object(p.a)({},e)}}}),v=n(27),y=[u.a],g=Object(l.createStore)(m,{},Object(v.composeWithDevTools)(l.applyMiddleware.apply(void 0,y))),x=n(3),w=n.n(x),S=n(6),E=n(16);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N=a.createElement("path",{d:"m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"}),I=a.createElement("path",{d:"m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"});function P(e,t){var n=e.title,r=e.titleId,c=C(e,["title","titleId"]);return a.createElement("svg",k({enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,N,I)}var M=a.forwardRef(P);n.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T=a.createElement("path",{fill:"currentColor",d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"});function _(e,t){var n=e.title,r=e.titleId,c=R(e,["title","titleId"]);return a.createElement("svg",z({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ellipsis-h",className:"svg-inline--fa fa-ellipsis-h fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,T)}var A=a.forwardRef(_),B=(n.p,n(42),n(28)),U=n.n(B),F=Object(i.b)((function(e){return{chat:e.chatbot.messages}}),{userMessage:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:f,payload:e})}catch(r){n({type:d})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},sendMessage:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){var r,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://d7se6vu2fb.execute-api.ap-northeast-1.amazonaws.com/stage1/chat",t.prev=1,r={text:e},t.next=5,U.a.post("".concat("https://d7se6vu2fb.execute-api.ap-northeast-1.amazonaws.com/stage1/chat"),r,{headers:{"Content-Type":"application/json"}});case 5:a=t.sent,n({type:h,payload:a.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("ERROR:",t.t0),n({type:j});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.chat,n=e.userMessage,c=e.sendMessage,s=Object(a.useState)(""),o=Object(E.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(!1),p=Object(E.a)(u,2),b=p[0],f=p[1],d=Object(a.useRef)(null);Object(a.useEffect)((function(){if(b){var e=d.current;e.scrollTop=e.scrollHeight}}),[t,b]);var h=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(i),c(i),l("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:13===(t.keyCode||t.which)&&h();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[b&&Object(r.jsxs)("div",{className:"chat-container",children:[Object(r.jsx)("button",{className:"close-bot",onClick:function(){return f(!1)},children:"\xd7"}),Object(r.jsxs)("div",{ref:d,className:"chat-body",children:[Object(r.jsx)("span",{className:"chat-start",children:"Today"}),t.length?t.map((function(e,t){return Object(r.jsxs)("div",{className:"chat-wrapper",children:[Object(r.jsx)("div",{className:"chat-bubble-".concat(e.type),children:e.response.message}),e.response.responseCard&&e.response.responseCard.genericAttachments[0].buttons.map((function(e,t){return Object(r.jsx)("button",{className:"chat-btn",onClick:function(){return n((t=e).text),void c(t.text);var t},children:e.text},"".concat(e.value,"_").concat(t))}))]},"chat_".concat(t))})):""]}),Object(r.jsxs)("div",{className:"chat-footer",children:[Object(r.jsx)("input",{id:"chatBox",className:"input",onChange:function(e){return l(e.target.value)},onKeyPress:j,value:i,placeholder:"Type a message...",autoComplete:"off"}),Object(r.jsx)("button",{className:"chat-send-btn",onClick:h,children:Object(r.jsx)(M,{})})]})]}),Object(r.jsx)("button",{className:"open-chatbot",onClick:function(){return f(!0)},children:Object(r.jsx)(A,{})})]})})),G=function(){return Object(r.jsx)(i.a,{store:g,children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(F,{})})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.1469a83f.chunk.js.map