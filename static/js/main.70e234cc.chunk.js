(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){"use strict";c.r(e);var n=c(4),a=c.n(n),b=c(3),i=c(1),s=(c(9),c(0)),o=function(t){var e=t.tabs,c=t.selectedTab,n=t.selectedTabId,a=t.onTabSelected;return Object(s.jsxs)("div",{children:[e.map((function(t){return Object(s.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return t.id!==n&&a(t)},children:t.title},t.id)})),Object(s.jsx)("div",{"data-cy":"tab-content",className:"mt-2 border-bottom border-primary",children:c.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var t=Object(i.useState)(r[0]),e=Object(b.a)(t,2),c=e[0],n=e[1],a=Object(i.useState)(r[0].id),d=Object(b.a)(a,2),l=d[0],u=d[1];return Object(s.jsxs)("div",{className:"m-4",children:[Object(s.jsx)("h1",{children:"Selected tab is ".concat(c.title)}),Object(s.jsx)(o,{tabs:r,selectedTab:c,selectedTabId:l,onTabSelected:function(t){n(t),u(t.id)}})]})};a.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))},9:function(t,e,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.70e234cc.chunk.js.map